<?php

//header('Content-Type: application/json');
//echo json_encode(finalCPS(), JSON_PRETTY_PRINT);



  
  
function finalCPS(){
  include "DataBase.php";
  
  $id = "0";
  
  if($_SESSION["loginStatus"] != true || $_SESSION["designation"] != "student"){
    exit();
  } else {
    $id = $_SESSION["loginId"];
  }
  

  $approvedresult = array("StudentInfo" => GetStudentInfo($id),"Foundations" => appfchange($id), "Corecourses" => appcchange($id), "Electives" => appechange($id), "Completecourse" => appochange($id),"FacultyInfo" => GetFacultyInfo($id));
  return $approvedresult;
  
  mysqli_close($conn);
}


function finalCPSWithSid($id){
  include "DataBase.php";
  
 
  if($_SESSION["loginStatus"] != true){
    exit();
  } 
  

  $approvedresult = array("StudentInfo" => GetStudentInfo($id),"Foundations" => appfchange($id), "Corecourses" => appcchange($id), "Electives" => appechange($id), "Completecourse" => appochange($id),"FacultyInfo" => GetFacultyInfo($id));
  return $approvedresult;
  
  mysqli_close($conn);
}

function GetStudentInfo($id){
  include "DBConnect.php";  

  $query1 = "select u.user_id, u.user_first_name, u.user_last_name, s.student_acad_plan, s.student_acad_subplan from user u, student s where u.user_id = s.user_id and u.user_id = $id";

  $result = mysqli_query($conn, $query1);

  if (mysqli_num_rows($result) > 0) {
    // output data of each row
    $output =  array();
    while($row = mysqli_fetch_assoc($result)) {
      array_push($output,$row);
    }
    return $output;
  } else {
    return 0;
  }
}

function appfchange($id){
include "DBConnect.php";
$query1 = "SELECT * FROM request r, foundationsrequest fr, fsubjecttable fs, term tr where r.rId = (select max(rId) from request where acad_advisor_approved = 1 and faculty_approved = 1 and sId = $id) and r.rId = fr.rid and fr.term = tr.term_id and fs.fsid = fr.fsid";

  $result = mysqli_query($conn, $query1);

  if (mysqli_num_rows($result) > 0) {
    // output data of each row
    $output =  array();
    while($row = mysqli_fetch_assoc($result)) {
      array_push($output,$row);
    }
    return $output;
  } else {
    return 0;
  }
}
function appcchange($id){
include "DBConnect.php";
$query1 = "SELECT * FROM request r, corerequest cr, course_catalog cc, term tr where r.rId = (select max(rId) from request where acad_advisor_approved = 1 and faculty_approved = 1 and sId = $id) and r.rId = cr.rid and cr.term = tr.term_id and cc.number = cr.number and cr.rubric = cc.rubric and cc.term = (select max(term) from course_catalog)";

  $result = mysqli_query($conn, $query1);

  if (mysqli_num_rows($result) > 0) {
    // output data of each row
    $output =  array();
    while($row = mysqli_fetch_assoc($result)) {
      array_push($output,$row);
    }
    return $output;
  } else {
    return 0;
  }
}
function appechange($id){
include "DBConnect.php";
$query1 = "SELECT * FROM request r, electiverequest er, course_catalog cc, term tr where r.rId = (select max(rId) from request where acad_advisor_approved = 1 and faculty_approved = 1 and sId = $id) and r.rId = er.rid and er.term = tr.term_id and cc.number = er.number and er.rubric = cc.rubric and cc.term = (select max(term) from course_catalog)";

  $result = mysqli_query($conn, $query1);

  if (mysqli_num_rows($result) > 0) {
    // output data of each row
    $output =  array();
    while($row = mysqli_fetch_assoc($result)) {
      array_push($output,$row);
    }
    return $output;
  } else {
    return 0;
  }
}
function appochange($id){ 
include "DBConnect.php";
$query1 = "SELECT * FROM request r, ccrequest cco, term tr where r.rId = (select max(rId) from request where acad_advisor_approved = 1 and faculty_approved = 1 and sId = $id) and cco.term = tr.term_id and cco.rid = r.rId";

  $result = mysqli_query($conn, $query1);

  if (mysqli_num_rows($result) > 0) {
    // output data of each row
    $output =  array();
    while($row = mysqli_fetch_assoc($result)) {
            if ($row["ccsub"] === '1' && $row["cno"] === '1')
      {
        $row["ccsub"] = "Thesis-1";
      }
      else if ($row["ccsub"] === '1' && $row["cno"] === '2')
      {
        $row["ccsub"] = "Thesis-2";
      }
      else if ($row["ccsub"] === '2' && $row["cno"] === '1')
      {
        $row["ccsub"] = "Project";
      }
      array_push($output,$row);
    }
    return $output;
  } else {
    return 0;
  }
  
}

function GetFacultyInfo($id){
  include "DBConnect.php";  

  $query1 = "select u.user_first_name, u.user_last_name from user u, student s where u.user_id = s.faculty_id and s.user_id = $id";

  $result = mysqli_query($conn, $query1);

  if (mysqli_num_rows($result) > 0) {
    // output data of each row
    $output =  array();
    while($row = mysqli_fetch_assoc($result)) {
      array_push($output,$row);
    }
    return $output;
  } else {
    return 0;
  }
}

?>
