<?php

//header('Content-Type: application/json');
//echo json_encode(electiveSub("1900","-1","0","9999","1"), JSON_PRETTY_PRINT);



function electiveSub($term,$rubric,$min,$max,$category){
  include "DataBase.php";
  
  
  $sid = "0";
  
  if($_SESSION["loginStatus"] != true || $_SESSION["designation"] != "student"){
    exit();
  } else {
    $sid = $_SESSION["loginId"];
  }
  
  $query = "SELECT term FROM course_catalog WHERE term = $term";
  $result = mysqli_query($conn, $query);
  if (mysqli_num_rows($result) > 0) {
    
  } else {
      $query = "SELECT term FROM course_catalog WHERE term = (SELECT max(term) FROM `course_catalog`) limit 1";
      $result = mysqli_query($conn, $query);
      if (mysqli_num_rows($result) > 0) {
        $row = mysqli_fetch_assoc($result);
        $term = $row["term"];
      } 
  }
  
  
  $query = "SELECT er.rubric, er.number from electiverequest er, request r where er.rubric = '$rubric' and er.rid = r.rId and r.rId = (select max(rId) from request where sid = $sid and acad_advisor_approved = 1 and faculty_approved = 1) and er.category = $category";
  $result = mysqli_query($conn, $query);

  $output =  array();
  

  if (mysqli_num_rows($result) > 0) {
    // output data of each row
    
    while($row = mysqli_fetch_assoc($result)) {
      $row["selected"] = $row["rubric"]." ".$row["number"];
      $row["list"] = getElectivesList($term,$rubric,$min,$max);
      array_push($output,$row);
    }
    
    
   
  } else {
    $row =  array();
    $row["selected"] = "Course ID";
    $row["list"] = getElectivesList($term,$rubric,$min,$max);
    array_push($output,$row);
  }
  return $output;
  
  
  mysqli_close($conn);
}



function electiveSubWithSid($term,$rubric,$min,$max,$category, $sid){
  include "DataBase.php";
  
  

 if($_SESSION["loginStatus"] != true || ($_SESSION["designation"] != "faculty" && $_SESSION["designation"] != "advisor")){
    exit();
  }
  
  $query = "SELECT term FROM course_catalog WHERE term = $term";
  $result = mysqli_query($conn, $query);
  if (mysqli_num_rows($result) > 0) {
    
  } else {
      $query = "SELECT term FROM course_catalog WHERE term = (SELECT max(term) FROM `course_catalog`) limit 1";
      $result = mysqli_query($conn, $query);
      if (mysqli_num_rows($result) > 0) {
        $row = mysqli_fetch_assoc($result);
        $term = $row["term"];
      } 
  }
  
  
  $query = "SELECT er.rubric, er.number from electiverequest er, request r where er.rubric = '$rubric' and er.rid = r.rId and r.rId = (select max(rId) from request where sid = $sid and acad_advisor_approved = 1 and faculty_approved = 1) and er.category = $category";
  $result = mysqli_query($conn, $query);

  $output =  array();
  

  if (mysqli_num_rows($result) > 0) {
    // output data of each row
    
    while($row = mysqli_fetch_assoc($result)) {
      $row["selected"] = $row["rubric"]." ".$row["number"];
      $row["list"] = getElectivesList($term,$rubric,$min,$max);
      array_push($output,$row);
    }
    
    
   
  } else {
    $row =  array();
    $row["selected"] = "Course ID";
    $row["list"] = getElectivesList($term,$rubric,$min,$max);
    array_push($output,$row);
  }
  return $output;
  
  
  mysqli_close($conn);
}


function getElectivesList($term,$rubric,$min,$max){
    
    include "DBConnect.php";
    
    $query = "select * from course_catalog cc where cc.term=".$term." and cc.rubric ='".$rubric."' and (cc.number >= $min and cc.number <= $max) order by cc.course_title asc";

    $result = mysqli_query($conn, $query);
  
    $output =  array();
  

    $default = Array ();
    array_push($output,$default);
  
    if (mysqli_num_rows($result) > 0) {
      // output data of each row
      $output =  array();
      $set = array();
      $last = -1;
  
      while($row = mysqli_fetch_assoc($result)) {
        array_push($output,$row);
      }
    }
    $default = Array(Array ("rubric" => "Course","number" => "ID", "course_title" => "Choose Subject", "disabled" => true));
    
    $output = $default + $output;
    return $output;
  
  mysqli_close($conn);
}


?>
