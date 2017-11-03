(function(){
  var app = angular.module("onlineCPS");

    app.service('notificationsService', function( $log, $rootScope, $http, $location) {

    this.notifications = function () {

      var data = $.param({
                "timestamp" : Date.now()
            });

      return $http({
          method: 'POST',
          url: './api/studentNotification.php',
          data: data,
          headers: {'Content-Type': 'application/x-www-form-urlencoded'}
      }).then(function (response) {
          return response.data;
      });

    }

    
});

}());
