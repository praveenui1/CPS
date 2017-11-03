(function(){
  var app = angular.module("onlineCPS");

    app.service('requestService', function( $log, $rootScope, $http, $location) {

    this.foundation = function () {

      var data = $.param({
                "tocken" : "tocken",
            });

      return $http({
          method: 'POST',
          url: './api/fcourses.php',
          data: data,
          headers: {'Content-Type': 'application/x-www-form-urlencoded'}
      }).then(function (response) {
          return response.data;
      });

    }

    this.elective = function (term,dept,min,max,category) {

      var data = $.param({
                "term" : term,
                "dept" : dept,
                "min"  : min,
                "max"  : max,
                "category": category
            });

      return $http({
          method: 'POST',
          url: './api/electives.php',
          data: data,
          headers: {'Content-Type': 'application/x-www-form-urlencoded'}
      }).then(function (response) {
          return response.data;
      });


    }

    this.yearList = function(){
      var data = $.param({
                "timestamp" : Date.now()
            });

      return $http({
          method: 'POST',
          url: './api/yearList.php',
          data: data,
          headers: {'Content-Type': 'application/x-www-form-urlencoded'}
      }).then(function (response) {
          return response.data;
      });
    }

 this.electiveYearList = function(category){
      var data = $.param({
                "timestamp" : Date.now(),
                "category" : category
            });

      return $http({
          method: 'POST',
          url: './api/electiveYear.php',
          data: data,
          headers: {'Content-Type': 'application/x-www-form-urlencoded'}
      }).then(function (response) {
          return response.data;
      });
    }

this.electiveDepartment = function(category){
      var data = $.param({
                "timestamp" : Date.now(),
                "category" : category
            });

      return $http({
          method: 'POST',
          url: './api/electiveDepartment.php',
          data: data,
          headers: {'Content-Type': 'application/x-www-form-urlencoded'}
      }).then(function (response) {
          return response.data;
      });
    }

    this.coreSub = function () {

      var data = $.param({
                "tocken" : "tocken",
            });

      return $http({
          method: 'POST',
          url: './api/coresub.php',
          data: data,
          headers: {'Content-Type': 'application/x-www-form-urlencoded'}
      }).then(function (response) {
          return response.data;
      });

    }
    
    
    this.createRequest = function(requestTime){
      var data = $.param({
                "requestTime" : requestTime,
            });

      return $http({
          method: 'POST',
          url: './api/createRequest.php',
          data: data,
          headers: {'Content-Type': 'application/x-www-form-urlencoded'}
      }).then(function (response) {
          return response.data;
      });
    }

    this.createFoundationRequest = function(requestId,foundationYear,foundationCourse, rowNo){
      var data = $.param({
                "requestTime" : Date.now(),
                "requestId": requestId,
                "foundationYear": foundationYear,
                "foundationCourse": foundationCourse,
                "rowNo": rowNo
            });

      return $http({
          method: 'POST',
          url: './api/createFoundationRequest.php',
          data: data,
          headers: {'Content-Type': 'application/x-www-form-urlencoded'}
      }).then(function (response) {
          return response.data;
      });
    }
    
    
    this.createCoreRequest = function(requestId,coreYear,coreRubric,coreNumber, rowNo){
      var data = $.param({
                "requestTime" : Date.now(),
                "requestId": requestId,
                "coreYear": coreYear,
                "coreRubric": coreRubric,
                "coreNumber": coreNumber,
                "rowNo": rowNo
            });
            
            $log.debug(coreRubric);

      return $http({
          method: 'POST',
          url: './api/createCoreRequest.php',
          data: data,
          headers: {'Content-Type': 'application/x-www-form-urlencoded'}
      }).then(function (response) {
          return response.data;
      });
    }
    
    this.createElectiveRequest = function(requestId,electiveYear,electiveSubject,electiveCategory){
      var data = $.param({
                "requestTime" : Date.now(),
                "requestId": requestId,
                "electiveYear": electiveYear,
                "electiveSubject": electiveSubject,
                "electiveCategory": electiveCategory
            });
            

      return $http({
          method: 'POST',
          url: './api/createElectiveRequest.php',
          data: data,
          headers: {'Content-Type': 'application/x-www-form-urlencoded'}
      }).then(function (response) {
          return response.data;
      });
    }
    
    
  
    this.courseCompletionRequest = function(requestId,ccYear,ccSub,ccNo){
      var data = $.param({
                "requestTime" : Date.now(),
                "requestId": requestId,
                "ccYear": ccYear,
                "ccSub": ccSub,
                "ccNo": ccNo
            });
            

      return $http({
          method: 'POST',
          url: './api/courseCompletionRequest.php',
          data: data,
          headers: {'Content-Type': 'application/x-www-form-urlencoded'}
      }).then(function (response) {
          return response.data;
      });
    }
    
    
    
    
    
    this.courseCompletionGetData = function(category){
      var data = $.param({
                "timestamp" : Date.now(),
                "category": category
            });
            

      return $http({
          method: 'POST',
          url: './api/courseCompletionGetData.php',
          data: data,
          headers: {'Content-Type': 'application/x-www-form-urlencoded'}
      }).then(function (response) {
          return response.data;
      });
    }
    
    
    
    
  
  

});

}());
