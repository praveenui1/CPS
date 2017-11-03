(function(){
  var app = angular.module("onlineCPS");

    app.service('raiseRequestService', function( $log, $rootScope, $http, $location) {

    this.foundation = function (sid) {

      var data = $.param({
                "tocken" : "tocken",
                "sid": sid
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

    this.elective = function (term,dept,min,max,category,sid) {

      var data = $.param({
                "term" : term,
                "dept" : dept,
                "min"  : min,
                "max"  : max,
                "category": category,
                "sid" : sid
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
                "timestamp" : Date.now(),
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

 this.electiveYearList = function(category, sid){
      var data = $.param({
                "timestamp" : Date.now(),
                "category" : category,
                "sid": sid
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

this.electiveDepartment = function(category, sid){
      var data = $.param({
                "timestamp" : Date.now(),
                "category" : category,
                "sid": sid
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

    this.coreSub = function (sid) {

      var data = $.param({
                "tocken" : "tocken",
                "sid": sid
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
    
    
    this.createRequest = function(requestTime,sid){
      var data = $.param({
                "requestTime" : requestTime,
                "sid": sid
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

    this.createFoundationRequest = function(requestId,foundationYear,foundationCourse, rowNo, sid){
      var data = $.param({
                "requestTime" : Date.now(),
                "requestId": requestId,
                "foundationYear": foundationYear,
                "foundationCourse": foundationCourse,
                "rowNo": rowNo,
                "sid" : sid
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
    
    
    this.createCoreRequest = function(requestId,coreYear,coreRubric,coreNumber, rowNo, sid){
      var data = $.param({
                "requestTime" : Date.now(),
                "requestId": requestId,
                "coreYear": coreYear,
                "coreRubric": coreRubric,
                "coreNumber": coreNumber,
                "rowNo": rowNo,
                "sid" : sid
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
    
    this.createElectiveRequest = function(requestId,electiveYear,electiveSubject,electiveCategory, sid){
      var data = $.param({
                "requestTime" : Date.now(),
                "requestId": requestId,
                "electiveYear": electiveYear,
                "electiveSubject": electiveSubject,
                "electiveCategory": electiveCategory,
                "sid": sid
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
    
    
  
    this.courseCompletionRequest = function(requestId,ccYear,ccSub,ccNo,sid){
      var data = $.param({
                "requestTime" : Date.now(),
                "requestId": requestId,
                "ccYear": ccYear,
                "ccSub": ccSub,
                "ccNo": ccNo,
                "sid": sid
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
    
    
    
    
    
    this.courseCompletionGetData = function(category,sid){
      var data = $.param({
                "timestamp" : Date.now(),
                "category": category,
                "sid": sid
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
