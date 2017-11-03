(function() {
  var app = angular.module("onlineCPS");

  var advisorHomeController = function($scope, $rootScope, $log, $location, loginService, headerService, session, advisorHomeService) {

    $scope.noSearchResult = "display:none;";

    if ($rootScope == null) {
      session.updateSession();
    }

    $scope.search = function() {

      //$log.debug($scope.keyword);

      advisorHomeService.search($scope.keyword).then(function(response) {
        console.log(response);
        if (Array.isArray(response)) {
          $scope.results = response;

          $scope.noSearchResult = "display:none;";
        }
        else {
          $scope.results = [];
          if (!response.success) {
            if ($scope.keyword == "" || $scope.keyword == undefined) {
              $scope.noSearchResult = "display:none;";
            }
            else {
              $scope.noSearchResult = "display:block;";
            }
          }
        }

      }, function(err) {
        alert('Sorry there is some problem searching for users.');
      });


    }


    $scope.goTo = function(student) {
      $log.debug(student)
      $location.path("/studentHistory/" + student);
    }



  }

  app.controller("advisorHomeController", advisorHomeController);

}());
