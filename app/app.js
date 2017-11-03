(function(){

  var app = angular.module("onlineCPS",["ngRoute","angularMoment"]);

  app.config(['$httpProvider', function($httpProvider) {
      //initialize get if not there
      if (!$httpProvider.defaults.headers.get) {
          $httpProvider.defaults.headers.get = {};    
      }    
  
      $httpProvider.defaults.headers.get['If-Modified-Since'] = 'Mon, 26 Jul 1997 05:00:00 GMT';
      // extra
      $httpProvider.defaults.headers.get['Cache-Control'] = 'no-cache';
      $httpProvider.defaults.headers.get['Pragma'] = 'no-cache';
  }]);

  app.config(function($routeProvider){
    $routeProvider
    .when("/login",{
      templateUrl: "./app/login/loginView.html",
      controller: "loginController"
    })
    .when("/finalCPS",{
      templateUrl: "./app/finalCPS/finalCPSView.html",
      controller: "finalCPSController"
    })
    .when("/request",{
      templateUrl: "./app/request/requestView.html",
      controller: "requestController"
    })
    .when("/notifications",{
      templateUrl: "./app/notifications/notificationsView.html",
      controller: "notificationsController"
    })
    .when("/myNotifications",{
      templateUrl: "./app/myNotifications/myNotificationsView.html",
      controller: "myNotificationsController"
    })
    .when("/logout",{
      templateUrl: "./app/logout/logoutView.html",
      controller: "logoutController"
    })
    .when("/default",{
      templateUrl: "./app/default/defaultView.html",
      controller: "defaultController"
    })
    .when("/adminHome",{
      templateUrl: "./app/adminHome/adminHomeView.html",
      controller: "adminHomeController"
    })
    .when("/advisorHome",{
      templateUrl: "./app/advisorHome/advisorHomeView.html",
      controller: "advisorHomeController"
    })
    .when("/about",{
      templateUrl: "./app/about/aboutView.html"
    })
    .when("/contact",{
      templateUrl: "./app/contact/contactView.html"
    })
    .when("/help",{
      templateUrl: "./app/help/helpView.html"
    })
    .when("/facultyHome",{
      templateUrl: "./app/facultyHome/facultyHomeView.html",
      controller: "facultyHomeController"
    })
    .when("/editCatalog",{
      templateUrl: "./app/editCatalog/editCatalogView.html",
      controller: "editCatalogController"
    })
    .when("/raiseRequest/:studentID",{
      templateUrl: "./app/raiseRequest/raiseRequestView.html",
      controller: "raiseRequestController"
    })
    .when("/cpsChange/:status/:requestID",{
      templateUrl: "./app/cpsChange/cpsChangeView.html",
      controller: "cpsController"
    })
    .when("/studentHistory/:studentID",{
      templateUrl: "./app/studentHistory/studentHistoryView.html",
      controller: "studentHistoryController"
    })
    .otherwise({
      redirectTo: "/default"
    });
  });





app.service('session', function ($rootScope, $log, $http, $location){


  this.updateSession = function(){

    if($rootScope == null || $rootScope.loginStatus == null){
      
        var data = $.param({
                  tocken: "tocken",
              });

        $http({
            method: 'POST',
            url: './api/session.php',
            data: data,
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        }).then(function (response) {
          
          if (response.data.loginStatus == "true") {
              $log.debug("logedin");
              $rootScope.loginStatus = response.data.loginStatus;
              $rootScope.loginId = response.data.loginId;
              $rootScope.designation = response.data.designation;
              $log.debug($rootScope);
          } else {
              $rootScope.loginStatus = "false";
              $rootScope.loginId = -1;
              $rootScope.designation = "unknown";
              $log.debug("logedOut");
              $location.path("/login");
          }

        });
      } else if ($rootScope.loginStatus == "false"){
        $log.debug("logedOut");
        $log.debug("navagating to login page");
        $location.path("/login");
      } else {
        $log.debug("logedin");
        $log.debug("navagating to finalCPS page");
        $location.path("/default");
      }
  }
  
  
  
  this.updateSessionWihReturn = function(){

    if($rootScope == null || $rootScope.loginStatus == null){
      
        var data = $.param({
                  tocken: "tocken",
              });

        return $http({
            method: 'POST',
            url: './api/session.php',
            data: data,
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        }).then(function (response) {
          
          if (response.data.loginStatus == "true") {
              $log.debug("logedin");
              $rootScope.loginStatus = response.data.loginStatus;
              $rootScope.loginId = response.data.loginId;
              $rootScope.designation = response.data.designation;
              $log.debug($rootScope);
          } else {
              $rootScope.loginStatus = "false";
              $rootScope.loginId = -1;
              $rootScope.designation = "unknown";
              $log.debug("logedOut");
              $location.path("/login");
          }

        });
      } else if ($rootScope.loginStatus == "false"){
        $log.debug("logedOut");
        $log.debug("navagating to login page");
        $location.path("/login");
      } else {
        $log.debug("logedin");
        $log.debug("navagating to finalCPS page");
        $location.path("/default");
      }
      return "success";
  }
  
  

  this.updateSessionWithUrl = function(url){

    if($rootScope == null || $rootScope.loginStatus == null){
        
        var data = $.param({
                  tocken: "tocken",
                  timestamp: Date.now()
              });

        $http({
            method: 'POST',
            url: './api/session.php',
            data: data,
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        }).then(function (response) {
          
          if (response.data.loginStatus == "true") {
              $log.debug("logedin");
              $rootScope.loginStatus = response.data.loginStatus;
              $rootScope.loginId = response.data.loginId;
              $rootScope.designation = response.data.designation;
              $location.path(url);
          } else {
              $rootScope.loginStatus = "false";
              $rootScope.loginId = -1;
              $rootScope.designation = "unknown";
              $log.debug("logedOut");
              $location.path("/login");
          }

        });
      } else if ($rootScope.loginStatus == "false"){
        $log.debug("logedOut");
        $log.debug("navagating to login page");
        $location.path("/login");
      } else {
        $log.debug("logedin");
        $log.debug("navagating to current page");
        $location.path(url);
      }


}

});


}());
