(function(){
var app = angular.module("onlineCPS");

  var finalCPSController = function($scope, $rootScope, $log,finalCPSService, session, $http){
      session.updateSessionWithUrl("/finalCPS");
      $scope.header = "Final CPS";
      
      $scope.cpsLoader = "display:block;";
      $scope.noCPS = "display:none;";
      $scope.yesCPS = "display:none;";
      
      $log.info("Current Profile User: "+$rootScope.loginId);
  
      /*
      finalCPSService.studentInfo().then(function (response) {
        $scope.studentInfo = response;
        console.log(response);
       
      });
      */
    
      
      var loadFinalCPS = function(){
          
            
            
            finalCPSService.finalCPS().then(function (response) {

            
 
              var docDefinition = response;
              
              if(response == "no"){
                $scope.cpsLoader = "display:none;";
                $scope.noCPS = "display:block;"
                $scope.yesCPS = "display:none;";
              } else{
                
                const pdfDocGenerator = pdfMake.createPdf(docDefinition);
                pdfDocGenerator.getDataUrl((dataUrl) => {
                  document.querySelector('#pdf').src = dataUrl;
                });
                
                $scope.cpsLoader = "display:none;";
                $scope.yesCPS = "display:block;"
                $scope.noCPS = "display:none;";
              }

              
              $scope.download = function(){
                if(response != "no"){
                  pdfMake.createPdf(docDefinition).download("FinalCPS");
                }
              }
            
                
            
             
             
            });
            
            
                   

      }
      
      
      loadFinalCPS();
      
      
      

    
      
    
      
    
    
  }

  app.controller("finalCPSController",finalCPSController);
  
  

}());
