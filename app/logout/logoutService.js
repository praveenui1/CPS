(function(){
  var app = angular.module("onlineCPS");

  app.service('logoutService', function( $http, $log, $rootScope, $location, session) {

    this.logMeOut = function(){
      if($rootScope != null && $rootScope.loginStatus != null){
        var data = $.param({
                  tocken: "tocken"
              });

        $http({
            method: 'POST',
            url: './api/logout.php',
            data: data,
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        }).then(function (response) {
                $rootScope.loginStatus = "false";
                $rootScope.loginId = -1;
                $rootScope.designation = "unknown";
                $log.debug("logedout!!!");
                $location.path("/login");

        });

      }
      else{
        session.updateSessionWithUrl("/finalCPS");
      }
    }

});

}());
