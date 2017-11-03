(function(){
var app = angular.module("onlineCPS");

  var notificationsController = function($scope,$log,session,notificationsService){
    session.updateSessionWithUrl("/notifications");
    $scope.all = "active";
    $scope.seen = "";
    $scope.unseen = "";

    $scope.allItems = "display:block;";
    $scope.seenItems = "display:none;";
    $scope.unSeenItems = "display:none;";


    $scope.allItemsButton = function(){
      $scope.all = "active";
      $scope.seen = "";
      $scope.unseen = "";



      $scope.allItems = "display:block;";
      $scope.seenItems = "display:none;";
      $scope.unSeenItems = "display:none;";
    }

    $scope.seenItemsButton = function(){
      $scope.all = "";
      $scope.seen = "active";
      $scope.unseen = "";



      $scope.allItems = "display:none;";
      $scope.seenItems = "display:block;";
      $scope.unSeenItems = "display:none;";
    }

    $scope.unSeenItemsButton = function(){
      $scope.all = "";
      $scope.seen = "";
      $scope.unseen = "active";



      $scope.allItems = "display:none;";
      $scope.seenItems = "display:none;";
      $scope.unSeenItems = "display:block;";
    }


    notificationsService.notifications().then(function (response) {
      $scope.notifications = response;
      console.log(response);
    });


    $scope.ntime = new Date();

    
    
  }

  app.controller("notificationsController",notificationsController);

}());
