<?php
function createFoundationRequest($requestId,$foundationYear,$foundationCourse,$rowNo){
  include "DataBase.php";
  

  
  $courseDetails = explode(" ", $foundationCourse);
  $rubric = $courseDetails[0];
  $number = $courseDetails[1];
  if($number == "" && $courseDetails[2] != null){
      $number = $courseDetails[2];
        if($number == "" && $courseDetails[3] != null){
            $number = $courseDetails[3];
        }
  }
  
  if($_SESSION["loginStatus"] != true){
    exit();
  }
  
  $fid = "";
  $fsid = "";
  
  
  $query = "select * from fsubjecttable where rubric = '$rubric' and number = $number";

  $result = mysqli_query($conn, $query);

  if (mysqli_num_rows($result) > 0) {
    
    while($row = mysqli_fetch_assoc($result)) {
      $fid = $row["fid"];
      $fsid = $row["fsid"];
    }
    
  } else {
    echo "{}";
    exit();
  }
  
  
  
  
  
  $query = "INSERT INTO foundationsrequest (rid, term, fid, fsid, rowNo) VALUES ($requestId,$foundationYear,$fid,$fsid, $rowNo)";  
  
  if(!mysqli_query($conn, $query)){
      echo "{}";
      exit();
  } else {
      echo "Foundations Requested Successfully";
  }
  
  
  
  mysqli_close($conn);
}

?>
