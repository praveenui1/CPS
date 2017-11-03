(function(){
var app = angular.module("onlineCPS");

  var myNotificationsController = function($location,$scope,$log,session, myNotificationsService){
    session.updateSessionWithUrl("/myNotifications");
    $scope.all = "";
    $scope.seen = "";
    $scope.unseen = "active";

    $scope.allItems = "display:none;";
    $scope.seenItems = "display:none;";
    $scope.unSeenItems = "display:block;";

    $scope.check = function(rid,index,nid){

      $scope.notifications[index].notificationStatus = 1;
      myNotificationsService.notificationsSeen(nid).then(function (response) {
        $location.path("/cpsChange/action/"+rid);
      });
      
    }

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


    $scope.ntime = new Date();


    myNotificationsService.notifications().then(function (response) {
      $scope.notifications = response;
      console.log(response);
    });


    //$('select').material_select();
  }

  app.controller("myNotificationsController",myNotificationsController);

}());
