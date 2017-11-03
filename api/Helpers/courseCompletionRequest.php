<?php
function courseCompletionRequest($requestId, $ccNo, $ccYear, $ccSub){
  
  include "DataBase.php";
  
  
  
  if($_SESSION["loginStatus"] != true){
    exit();
  }
  
  $query = "INSERT INTO ccrequest ( rid, cno, term, ccsub) VALUES ($requestId,$ccNo,$ccYear,$ccSub)";  
  
    if(!mysqli_query($conn, $query)){
      
        echo "{}";
        exit();
    } else {
        echo "Elective Requested Successfully";
    }
}

?>