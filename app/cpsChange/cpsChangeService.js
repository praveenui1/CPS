(function(){
  var app = angular.module("onlineCPS");

    app.service('cpsChangeService', function($http){
        
        
    this.processdata = function(requestID) {
    var data = $.param({
                  "timestamp" : Date.now(),
                  "requestId" : requestID
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
   
   
   
   this.requestStatus = function(requestID) {
    var data = $.param({
                  "timestamp" : Date.now(),
                  "requestId" : requestID
              });
    return $http({
        method: 'POST',
        url: './api/cpsStatus.php',
        data: data,
        headers: {'Content-Type': 'application/x-www-form-urlencoded'}
     }).then(function(response) {
       return response.data;
     });
   };
     
         
    this.action = function(requestID,action,timestamp) {
    var data = $.param({
                  "timestamp" : timestamp,
                  "rid" : requestID,
                  "action": action
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
