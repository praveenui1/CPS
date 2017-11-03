<?php
function notificationSeen($nid){
  include "DataBase.php";
  
  
  $id = "0";
  
  if($_SESSION["loginStatus"] != true ){
    exit();
  } else {
    $id = $_SESSION["loginId"];
  }
  
  $query = "SELECT * FROM notifications WHERE nto = $id and nId = $nid";  
  
  $result = mysqli_query($conn, $query);



  if (mysqli_num_rows($result) > 0) {
    
      $query = "UPDATE notifications SET notificationStatus = 1 WHERE nId = $nid";  

      if(!mysqli_query($conn, $query)){
          return "fail";
       } else {
         return "success";
       }
      
    }
    return "fail";
  } 


?>