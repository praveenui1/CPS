(function(){
var app = angular.module("onlineCPS");

  var requestController = function($scope, $http, $timeout, $log, session,requestService){
    
    var $toastContent = $("<span>Please wait for the form to load completely!</span>");
    Materialize.toast($toastContent, 10000,"light-blue"); 
    
    
    var requestId = "0";
    
    $scope.hideForm = "display:none;";
    $scope.displayForm = "display:block;";
    $scope.successForm = "display:none;";
    
    
    $scope.foundationYear = {};
    $scope.coreSubYear = {};
    
    
    $scope.e1c1year = -1;
    $scope.e1c1dept = "-1";
    $scope.e1c1sub = -1;
    $scope.e1c1subList = [];


    $scope.e2c1year = -1;
    $scope.e2c1dept = "-1";
    $scope.e2c1sub = -1;
    $scope.e2c1subList = [];


    $scope.e3c2year = -1;
    $scope.e3c2dept = "-1";
    $scope.e3c2sub = -1;
    $scope.e3c2subList = [];


    $scope.e4c2year = -1;
    $scope.e4c2dept = "-1";
    $scope.e4c2sub = -1;
    $scope.e4c2subList = [];

    $scope.e5c1year = -1;
    $scope.e5c1dept = "-1";
    $scope.e5c1sub = -1;
    $scope.e5c1subList = [];


    $scope.e6c1year = -1;
    $scope.e6c1dept = "-1";
    $scope.e6c1sub = -1;
    $scope.e6c1subList = [];
    
    $scope.cct2Year = -1;
    
    $scope.completionElectivesDisplay = "display:none;";
    $scope.completionThesisDisplay = "display:none;";

    requestService.yearList().then(function (response) {
      $scope.yearListData = response;
      console.log(response);
    });

    /*
    $scope.e1c1y = function(){
      if($scope.e1c1year != -1){
        $scope.e1c1subList = [];
      } else{
        $scope.e1c1subList = [];
      }
    }
    */


    requestService.electiveYearList("1").then(function (response) {
      $scope.e1c1 = response[0];
      $scope.e1c1year = response[0].term;
      //console.log(response);
    });
    
    requestService.electiveYearList("2").then(function (response) {
      $scope.e2c1 = response[0];
      $scope.e2c1year = response[0].term;
      //console.log(response);
    });
    
    requestService.electiveYearList("3").then(function (response) {
      $scope.e3c2 = response[0];
      $scope.e3c2year = response[0].term;
      //console.log(response);
    });
    
    requestService.electiveYearList("4").then(function (response) {
      $scope.e4c2 = response[0];
      $scope.e4c2year = response[0].term;
      //console.log(response);
    });
    
    requestService.electiveYearList("5").then(function (response) {
      $scope.e5c1 = response[0];
      $scope.e5c1year = response[0].term;
      //console.log(response);
    });
    
    requestService.electiveYearList("6").then(function (response) {
      $scope.e6c1 = response[0];
      $scope.e6c1year = response[0].term;
      //console.log(response);
    });
    
    
    requestService.electiveDepartment("1").then(function (response) {
      $scope.e1c1dept = response[0].rubric;
      $scope.e1c1d();
      //console.log(response);
    });
    
    requestService.electiveDepartment("2").then(function (response) {
      $scope.e2c1dept = response[0].rubric;
      $scope.e2c1d();
      //console.log(response);
    });
    
    requestService.electiveDepartment("3").then(function (response) {
      $scope.e3c2dept = response[0].rubric;
      $scope.e3c2d();
      //console.log(response);
    });
    
    requestService.electiveDepartment("4").then(function (response) {
      $scope.e4c2dept = response[0].rubric;
      $scope.e4c2d();
      //console.log(response);
    });
    
    requestService.electiveDepartment("5").then(function (response) {
      $scope.e5c1dept = response[0].rubric;
      $scope.e5c1d();
      //console.log(response);
    });
    
    requestService.electiveDepartment("6").then(function (response) {
      $scope.e6c1dept = response[0].rubric;
      $scope.e6c1d();
      //console.log(response);
    });
    
    requestService.courseCompletionGetData("1").then(function (response) {
      console.log(response);
      $scope.ccYear = response[0].term;
      $scope.ccSub = response[0].ccsub;
      $scope.ccYearList = response[0].years;
      $scope.updateCEDisplay();
      //console.log(response);
    });
    requestService.courseCompletionGetData("2").then(function (response) {
      $scope.cct2Year = response[0].term;
      $scope.cct2YearList = response[0].years;
      //console.log(response);
    });
    

    $scope.e1c1d = function(){
      
        $scope.e1c1subList = [];
        requestService.elective($scope.e1c1year,$scope.e1c1dept,5030,6939,1).then(function (response) {
          $scope.e1c1subList = response[0].list;
          $scope.e1c1sub = response[0].selected;
          console.log(response);
        });
      
    }

    $scope.e1c1s = function(){
      if($scope.e1c1sub != -1){
        $scope.e1c1cID = $scope.e1c1sub;
      } else{
        $scope.e1c1cID = "Course ID";
      }
    }

    ////

    /*
    $scope.e2c1y = function(){
      if($scope.e2c1year != -1){
        $scope.e2c1subList = [];
      } else{
        $scope.e2c1subList = [];
      }
    }
    */

    $scope.e2c1d = function(){
      
        $scope.e2c1subList = [];
        requestService.elective($scope.e2c1year,$scope.e2c1dept,5030,6939,2).then(function (response) {
          $scope.e2c1subList = response[0].list;
          $scope.e2c1sub = response[0].selected;
          console.log(response);
        });
     
    }

    $scope.e2c1s = function(){
      if($scope.e2c1sub != -1){
        console.log($scope.e2c1sub);
        $scope.e2c1cID = $scope.e2c1sub;
      } else{
        $scope.e2c1cID = "Course ID";
      }
    }


    /////

    $scope.e3c2d = function(){
      
        $scope.e3c2subList = [];
        requestService.elective($scope.e3c2year,$scope.e3c2dept,5030,6939,3).then(function (response) {
          $scope.e3c2subList = response[0].list;
          $scope.e3c2sub = response[0].selected;
          console.log(response);
        });
      
    }

    $scope.e3c2s = function(){
      if($scope.e3c2sub != -1){
        $scope.e3c2cID = $scope.e3c2sub;
      } else{
        $scope.e3c2cID = "Course ID";
      }
    }


    //////


    $scope.e4c2d = function(){
      
        $scope.e4c2subList = [];
        requestService.elective($scope.e4c2year,$scope.e4c2dept,4030,6939,4).then(function (response) {
          $scope.e4c2subList = response[0].list;
          $scope.e4c2sub = response[0].selected;
          console.log(response);
        });
      
    }

    $scope.e4c2s = function(){
      if($scope.e4c2sub != -1){
        $scope.e4c2cID = $scope.e4c2sub[0].list;
      } else{
        $scope.e4c2cID = "Course ID";
      }
    }

    ////


    $scope.e5c1d = function(){
      
        $scope.e5c1subList = [];
        requestService.elective($scope.e5c1year,$scope.e5c1dept,4030,6939,5).then(function (response) {
          $scope.e5c1subList = response[0].list;
          $scope.e5c1sub = response[0].selected;
          console.log(response);
        });
      
    }

    $scope.e5c1s = function(){
      if($scope.e5c1sub != -1){
        $scope.e5c1cID = $scope.e5c1sub;
      } else{
        $scope.e5c1cID = "Course ID";
      }
    }


    ////


    $scope.e6c1d = function(){
      
        $scope.e6c1subList = [];
        requestService.elective($scope.e6c1year,$scope.e6c1dept,5030,6939,6).then(function (response) {
          $scope.e6c1subList = response[0].list;
          $scope.e6c1sub = response[0].selected;
          console.log(response);
        });
      
    }

    $scope.e6c1s = function(){
      if($scope.e6c1sub != -1){
        $scope.e6c1cID = $scope.e6c1sub;
      } else{
        $scope.e6c1cID = "Course ID";
      }
    }

    $scope.ccYear = -1;
    $scope.ccSub = -1;

    ////


    session.updateSessionWithUrl("/request");
    $scope.space = " ";
    $scope.foundation = "";
    $scope.coreSub = "";
    
    //fetch foundation courses
    requestService.foundation().then(function (response) {
      $scope.foundation = response;
      console.log(response);
    });
    
    //fetch core courses
    requestService.coreSub().then(function (response) {
      $scope.coreSub = response;
      console.log(response);
      
    });
    

    $scope.updateCEDisplay = function(){
      if($scope.ccSub == 2){
        $scope.completionElectivesDisplay = "display:block";
        $scope.completionThesisDisplay = "display:none";
      } else if($scope.ccSub == 1){
        $scope.completionThesisDisplay = "display:block";
        $scope.completionElectivesDisplay = "display:none";
      } else{
        $scope.completionElectivesDisplay = "display:none";
        $scope.completionThesisDisplay = "display:none";
      }
    }

    


      $scope.request = function(){
        
        $('.toast').remove();
        
        var toastCount = 0;
        
        var success = 0;
        
        var toastRun = function(){
          if(toastCount == 0){
            var $toastContent = $("<span id='hideToast'>Hide All</span>");
            Materialize.toast($toastContent, 10000,"black");
            ++toastCount;
          }
        }
        
        //if($scope.foundation.length != Object.keys($scope.foundationYear).length){
          for (var n = 0 ; n < $scope.foundation.length ; ++n){
            if($scope.foundation[n].foundationYear == -1){
              toastRun();
              var $toastContent = $("<span>Please select the SEMESTER for Foundation course "+(n+1)+"</span>");
              Materialize.toast($toastContent, 10000,"light-blue");
            }
            
            if($scope.foundation[n].selected == "Course ID"){
              toastRun();
              var $toastContent = $("<span>Please select the SUBJECT for Foundation "+(n+1)+"</span>");
              Materialize.toast($toastContent, 10000,"light-blue");
            }
            
          }
        //}
        
        
        
        
        if($scope.coreSub.length != Object.keys($scope.coreSubYear).length){
          for (var n = 0 ; n < $scope.coreSub.length ; ++n){
            if($scope.coreSub[n].coreYear == -1){
              toastRun();
              var $toastContent = $("<span>Please select the SEMESTER for Core Subject "+(n+1)+"</span>");
              Materialize.toast($toastContent, 10000,"light-green");
            }
          }
        }
        
        
        //electives
        
        //e1
        if($scope.e1c1year == -1){
          toastRun();
          var $toastContent = $("<span>Please select the SEMESTER for Program Elective 1</span>");
              Materialize.toast($toastContent, 10000,"brown lighten-1");
        }
        
        if($scope.e1c1dept == -1){
          toastRun();
          var $toastContent = $("<span>Please select the Department for Program Elective 1</span>");
              Materialize.toast($toastContent, 10000,"brown lighten-1");
        }
        
        if($scope.e1c1sub == "Course ID"){
          toastRun();
          var $toastContent = $("<span>Please select the Subject for Program Elective 1</span>");
              Materialize.toast($toastContent, 10000,"brown lighten-1");
        }
        
        
        //e2
        if($scope.e2c1year == -1){
          toastRun();
          var $toastContent = $("<span>Please select the SEMESTER for Program Elective 2</span>");
              Materialize.toast($toastContent, 10000,"brown lighten-1");
        }
        
        if($scope.e2c1dept == -1){
          toastRun();
          var $toastContent = $("<span>Please select the Department for Program Elective 2</span>");
              Materialize.toast($toastContent, 10000,"brown lighten-1");
        }
        
        if($scope.e2c1sub == "Course ID"){
          toastRun();
          var $toastContent = $("<span>Please select the Subject for Program Elective 2</span>");
              Materialize.toast($toastContent, 10000,"brown lighten-1");
        }
        
        
        //e3
        if($scope.e3c2year == -1){
          toastRun();
          var $toastContent = $("<span>Please select the SEMESTER for Program Elective 3</span>");
              Materialize.toast($toastContent, 10000,"brown lighten-1");
        }
        
        if($scope.e3c2dept == -1){
          toastRun();
          var $toastContent = $("<span>Please select the Department for Program Elective 3</span>");
              Materialize.toast($toastContent, 10000,"brown lighten-1");
        }
        
        if($scope.e3c2sub == "Course ID"){
          toastRun();
          var $toastContent = $("<span>Please select the Subject for Program Elective 3</span>");
              Materialize.toast($toastContent, 10000,"brown lighten-1");
        }
        
        
        //e4
        if($scope.e4c2year == -1){
          toastRun();
          var $toastContent = $("<span>Please select the SEMESTER for Program Elective 4</span>");
              Materialize.toast($toastContent, 10000,"brown lighten-1");
        }
        
        if($scope.e4c2dept == -1){
          toastRun();
          var $toastContent = $("<span>Please select the Department for Program Elective 4</span>");
              Materialize.toast($toastContent, 10000,"brown lighten-1");
        }
        
        if($scope.e4c2sub == "Course ID"){
          toastRun();
          var $toastContent = $("<span>Please select the Subject for Program Elective 4</span>");
              Materialize.toast($toastContent, 10000,"brown lighten-1");
        }
        //elsectives
        
        
        
        
        
        //Course Completion Options
        
        //cc
        if($scope.ccYear == -1){
          toastRun();
          var $toastContent = $("<span>Please select the SEMESTER for Capstone/Thesis Subject</span>");
              Materialize.toast($toastContent, 10000,"purple lighten-2");
        }
        
        if($scope.ccSub == -1){
          toastRun();
          var $toastContent = $("<span>Please select the SUBJECT as either Capstone or Thesis</span>");
              Materialize.toast($toastContent, 10000,"purple lighten-2");
        }
        
        //electives
        if($scope.ccSub == 2){
          //check course completion electives
            
            
            //e5
            if($scope.e5c1year == -1){
              toastRun();
              var $toastContent = $('<span>Please select the SEMESTER for "Course Completion" Elective 1</span>');
                  Materialize.toast($toastContent, 10000,"purple lighten-1");
            }
            
            if($scope.e5c1dept == -1){
              toastRun();
              var $toastContent = $('<span>Please select the Department for "Course Completion" Elective 1</span>');
                  Materialize.toast($toastContent, 10000,"purple lighten-1");
            }
            
            if($scope.e5c1sub == "Course ID"){
              toastRun();
              var $toastContent = $('<span>Please select the Subject for "Course Completion" Elective 1</span>');
                  Materialize.toast($toastContent, 10000,"purple lighten-1");
            }
            
            
            //e6
            if($scope.e6c1year == -1){
              toastRun();
              var $toastContent = $('<span>Please select the SEMESTER for <u>"Course Completion"</u> Elective 2</span>');
                  Materialize.toast($toastContent, 10000,"purple lighten-1");
            }
            
            if($scope.e6c1dept == -1){
              toastRun();
              var $toastContent = $('<span>Please select the Department for "Course Completion" Elective 2</span>');
                  Materialize.toast($toastContent, 10000,"purple lighten-1");
            }
            
            if($scope.e6c1sub == "Course ID"){
              toastRun();
              var $toastContent = $('<span>Please select the Subject for "Course Completion" Elective 2</span>');
                  Materialize.toast($toastContent, 10000,"purple lighten-1");
            }
          
          
        } else if($scope.ccSub == 1){
              if($scope.cct2Year == -1){
                toastRun();
                var $toastContent = $("<span>Please select the SEMESTER for Thesis - II</span>");
                    Materialize.toast($toastContent, 10000,"purple lighten-2");
              }
        }
        
        
        //check sign
        if(!$scope.sign){
          toastRun();
          var $toastContent = $('<span>Please Sign the request form by Selecting the checkbox!!</span>');
          Materialize.toast($toastContent, 10000);
        }
        
        
        //end request checking
        
        
        //start processing if no toasts(no error messages)
        if(toastCount==0){
          
              $scope.hideForm = "display:block;";
              $scope.displayForm = "display:none;";
              $scope.successForm = "display:none;";
              
              var succesCall = function(){
                success++;
                if(success == 7){
                  $scope.hideForm = "display:none;";
                  $scope.displayForm = "display:none;";
                  $scope.successForm = "display:block;";
                }
              }
          
          //create request
              toastRun();
              var $toastContent = $('<span>Generating New Request</span>');
              Materialize.toast($toastContent, 10000,"purple lighten-1");
          
              requestId = "0";
              
              var requestTime = Date.now();
              
              requestService.createRequest(requestTime).then(function (response) {
                requestId = response[0].rId;
                console.log(response);
                var $toastContent = $('<span>Assigned Request ID : '+response[0].rId+'<br/>Adding request Details!</span>');
                Materialize.toast($toastContent, 10000,"green");
             
             
                foundationsRequest();
                
                coreRequest();
                
                electiveRequestOne();
                
                electiveRequestTwo(); 
                
                electiveRequestThree();
                
                electiveRequestFour();
                
               
                courseCompletionRequest();
                
              });
          
          
          
            var foundationsRequest = function(){
              
                  //submit foundation
              
                  //submit foundation term, requestid, foundationId and Foundation Course ID (COURSE ID: # CSCI4306)
                  
                  
                  for (var n = 0 ; n < $scope.foundation.length ; ++n){
                    
                    requestService.createFoundationRequest(requestId,$scope.foundation[n].foundationYear,$scope.foundation[n].selected,n).then(function (response) {
                      console.log(response);
                      var $toastContent = $('<span>'+response+'</span>');
                      Materialize.toast($toastContent, 10000,"green");
                    });
                    
                  }
              succesCall();
              
            }
            
            
            
            
            var coreRequest = function(){
              
                  //submit core Subject
              
                  //submit core term, requestid, core Course ID (COURSE ID: # CSCI4306)
                  
                  $log.debug("Debugging Core Subs");
                  for (var n = 0 ; n < $scope.coreSub.length ; ++n){
                    
                    $log.debug($scope.coreSub[n].rubric);
                    
                    
                    
                    requestService.createCoreRequest(requestId,$scope.coreSub[n].coreYear,$scope.coreSub[n].rubric,$scope.coreSub[n].number,n).then(function (response) {
                      console.log(response);
                      var $toastContent = $('<span>'+response+'</span>');
                      Materialize.toast($toastContent, 10000,"green");
                    });
                    
                  }
              succesCall();
              
            }
            
              
              
               var electiveRequestOne = function(){
              
                  //submit elective Subject
              
                  //submit elective term, requestid, elective Course ID (COURSE ID: # CSCI4306)
          
                    requestService.createElectiveRequest(requestId,$scope.e1c1year,$scope.e1c1sub,1).then(function (response) {
                      console.log(response);
                      var $toastContent = $('<span>'+response+'</span>');
                      Materialize.toast($toastContent, 10000,"green");
                    });
                  succesCall();
               }  
              
               var electiveRequestTwo = function(){
              
                  //submit elective Subject
              
                  //submit elective term, requestid, elective Course ID (COURSE ID: # CSCI4306)
          
                    requestService.createElectiveRequest(requestId,$scope.e2c1year,$scope.e2c1sub,2).then(function (response) {
                      console.log(response);
                      var $toastContent = $('<span>'+response+'</span>');
                      Materialize.toast($toastContent, 10000,"green");
                    });
                  succesCall();
               } 
               
               
               var electiveRequestThree = function(){
              
                  //submit elective Subject
              
                  //submit elective term, requestid, elective Course ID (COURSE ID: # CSCI4306)
          
                    requestService.createElectiveRequest(requestId,$scope.e3c2year,$scope.e3c2sub,3).then(function (response) {
                      console.log(response);
                      var $toastContent = $('<span>'+response+'</span>');
                      Materialize.toast($toastContent, 10000,"green");
                    });
                  succesCall();
               } 
              
          
          var electiveRequestFour = function(){
              
                  //submit elective Subject
              
                  //submit elective term, requestid, elective Course ID (COURSE ID: # CSCI4306)
          
                    requestService.createElectiveRequest(requestId,$scope.e4c2year,$scope.e4c2sub,4).then(function (response) {
                      console.log(response);
                      var $toastContent = $('<span>'+response+'</span>');
                      Materialize.toast($toastContent, 10000,"green");
                    });
                  succesCall();
               } 
          
          var electiveRequestFive = function(){
              
                  //submit elective Subject
              
                  //submit elective term, requestid, elective Course ID (COURSE ID: # CSCI4306)
          
                    requestService.createElectiveRequest(requestId,$scope.e5c1year,$scope.e5c1sub,5).then(function (response) {
                      console.log(response);
                      var $toastContent = $('<span>'+response+'</span>');
                      Materialize.toast($toastContent, 10000,"green");
                    });
          
               } 
               
            var electiveRequestSix = function(){
              
                  //submit elective Subject
              
                  //submit elective term, requestid, elective Course ID (COURSE ID: # CSCI4306)
          
                    requestService.createElectiveRequest(requestId,$scope.e6c1year,$scope.e6c1sub,6).then(function (response) {
                      console.log(response);
                      var $toastContent = $('<span>'+response+'</span>');
                      Materialize.toast($toastContent, 10000,"green");
                    });
          
               }    
          //submit theses / capst
                    
            var courseCompletionRequest = function(){
              
                  requestService.courseCompletionRequest(requestId,$scope.ccYear,$scope.ccSub,1).then(function (response) {
                        console.log(response);
                        var $toastContent = $('<span>'+response+'</span>');
                        Materialize.toast($toastContent, 10000,"green");
                      });
                  
                  if($scope.ccSub == 2){
                    //we need to request for Capstone
                      electiveRequestFive();
                      electiveRequestSix();
                  } else if($scope.ccSub == 1){
                      //we need to request for theses
                      requestService.courseCompletionRequest(requestId,$scope.cct2Year,$scope.ccSub,2).then(function (response) {
                        console.log(response);
                        var $toastContent = $('<span>'+response+'</span>');
                        Materialize.toast($toastContent, 10000,"green");
                      });
                  }
              
                  //submit elective Subject
              
                  //submit elective term, requestid, elective Course ID (COURSE ID: # CSCI4306)
          
                    succesCall();
          
               }         
                    
          
          
        }
        
      }
























    $(document).on('click', '#toast-container .toast', function() {
      if($(this) != undefined || $(this) != null){
        
        if($(this).find('span#hideToast').length != 0) {
              
              $('.toast').fadeOut(function(){
                  $('.toast').remove();
              });
        } else {
            $(this).fadeOut(function(){
                $(this).remove();
            });
        }
        
        
      }
    });


     



  }

  app.controller("requestController",requestController);

  
  
  
  
  
  
  app.directive('optionsDisabled', function($parse) {
    var disableOptions = function(scope, attr, element, data, fnDisableIfTrue) {
        // refresh the disabled options in the select element.
        $("option[value!='?']", element).each(function(i, e) {
            var locals = {};
            locals[attr] = data[i];
            $(this).attr("disabled", fnDisableIfTrue(scope, locals));
        });
    };
    return {
        priority: 0,
        require: 'ngModel',
        link: function(scope, iElement, iAttrs, ctrl) {
            // parse expression and build array of disabled options
            var expElements = iAttrs.optionsDisabled.match(/^\s*(.+)\s+for\s+(.+)\s+in\s+(.+)?\s*/);
            var attrToWatch = expElements[3];
            var fnDisableIfTrue = $parse(expElements[1]);
            scope.$watch(attrToWatch, function(newValue, oldValue) {
                if(newValue)
                    disableOptions(scope, expElements[2], iElement, newValue, fnDisableIfTrue);
            }, true);
            // handle model updates properly
            scope.$watch(iAttrs.ngModel, function(newValue, oldValue) {
                var disOptions = $parse(attrToWatch)(scope);
                if(newValue)
                    disableOptions(scope, expElements[2], iElement, disOptions, fnDisableIfTrue);
            });
        }
    };
});
  
  
  
  
  
  
  
  
  
  
  
  

}());
