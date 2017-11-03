(function(){
  var app = angular.module("onlineCPS");

  app.service('loginService', function( $log, $rootScope, $http, $location) {
    this.authenticate = function (username,password) {

      var data = $.param({
                username: username,
                password: password
            });

      $http({
          method: 'POST',
          url: 'api/authentication.php',
          data: data,
          headers: {'Content-Type': 'application/x-www-form-urlencoded'}
      }).then(function (response) {
          $log.debug(response.data);
          if (response.data.loginStatus == "true") {
              $log.debug(response.data.loginId);
              $rootScope.loginStatus = response.data.loginStatus;
              $rootScope.loginId = response.data.loginId;
              $rootScope.designation = response.data.designation;
              if(response.data.designation == "student"){
                $location.path("/finalCPS");
              } else if(response.data.designation == "advisor"){
                $location.path("/advisorHome");
              } else if(response.data.designation == "faculty"){
                $location.path("/facultyHome");
              } else if(response.data.designation == "admin"){
                $location.path("/adminHome");
              } else{
                $log.error("Invalid details !!!");
                $location.path("/login");
              }
              
          } else {
              $rootScope.loginStatus = "false";
              $rootScope.loginId = -1;
              $rootScope.designation = "unknown";
              $log.error("Invalid details !!!");
              //$location.path("/login");
              var $toastContent = $('<span>Invalid login details !!!</span>');
              Materialize.toast($toastContent, 10000,"red");
          }

      });



    }


});

}());
