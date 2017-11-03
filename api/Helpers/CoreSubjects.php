<?php
function core_subjects(){
  include "DataBase.php";

  $sid = "0";
  if($_SESSION["loginStatus"] != true || $_SESSION["designation"] != "student"){
    exit();
  } else {
    $sid = $_SESSION["loginId"];
  }
  $query = "SELECT * from coreSub cs, course_catalog ca, student st where cs.termId = ca.term and cs.subId = ca.ccid and st.user_id = $sid and st.department_id = cs.deptId";
  $result = mysqli_query($conn, $query);

  if (mysqli_num_rows($result) > 0) {
    // output data of each row
    $output =  array();
    while($row = mysqli_fetch_assoc($result)) {
      $row["coreYear"] = searchSelectedYear($row["rubric"], $row["number"], $sid);
      $row["years"] = getCoreCoursesYear();
      array_push($output,$row);
      
    }
    echo json_encode($output, JSON_PRETTY_PRINT);
  } else {
    echo "{}";
  }
  mysqli_close($conn);
}


function core_subjectsWithSid($sid){
  include "DataBase.php";

  if($_SESSION["loginStatus"] != true || ($_SESSION["designation"] != "faculty" && $_SESSION["designation"] != "advisor")){
    exit();
  }

  $query = "SELECT * from coreSub cs, course_catalog ca, student st where cs.termId = ca.term and cs.subId = ca.ccid and st.user_id = $sid and st.department_id = cs.deptId";
  $result = mysqli_query($conn, $query);

  if (mysqli_num_rows($result) > 0) {
    // output data of each row
    $output =  array();
    while($row = mysqli_fetch_assoc($result)) {
      $row["coreYear"] = searchSelectedYear($row["rubric"], $row["number"], $sid);
      $row["years"] = getCoreCoursesYear();
      array_push($output,$row);
      
    }
    echo json_encode($output, JSON_PRETTY_PRINT);
  } else {
    echo "{}";
  }
  mysqli_close($conn);
}



function getCoreCoursesYear(){
  include "DBConnect.php";
  echo "";
  $query = "select * from term tm where tm.year >= ".(date('Y')-2)." and tm.year <= ".(date('Y')+2)." order by term_id DESC";

  $result = mysqli_query($conn, $query);

  $output =  array();
  

  $default = Array ();
  array_push($output,$default);

  if (mysqli_num_rows($result) > 0) {
    // output data of each row

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

function searchSelectedYear($rubric,$number,$sid){
  include "DBConnect.php";
  $query = "select cr.term from corerequest cr, request r where cr.rubric = '$rubric' and cr.number = $number and cr.rid = r.rId and r.rId = (select max(rId) from request where sid = $sid and acad_advisor_approved = 1 and faculty_approved = 1)";

  $result = mysqli_query($conn, $query);

  if (mysqli_num_rows($result) > 0) {

    if($row = mysqli_fetch_assoc($result)) {
      return $row["term"];
    } else {
      return -1; 
    }
    
  } else {
   return -1;
  }
  mysqli_close($conn);
}



?>
