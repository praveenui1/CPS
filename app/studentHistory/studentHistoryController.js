(function() {
  var app = angular.module("onlineCPS");

  var studentHistoryController = function($scope, $rootScope, $log, $location, 
    $routeParams, loginService, session, studentHistoryService) {

    if ($rootScope == null) {
      session.updateSession();
    }

    //$scope.updateButton = "Update CPS";
    $scope.updateButton = "";
    $scope.disableCheck = "";

    $scope.noCPS = "display:none;"
    $scope.yesCPS = "display:none;";

    var sid = "0";    

    if($routeParams.studentID){
      sid = $routeParams.studentID;
      studentHistoryService.getRequests(sid).then(function(response) {
        console.log(response);
        $scope.requests = response;
      }, function(err) {
        $scope.requests = [];
      });
    }
    
    // alert(sid);
    //for testing
    
    // you will be able to reading studient id from url parameters
    
    
    // https://cps-nellurigopinath.c9users.io/#/studentHistory/1455396
    // will give you 1455396 and if no parameters in url then default 0


    $scope.updateCPS = function(){
      $location.path("/raiseRequest/" + sid);
    }
    
    

    
    $scope.historyDetails = function(rid){
      $location.path("/cpsChange/history/" + rid);
    }
    
    
    /*

    studentHistoryService.finalCPS(sid).then(function (response) {
        var docDefinition = response;
        $scope.downloadCPS = function(){
            pdfMake.createPdf(docDefinition).download(sid);
        }
    });

    */
    
    studentHistoryService.finalCPS(sid).then(function (response) {
        var docDefinition = response;
        if(response != "no"){
        const pdfDocGenerator = pdfMake.createPdf(docDefinition);
            pdfDocGenerator.getDataUrl((dataUrl) => {
            document.querySelector('#pdf').src = dataUrl;
            
        });
        
        $scope.noCPS = "display:none;"
        $scope.yesCPS = "display:block;";
        
        $scope.updateButton = "Update CPS";
        $scope.disableCheck = "";
        
        } else {
          $scope.noCPS = "display:block;"
          $scope.yesCPS = "display:none;";
          
          if($rootScope.designation == "faculty"){
            $scope.updateButton = "Update CPS";
            $scope.disableCheck = "disabled";
          } else {
            $scope.updateButton = "Initial CPS";
            $scope.disableCheck = "";
          }
          
        }
        
        
        
    });
    
    
    $scope.downloadCPS = function(){
        studentHistoryService.finalCPS(sid).then(function (response) {
          if(response != "no"){
              pdfMake.createPdf(response).download(sid);
          }
        });
    }

    var someFunction = function() {

    }

    //to call from a view
    $scope.someFunc = function() {

    }
    
    $('.modal').modal();

  }

  app.controller("studentHistoryController", studentHistoryController);

}());
