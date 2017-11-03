<?php
function createElectiveRequest($requestId,$year,$subject,$category){
  
  include "DataBase.php";
  
  $courseDetails = explode(" ", $subject);
  $rubric = $courseDetails[0];
  $number = $courseDetails[1];
  if($number == "" && $courseDetails[2] != null){
      $number = $courseDetails[2];
        if($number == "" && $courseDetails[3] != null){
            $number = $courseDetails[3];
        }
  }
  
  if($_SESSION["loginStatus"] != true){
    echo "check";
    exit();
  }
  
  $query = "INSERT INTO electiverequest (rid, term, rubric, number, category) VALUES ($requestId,$year,'$rubric',$number,$category)";  
  
    if(!mysqli_query($conn, $query)){
      
        echo "{}";
        exit();
    } else {
        echo "Elective Requested Successfully";
    }
}

?>