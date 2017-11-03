<?php
include "mailSender.php";

function cpsAction($rid,$action,$timestamp){
  include "DataBase.php";
  
 $sid = 0;
 
 if($_SESSION["loginStatus"] != true || ($_SESSION["designation"] != "advisor" && $_SESSION["designation"] != "faculty")){
   exit();
 } else {
     $sid = $_SESSION["loginId"];
 } 

  
  if($_SESSION["designation"] == "faculty"){

  $query = "UPDATE request SET faculty_approved = $action WHERE rId = $rid";  
  
  if(!mysqli_query($conn, $query)){
      return "fail";
   } else {
       
       
      $toId = getnotificationto($sid);
      

      $newQuery = "INSERT INTO notifications ( nto, nfrom, requestId, notificationStatus, requestStatus, timeStamp) VALUES ($toId,$sid,$rid,0,$action,$timestamp)";
      if(!mysqli_query($conn, $newQuery)){
        
        print_r([$toId,$sid,$rid,$action,0,$requestTime]);  
          
        return "error1";
        exit();
      } else {
          $mail = new EwsSendEmail();
          $mail -> sendEmail($toId,$rid);

      }
      
      
      $toId2 = getnotificationto2($rid);
      $toStudentQuery = "INSERT INTO notifications ( nto, nfrom, requestId, notificationStatus, requestStatus, timeStamp) VALUES ($toId2,$sid,$rid,0,$action,$timestamp)";
      if(!mysqli_query($conn, $toStudentQuery)){
        return "error2"; 
        exit();
      } else {
          $mail = new EwsSendEmail();
          $mail -> sendEmail($toId2,$rid);

      }
       
       
      return "success";
   }
   
  }else if($_SESSION["designation"] == "advisor"){
  
  $query = "UPDATE request SET acad_advisor_approved = $action WHERE rId = $rid";  

  if(!mysqli_query($conn, $query)){
      return "fail";
   } else {
       
     $toId = getnotificationto($sid);
      

      $newQuery = "INSERT INTO notifications ( nto, nfrom, requestId, notificationStatus, requestStatus, timeStamp) VALUES ($toId,$sid,$rid,0,$action,$timestamp)";
      if(!mysqli_query($conn, $newQuery)){
        return 0; 
        exit();
      } else {
          $mail = new EwsSendEmail();
          $mail -> sendEmail($toId,$rid);

      }
      
      
      $toId2 = getnotificationto2($rid);
      $toStudentQuery = "INSERT INTO notifications ( nto, nfrom, requestId, notificationStatus, requestStatus, timeStamp) VALUES ($toId2,$sid,$rid,0,$action,$timestamp)";
      if(!mysqli_query($conn, $toStudentQuery)){
        return 0; 
        exit();
      } else {
          $mail = new EwsSendEmail();
          $mail -> sendEmail($toId2,$rid);

      }
       
     return "success";
   }
   
  }
}




function getnotificationto($sid){
  include "DBConnect.php";
  
  
  
  if($_SESSION["designation"] == "faculty"){
    $query = "SELECT a.user_id FROM advisor a,faculty f WHERE f.user_id = $sid and f.department_id = a.department_id";
  
    $result = mysqli_query($conn, $query);

    if (mysqli_num_rows($result) > 0) {

     if($row = mysqli_fetch_assoc($result)) {
        return $row["user_id"];
    } else {
        return -1; 
      }
    
    } else {
    return -1;
    }
  
   } else if($_SESSION["designation"] == "advisor"){
    
    
    
    $query = "SELECT f.user_id FROM advisor a,faculty f WHERE a.user_id = $sid and a.department_id = f.department_id";
  
    
  
    $result = mysqli_query($conn, $query);

    if (mysqli_num_rows($result) > 0) {

     if($row = mysqli_fetch_assoc($result)) {
        return $row["user_id"];
    } else {
        return -1; 
      }
    
    } else {
    return -1;
    }
  
  }
  mysqli_close($conn);
}



function getnotificationto2($rid){
  include "DBConnect.php";
  
  
  
   if($_SESSION["designation"] == "faculty" || $_SESSION["designation"] == "advisor"){
    $query = "SELECT * FROM request WHERE rId = $rid";
  
    $result = mysqli_query($conn, $query);

    if (mysqli_num_rows($result) > 0) {

     if($row = mysqli_fetch_assoc($result)) {
        return $row["sId"];
    } else {
        return -1; 
      }
    
    } else {
    return -1;
    }
  
   }
  mysqli_close($conn);
}




?>