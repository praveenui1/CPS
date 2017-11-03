(function(){
var app = angular.module("onlineCPS");

  var defaultController = function($scope, $rootScope, $log, $location,session){
 
      if($rootScope == null || $rootScope.loginStatus == null || $rootScope.loginStatus == "false"){
        session.updateSessionWihReturn().then(function(response){
          redirectNow();
        });
        
      } else {
        redirectNow();
      } 
      
      
      function redirectNow() {
        $log.debug($rootScope.designation);
        if ($rootScope.loginStatus == "true"){
            if($rootScope.designation == "student"){
              $location.path("/finalCPS");
            } else if($rootScope.designation == "advisor"){
              $location.path("/advisorHome");
            } else if($rootScope.designation == "faculty"){
              $location.path("/facultyHome");
            } else if($rootScope.designation == "admin"){
              $location.path("/adminHome");
            } else{
              $log.error("Invalid details !!!");
              $location.path("/login");
            }
        }
      }

  }

  app.controller("defaultController",defaultController);

}());
