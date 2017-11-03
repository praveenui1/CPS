<?php
function createCoreRequest($requestId,$year,$rubric,$number,$rowNo){
  
  include "DataBase.php";
  
  
  if($_SESSION["loginStatus"] != true){
    exit();
  }
  
  $query = "INSERT INTO corerequest (rid, term, rubric, number, rowNo) VALUES ($requestId,$year,'$rubric',$number, $rowNo)";  
  
    if(!mysqli_query($conn, $query)){
      
        echo "{}";
        exit();
    } else {
        echo "Core Requested Successfully";
    }
}

?>