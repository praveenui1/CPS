(function(){
var app = angular.module("onlineCPS");

  var headerController = function($scope, $rootScope, $log, loginService, headerService, session){

      var studentNavLinks = [{key:"Final CPS",value:"./#/finalCPS"},
                        {key:"Request",value:"./#/request"},
                        {key:"Notifications",value:"./#/notifications"},
                        {key:"About Us",value:"./#/about"},
                        {key:"Help",value:"./#/help"},
                        {key:"Contact Us",value:"./#/contact"},
                        {key:"Logout",value:"./#/logout"}];
                        
      var facultyNavLinks = [{key:"Faculty Home",value:"./#/facultyHome"},
                        {key:"Notifications",value:"./#/myNotifications"},
                        {key:"About Us",value:"./#/about"},
                        {key:"Help",value:"./#/help"},
                        {key:"Contact Us",value:"./#/contact"},
                        {key:"Logout",value:"./#/logout"}];
                        
      var advisorNavLinks = [{key:"Advisor Home",value:"./#/advisorHome"},
                        {key:"Notifications",value:"./#/myNotifications"},
                        {key:"About Us",value:"./#/about"},
                        {key:"Help",value:"./#/help"},
                        {key:"Contact Us",value:"./#/contact"},
                        {key:"Logout",value:"./#/logout"}];
                        
      var adminNavLinks = [{key:"Admin Home",value:"./#/adminHome"},
                        //{key:"Edit Catalog",value:"./#/editCatalog"},
                        {key:"About Us",value:"./#/about"},
                        {key:"Help",value:"./#/help"},
                        {key:"Contact Us",value:"./#/contact"},
                        {key:"Logout",value:"./#/logout"}];
                        
      var unknownLinks = [{key:"Login", value:"./#/login"},
                        {key:"About Us",value:"./#/about"},
                        {key:"Help",value:"./#/help"},
                        {key:"Contact Us",value:"./#/contact"}];

      $scope.$on('$routeChangeStart', function(next, current) {
        setHeaderNow();
      });

      if($rootScope == null || $rootScope.loginStatus == null){
        session.updateSessionWihReturn().then(function(response){
          setHeaderNow();
        });
      } else {
        setHeaderNow();
      } 
      
      function setHeaderNow() {
        if ($rootScope.loginStatus == "true"){
            if($rootScope.designation == "student"){
              $scope.navLinks = studentNavLinks;
            } else if($rootScope.designation == "advisor"){
              $scope.navLinks = advisorNavLinks;
            } else if($rootScope.designation == "faculty"){
              $scope.navLinks = facultyNavLinks;
            } else if($rootScope.designation == "admin"){
              $scope.navLinks = adminNavLinks;
            } else{
              $scope.navLinks = unknownLinks;
            }
        } else{
              $scope.navLinks = unknownLinks;
        }
      }

      $('.button-collapse').sideNav();

  }

  app.controller("headerController",headerController);

}());
