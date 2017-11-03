<?php
//header('Content-Type: application/json');
//echo json_encode(electiveYear("5"), JSON_PRETTY_PRINT);
//echo electiveYear("1");

function electiveYear($category){
  include "DataBase.php";
  
  
  $sid = "0";
  
  if($_SESSION["loginStatus"] != true || $_SESSION["designation"] != "student"){
    exit();
  } else {
    $sid = $_SESSION["loginId"];
  }
  
  
  $query = "select er.term from electiverequest er, request r where er.category = $category and er.rid = r.rId and r.rId = (select max(rId) from request where sid = $sid and acad_advisor_approved = 1 and faculty_approved = 1) ";

  $result = mysqli_query($conn, $query);

  if (mysqli_num_rows($result) > 0) {
    // output data of each row
    $output =  array();
    

    while($row = mysqli_fetch_assoc($result)) {
      $row["years"] = getYear();
      
      array_push($output,$row);
    }
    //echo json_encode($output, JSON_PRETTY_PRINT);
    return $output;
  } else {
    $output["term"] = -1;
    $output["years"] = getYear();
    return Array($output);
  }
  mysqli_close($conn);
}


function electiveYearWithSid($category,$sid){
  include "DataBase.php";
  

  if($_SESSION["loginStatus"] != true || ($_SESSION["designation"] != "faculty" && $_SESSION["designation"] != "advisor")){
    exit();
  }
  
  
  $query = "select er.term from electiverequest er, request r where er.category = $category and er.rid = r.rId and r.rId = (select max(rId) from request where sid = $sid and acad_advisor_approved = 1 and faculty_approved = 1) ";

  $result = mysqli_query($conn, $query);

  if (mysqli_num_rows($result) > 0) {
    // output data of each row
    $output =  array();
    

    while($row = mysqli_fetch_assoc($result)) {
      $row["years"] = getYear();
      
      array_push($output,$row);
    }
    //echo json_encode($output, JSON_PRETTY_PRINT);
    return $output;
  } else {
    $output["term"] = -1;
    $output["years"] = getYear();
    return Array($output);
  }
  mysqli_close($conn);
}


function getYear(){
  include "DBConnect.php";
  $query = "select * from term tm where tm.year >= ".(date('Y')-2)." and tm.year <= ".(date('Y')+2)." order by term_id DESC";

  $result = mysqli_query($conn, $query);

  if (mysqli_num_rows($result) > 0) {
    // output data of each row
    $output =  array();
    $set = array();
    $last = -1;
    $default = Array ();
    array_push($output,$default);
    while($row = mysqli_fetch_assoc($result)) {


      array_push($output,$row);
    }
    
    $default = Array(Array ("term_id" => -1, "semester" => "Choose", "year" => "Semister", "disabled" => true));
    
    $output = $default + $output;
    
    //echo json_encode($output, JSON_PRETTY_PRINT);
    return $output;
  } else {
    echo "{}";
  }
  mysqli_close($conn);
}

?>
