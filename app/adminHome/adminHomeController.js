(function(){
var app = angular.module("onlineCPS");



  
  




  var adminHomeController = function($scope, $rootScope, $http, $log, $location, adminHomeService,session){
  
      $(document).ready(function(){
        $('.tooltipped').tooltip({delay: 50});
      });
 
      if($rootScope == null ){
        session.updateSession();
      } 
     
     
     
     
     
     $log.debug("in admin page");
     
     
     
     
    
     
        
      
     
     
     
     $scope.fetchData = function(){
        document.getElementById("fetchWait").style.display = "block";
        document.getElementById("fetchButtonItem").style.display = "none";
        adminHomeService.fetchCatlog().then(function(response){
                if(response.includes("All")){
                    var $toastContent = $("<span>"+response+"</span>");
                    Materialize.toast($toastContent, 300000,"green");
                } else if(response.includes("Courses")){
                    var $toastContent = $("<span>"+response+"</span>");
                    Materialize.toast($toastContent, 300000,"blue");
                } else {
                    var $toastContent = $("<span>Something went wrong!!</span>");
                    Materialize.toast($toastContent, 300000,"black");
                }
                document.getElementById("fetchWait").style.display = "none";
                document.getElementById("fetchButtonItem").style.display = "block";
        },function(error){},function(progress){})
     }
     




//////////

    $("form#import_form").submit(function(){

    $('.toast').remove();

    var formData = new FormData($(this)[0]);
        
        document.getElementById("uploadWait").style.display = "block";
        document.getElementById("uploadFormBlock").style.display = "none";
        
        $.ajax({
            url: './api/uploadCourseCatalog.php',
            type: 'POST',
            timeout:3000000,
            data: formData,
            async: true,
            success: function (data) {
                console.log(data);
                document.getElementById("uploadWait").style.display = "none";
                document.getElementById("uploadFormBlock").style.display = "block";
                if(data.includes("All")){
                    var $toastContent = $("<span>"+data+"</span>");
                    Materialize.toast($toastContent, 300000,"green");
                } else if(data.includes("Courses")){
                    var $toastContent = $("<span>"+data+"</span>");
                    Materialize.toast($toastContent, 300000,"blue");
                } else {
                    var $toastContent = $("<span>"+data+"</span>");
                    Materialize.toast($toastContent, 300000,"brown lighten-1");
                }
                document.getElementById("importfile").value="";
                document.getElementById("inputFileName").value="";
                
            },
            error: function(jqXHR, textStatus){
                if(textStatus == 'timeout')
                {     
                    var $toastContent = $("<span>TimeOut</span>");
                    Materialize.toast($toastContent, 300000,"red");
                }
            },
            cache: false,
            contentType: false,
            processData: false
        });

      return false;
    });


//////////

////toast

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
    
    //toast




  }

  app.controller("adminHomeController",adminHomeController);
  
  

}());
