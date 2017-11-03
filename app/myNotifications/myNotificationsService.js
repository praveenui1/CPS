(function(){
  var app = angular.module("onlineCPS");

    app.service('myNotificationsService', function( $log, $rootScope, $http, $location) {

    this.notifications = function () {

      var data = $.param({
                "timestamp" : Date.now()
            });

      return $http({
          method: 'POST',
          url: './api/myNotification.php',
          data: data,
          headers: {'Content-Type': 'application/x-www-form-urlencoded'}
      }).then(function (response) {
          return response.data;
      });

    }


    this.notificationsSeen = function (nid) {
      var data = $.param({
                "timestamp" : Date.now(),
                "nid": nid
            });

      return $http({
          method: 'POST',
          url: './api/notificationSeen.php',
          data: data,
          headers: {'Content-Type': 'application/x-www-form-urlencoded'}
      }).then(function (response) {
          return response.data;
      });

    }


    
});

}());
