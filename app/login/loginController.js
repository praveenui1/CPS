(function(){
var app = angular.module("onlineCPS");

  var loginController = function($scope, $rootScope, $log, $location, loginService,session){
      if($rootScope == null ){
        $log.debug("in login null");
        session.updateSession();
      } 
      
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



      $scope.search = function(){
          $log.info("Authenticating: "+$scope.username)
          loginService.authenticate($scope.username,$scope.password);
      }
  }

  app.controller("loginController",loginController);

}());
