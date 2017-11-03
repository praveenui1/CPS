<?php
//header('Content-Type: application/json');
//echo json_encode(electiveDepartment("4"), JSON_PRETTY_PRINT);

function electiveDepartment($category){
  include "DataBase.php";
  
  
  $sid = "0";
  
  if($_SESSION["loginStatus"] != true || $_SESSION["designation"] != "student"){
    exit();
  } else {
    $sid = $_SESSION["loginId"];
  }
  
  
  $query = "select er.rubric from electiverequest er, request r where er.category = $category and er.rid = r.rId and r.rId = (select max(rId) from request where sid = $sid and acad_advisor_approved = 1 and faculty_approved = 1) ";

  $result = mysqli_query($conn, $query);

  if (mysqli_num_rows($result) > 0) {
    // output data of each row
    $output =  array();
    

    while($row = mysqli_fetch_assoc($result)) {
      array_push($output,$row);
    }
    //echo json_encode($output, JSON_PRETTY_PRINT);
    return $output;
  } else {
    $output["rubric"] = "-1";
    return Array($output);
  }
  mysqli_close($conn);
}


function electiveDepartmentWithSid($category,$sid){
  include "DataBase.php";

  
  if($_SESSION["loginStatus"] != true || ($_SESSION["designation"] != "faculty" && $_SESSION["designation"] != "advisor")){
    exit();
  }
  
  
  $query = "select er.rubric from electiverequest er, request r where er.category = $category and er.rid = r.rId and r.rId = (select max(rId) from request where sid = $sid and acad_advisor_approved = 1 and faculty_approved = 1) ";

  $result = mysqli_query($conn, $query);

  if (mysqli_num_rows($result) > 0) {
    // output data of each row
    $output =  array();
    

    while($row = mysqli_fetch_assoc($result)) {
      array_push($output,$row);
    }
    //echo json_encode($output, JSON_PRETTY_PRINT);
    return $output;
  } else {
    $output["rubric"] = "-1";
    return Array($output);
  }
  mysqli_close($conn);
}

?>
