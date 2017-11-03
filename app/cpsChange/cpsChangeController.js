(function(){
var app = angular.module("onlineCPS");

 

  var cpsController = function($scope, $http, $log, $location, cpsChangeService,$routeParams){
        
        
        $scope.currentRequest = "display:none;";
        $scope.approvedRequest = "display:none;";
        $scope.rejectedRequest = "display:none;";
        $scope.oldRequest = "display:none;";
        
        
        
        
        var id = "0";    

        if($routeParams.requestID){
          id = $routeParams.requestID;
          console.log(id);
        }
        
        var status
        
        if($routeParams.status){
          status = $routeParams.status;
          if(status == "action"){
            $scope.pageTitle = "Respond to Change Request"
            $scope.listTitle = "CPS Change Request";
          } else if (status == "history"){
            $scope.pageTitle = "Student CPS History Detail"
            $scope.listTitle = "CPS Request History Details";
          } else {
             $location.path("/default");
          }
        }
        
        
        cpsChangeService.requestStatus(id).then(function(response){
          
            if (response.status == 0){
              $scope.currentRequest = "display:block;";
              $scope.approvedRequest = "display:none;";
              $scope.rejectedRequest = "display:none;";
              $scope.oldRequest = "display:none;";
            } else if (response.status == 1){
              $scope.currentRequest = "display:none;";
              $scope.approvedRequest = "display:block;";
              $scope.rejectedRequest = "display:none;";
              $scope.oldRequest = "display:none;";
            } else if (response.status == -1){
              $scope.currentRequest = "display:none;";
              $scope.approvedRequest = "display:none;";
              $scope.rejectedRequest = "display:block;";
              $scope.oldRequest = "display:none;";
            } else if (response.status == -2){
              $scope.currentRequest = "display:none;";
              $scope.approvedRequest = "display:none;";
              $scope.rejectedRequest = "display:none;";
              $scope.oldRequest = "display:block;";
            }
        });
        
        $scope.accept = function() {
          cpsChangeService.action(id,1,Date.now()).then(function(acceptData){
            console.log(acceptData);
            if(acceptData == "success"){
              $scope.currentRequest = "display:none;";
              $scope.approvedRequest = "display:block;";
              $scope.rejectedRequest = "display:none;";
              $scope.oldRequest = "display:none;";
            } else if (acceptData == "fail"){
              $scope.currentRequest = "display:none;";
              $scope.approvedRequest = "display:none;";
              $scope.rejectedRequest = "display:none;";
              $scope.oldRequest = "display:none;";
            }

          });
        }
        
        
        
        
        $scope.reject = function(){

          cpsChangeService.action(id,-1,Date.now()).then(function(rejectData){
            if(rejectData == "success"){
              $scope.currentRequest = "display:none;";
              $scope.approvedRequest = "display:none;";
              $scope.rejectedRequest = "display:block;";
              $scope.oldRequest = "display:none;";
            } else if (rejectData == "fail"){
              $scope.currentRequest = "display:none;";
              $scope.approvedRequest = "display:none;";
              $scope.rejectedRequest = "display:none;";
              $scope.oldRequest = "display:none;";
            }
            
          });
        }
      
     
        cpsChangeService.processdata(id).then(function(response) {
          $log.debug(response);
          $log.debug(response.Approved.Foundations);
          $scope.approvedfoundationitems = response.Approved.Foundations;
          $scope.approvedcoreitems = response.Approved.Corecourses;
          $scope.approvedelectiveitems = response.Approved.Electives;
          $scope.approvedthesisprojitems = response.Approved.Completecourse;
          $scope.requestedfoundationitems = response.Requested.Foundations;
          $scope.requestedcoreitems = response.Requested.Corecourses;
          $scope.requestedelectiveitems = response.Requested.Electives;
          $scope.requestedthesisprojitems = response.Requested.Completecourse;
          $scope.requestID = response.Requested.Corecourses.rId;
          
        }, function(err) {
          console.log(err);
          alert('Sorry there is some problem fetching cps.');
        });

    
    
  }
  
  
  
  app.controller("cpsController",cpsController);
  
  
}());
