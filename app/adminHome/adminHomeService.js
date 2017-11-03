(function(){
  var app = angular.module("onlineCPS");

  app.service('adminHomeService', function( $log, $rootScope, $http, $location) {
    
    
    
    
    this.fetchCatlog = function () {
          
          
          var data = $.param({
                    "timestamp" : Date.now(),
                });

          return $http({
              method: 'POST',
              url: './api/uploadFromPrevious.php',
              data: data,
              headers: {'Content-Type': 'multipart/form-data'}
          }).then(function (response) {
              return response.data;
          },function(error){
              return error.data;
          },function(progress){
              return "";
          })

        }
    
    
    
    


  });

}());
