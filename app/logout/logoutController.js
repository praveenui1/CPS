(function(){
var app = angular.module("onlineCPS");

  var logoutController = function($scope,$log,logoutService,session){
    logoutService.logMeOut();
  }

  app.controller("logoutController",logoutController);

}());
