(function(){
  var app = angular.module("onlineCPS");

    app.service('cpsChangeService', function($http){
        
        
    this.processdata = function(id) {
    var data = $.param({
                  "timestamp" : Date.now(),
                  "sid" : id
              });
    return $http({
        method: 'POST',
        url: './api/cpsChange.php',
        data: data,
        headers: {'Content-Type': 'application/x-www-form-urlencoded'}
     }).then(function(response) {
       return response.data;
     });
   };
     
         
    this.action = function(requestID) {
    var data = $.param({
                  "timestamp" : Date.now(),
                  "rid" : requestID
              });
    return $http({
        method: 'POST',
        url: './api/cpsAction.php',
        data: data,
        headers: {'Content-Type': 'application/x-www-form-urlencoded'}
     }).then(function(response) {
       return response.data;
     });
   };
        
    });

}());
