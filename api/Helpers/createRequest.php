<?php
include "mailSender.php";

function createRequest($requestTime){
  include "DataBase.php";
  
  $sid = "0";
  
  if($_SESSION["loginStatus"] != true || $_SESSION["designation"] != "student"){
    exit();
  } else {
    $sid = $_SESSION["loginId"];
  }
  
  $query = "INSERT INTO request ( sId, faculty_approved, acad_advisor_approved, raisedBy, time) VALUES ($sid,0,0,4,$requestTime)";  
  
  if(!mysqli_query($conn, $query)){
      echo "{}";
      exit();
  }
  
 
  
  $query = "select * from request where sId = $sid and time = $requestTime";

  $result = mysqli_query($conn, $query);

  if (mysqli_num_rows($result) > 0) {
    // output data of each row
    $output =  array();
    
    /*
    notification table:
      nid -> notificaton id
      nto -> notification to // if current user is student we send it to faculty
      nfrom -> notification from //current userID -> it may be faculty advisor or student
      notificationStatus -> initially 0 as notification is not viewed
      request status -> Int to identify request status and display in color code (aproved by faculty Advisor -> light green, approved by acadamic advisor -> green)
      //timestamp -> request time
    */
    
    if($row = mysqli_fetch_assoc($result)) {
      array_push($output,$row);
      
      $rid = $row["rId"];
      
      $toId = getnotificationto($sid);
      $newQuery = "INSERT INTO notifications ( nto, nfrom, requestId, notificationStatus, requestStatus, timeStamp) VALUES ($toId,$sid,$rid,0,0,$requestTime)";
      if(!mysqli_query($conn, $newQuery)){
        echo "{}";
        exit();
      }
      
     
    }
    
  
    
    return $output;
  } else {
    echo "{}";
  }
  
  mysqli_close($conn);
}

 
 
 
 function createRequestWithSid($requestTime,$sid){
  include "DataBase.php";
  

  
  if($_SESSION["loginStatus"] != true || ($_SESSION["designation"] != "faculty" && $_SESSION["designation"] != "advisor")){
    exit();
  }
  
  
  $query = "INSERT INTO request ( sId, faculty_approved, acad_advisor_approved, raisedBy, time) VALUES ($sid,1,1,2,$requestTime)";  
  $user_id = $_SESSION["loginId"];
  
  if($_SESSION["designation"] == "faculty"){
    $query = "INSERT INTO request ( sId, faculty_approved, acad_advisor_approved, raisedBy, time) VALUES ($sid,1,0,3,$requestTime)";  
    
  }
  
  
  if($_SESSION["designation"] == "advisor"){
    $query = "INSERT INTO request ( sId, faculty_approved, acad_advisor_approved, raisedBy, time) VALUES ($sid,1,1,2,$requestTime)";  
  }
  
  if(!mysqli_query($conn, $query)){
      echo "{}";
      exit();
  }
  
 
  
  $query = "select * from request where sId = $sid and time = $requestTime";

  $result = mysqli_query($conn, $query);

  if (mysqli_num_rows($result) > 0) {
    // output data of each row
    $output =  array();
   
    /*
    notification table:
      nid -> notificaton id
      nto -> notification to // if current user is student we send it to faculty
      nfrom -> notification from //current userID -> it may be faculty advisor or student
      notificationStatus -> initially 0 as notification is not viewed
      request status -> Int to identify request status and display in color code (aproved by faculty Advisor -> light green, approved by acadamic advisor -> green)
      //timestamp -> request time
    */
    
    
    if($row = mysqli_fetch_assoc($result)) {
      array_push($output,$row);
      
      $rid = $row["rId"];
      

      
      $toId = getnotificationto($user_id);
      

      $newQuery = "INSERT INTO notifications ( nto, nfrom, requestId, notificationStatus, requestStatus, timeStamp) VALUES ($toId,$user_id,$rid,0,0,$requestTime)";
      if(!mysqli_query($conn, $newQuery)){
        echo "{}";
        exit();
      } else {
          $mail = new EwsSendEmail();
          $mail -> sendEmail($toId,$rid);

      }
      
      
      $toStudentQuery = "INSERT INTO notifications ( nto, nfrom, requestId, notificationStatus, requestStatus, timeStamp) VALUES ($sid,$user_id,$rid,0,0,$requestTime)";
      if(!mysqli_query($conn, $toStudentQuery)){
        echo "{}";
        exit();
      } else {
          $mail = new EwsSendEmail();
          $mail -> sendEmail($sid,$rid);

      }
      
     
    }
    
    
  
    
    return $output;
  } else {
    echo "{}";
  }
  
  mysqli_close($conn);
}
 
function getnotificationto($sid){
  include "DBConnect.php";
  
  
  
  //check if student 
  if($_SESSION["designation"] == "student"){
    $query = "SELECT s.faculty_id FROM student s WHERE user_id = $sid";
  
    $result = mysqli_query($conn, $query);

    if (mysqli_num_rows($result) > 0) {

     if($row = mysqli_fetch_assoc($result)) {
        return $row["faculty_id"];
    } else {
        return -1; 
      }
    
    } else {
    return -1;
    }
  
  } else if($_SESSION["designation"] == "faculty"){
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

function sendMail(){

$newMail = new EwsSendEmail("Almansour, Maram", "AlmansourM3142@UHCL.edu");
}

//select user_email from user where user_id = $toId

?>
