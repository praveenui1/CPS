(function(){
var app = angular.module("onlineCPS");

 

  var cpsController = function($scope, $http, $log, cpsChangeService){
        $scope.accept = function(requestID) {
         
          cpsChangeService.action(requestID).then(function(response){
            $log.debug(response);
          });
        }
        
        $scope.reject = function(){
          
          
        }
      
     var id = '1455396'
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
          alert('Sorry there is some problem fetching cps.');
        });

    
    
  }
  
  
  
  app.controller("cpsController",cpsController);
  
  
}());
