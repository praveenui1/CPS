<?php
//header('Content-Type: application/json');
//echo json_encode(cpsStatus(189), JSON_PRETTY_PRINT);

function cpsStatus($rid){
  include "DataBase.php";
  if($_SESSION["loginStatus"] != true || ($_SESSION["designation"] != "advisor" && $_SESSION["designation"] != "faculty")){
   exit();
  }

  $query = "SELECT 	acad_advisor_approved as approved FROM request r where r.rId = $rid";

  if ($_SESSION["designation"] == "faculty"){
    $query = "SELECT faculty_approved as approved FROM request r where r.rId = $rid";
  } else if ($_SESSION["designation"] == "advisor"){
    $query = "SELECT 	acad_advisor_approved as approved FROM request r where r.rId = $rid";
  }
  
  $result = mysqli_query($conn, $query);

  $approvedresult = -1;


  if (mysqli_num_rows($result) > 0) {
    // output data of each row
    $output =  array();
    if($row = mysqli_fetch_assoc($result)) {
      
      if($row["approved"] == 0){
        $row["approved"] = isRequestRecent($rid);
      }
      $approvedresult = $row["approved"];
    }
    
  } 

  $restultout = array("status" => $approvedresult);
  return $restultout;
  
  mysqli_close($conn);
}



function isRequestRecent($rid){
  include "DBConnect.php";
  $query1 = "select max(rId) as rId from request where sId = (SELECT max(sId) as sId FROM request  where rId = $rid)";

  $result = mysqli_query($conn, $query1);

  if (mysqli_num_rows($result) > 0) {
    // output data of each row

    if ($row = mysqli_fetch_assoc($result)) {

      if ($row["rId"] == $rid){
        return 0;
      } else {
        return -2;
      }
    } 
    
  } else {
     return 0;
  }
}


?>
