(function(){
  var app = angular.module("onlineCPS");

  app.service('headerService', function($log, $rootScope, $location,$http) {
    var headerContent = {};
    
    headerContent.message = '';

    headerContent.prepForBroadcast = function(msg) {
        this.message = msg;
        this.broadcastItem();
    };

    headerContent.broadcastItem = function() {
        $rootScope.$broadcast('headerBroadcast');
    };

    return headerContent;
        
        
});

}());
