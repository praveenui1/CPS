(function() {
  var app = angular.module("onlineCPS");

  app.service('facultyHomeService', function($log, $rootScope, $http, $location) {

    this.search = function(keyword) {

      var data = $.param({
        "timestamp": Date.now(), //always add timestamp whether we need it or not just to make request unique
        "q": keyword

      });

      return $http({
        method: 'POST',
        url: './api/student.php',
        data: data,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }).then(function(response) {
        return response.data;
      });
    };


  });

}());
