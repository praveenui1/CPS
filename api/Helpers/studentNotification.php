<?php
function studentNotification(){
  include "DataBase.php";
  
  if($_SESSION["loginStatus"] != true || $_SESSION["designation"] != "student"){
    exit();
  } else {
    $id = $_SESSION["loginId"];
  }
  
  $query = "SELECT nId, nfrom, requestId, notificationStatus, requestStatus, timeStamp, user_id, user_name, user_type, user_email, user_first_name, user_last_name FROM notifications n, user u WHERE nto = $id and n.nfrom = u.user_id order by nId desc";  
  
  $result = mysqli_query($conn, $query);

  if (mysqli_num_rows($result) > 0) {
    $output =  array();
    while($row = mysqli_fetch_assoc($result)) {
      array_push($output,$row);
    }
    return $output;
  } 
}

?>