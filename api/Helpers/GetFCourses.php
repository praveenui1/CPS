<?php
function getFCourses(){
  include "DataBase.php";
  
  
  $sid = "0";
  
  if($_SESSION["loginStatus"] != true || $_SESSION["designation"] != "student"){
    exit();
  } else {
    $sid = $_SESSION["loginId"];
  }
  
  
  $query = "select fa.faid, fa.fid from foundationsAssigned fa where fa.sid =$sid";


  $result = mysqli_query($conn, $query);

  if (mysqli_num_rows($result) > 0) {
    // output data of each row
    $output =  array();
    $set = array();
    
    
    while($row = mysqli_fetch_assoc($result)) {
      $set["faid"] = $row["faid"];
      $set["fid"] = $row["fid"];
      
      $set["foundationYear"] = "";
      $set["fcgrade"] = $row["fcgrade"] == null ? "No Grade": $row["fcgrade"];
      
      $set["list"] = getFCoursesSub($row["fid"]);
      $set["selected"] = searchSelectedCourse($row["fid"],$sid);
      $set["foundationYear"] = searchSelectedYear($row["fid"],$sid);
      $set["years"] = getFCoursesYear();
      //$row["fcid"] == null ? "Course ID" : searchCourseID($row["fcid"], $set["list"]);
      array_push($output,$set);
    }
    echo json_encode($output, JSON_PRETTY_PRINT);
  } else {
    echo "0 results";
  }
  mysqli_close($conn);
}


function getFCoursesWithSid($sid){
  include "DataBase.php";
  

  if($_SESSION["loginStatus"] != true || ($_SESSION["designation"] != "faculty" && $_SESSION["designation"] != "advisor")){
    exit();
  }
  
  
  $query = "select fa.faid, fa.fid from foundationsAssigned fa where fa.sid =$sid";


  $result = mysqli_query($conn, $query);

  if (mysqli_num_rows($result) > 0) {
    // output data of each row
    $output =  array();
    $set = array();
    
    
    while($row = mysqli_fetch_assoc($result)) {
      $set["faid"] = $row["faid"];
      $set["fid"] = $row["fid"];
      
      $set["foundationYear"] = "";
      $set["fcgrade"] = $row["fcgrade"] == null ? "No Grade": $row["fcgrade"];
      
      $set["list"] = getFCoursesSub($row["fid"]);
      $set["selected"] = searchSelectedCourse($row["fid"],$sid);
      $set["foundationYear"] = searchSelectedYear($row["fid"],$sid);
      $set["years"] = getFCoursesYear();
      //$row["fcid"] == null ? "Course ID" : searchCourseID($row["fcid"], $set["list"]);
      array_push($output,$set);
    }
    echo json_encode($output, JSON_PRETTY_PRINT);
  } else {
    echo "0 results";
  }
  mysqli_close($conn);
}



function searchSelectedYear($fid,$sid){
  include "DBConnect.php";
  $query = "select fr.term from foundationsrequest fr, request r where fr.fid = $fid and fr.rid = r.rId and r.rId = (select max(rId) from request where sid = $sid and acad_advisor_approved = 1 and faculty_approved = 1)";

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



function searchSelectedCourse($fid,$sid){
  include "DBConnect.php";
  $query = "select * from foundationsrequest fr, request r, fsubjecttable fs where fr.fid = $fid and fr.rid = r.rid and r.rid = (select max(rId) from request where sid = $sid and acad_advisor_approved = 1 and faculty_approved = 1) and fr.fsid = fs.fsid";

  $result = mysqli_query($conn, $query);

  if (mysqli_num_rows($result) > 0) {

    if($row = mysqli_fetch_assoc($result)) {
      return $row["rubric"]." ".$row["number"];
    } else {
      return "Course ID"; 
    }
    
  } else {
   return "Course ID";
  }
  mysqli_close($conn);
}


function getFCoursesSub($fid){
  include "DBConnect.php";
  $query = "select * from foundationTable ft, fSubjectTable fs where ft.fid = ".$fid." and ft.fid = fs.fid";

  $output =  array();
  $set = array();
  $last = -1;
  
  $default = Array ("rubric" => "Course","number" => "ID","fsname" => "Choose");
  array_push($output,$default);
    

  $result = mysqli_query($conn, $query);

  $subject = "";

  if (mysqli_num_rows($result) > 0) {
    // output data of each row
    

    while($row = mysqli_fetch_assoc($result)) {
      //if($row[""])
      if($subject == ""){
        $subject = $row["fname"];
      }
      array_push($output,$row);
    }
    
    $default = Array(Array ("rubric" => "Course","number" => "ID","fsname" => "Choose $subject", "disabled" => true));
    
    $output = $default + $output;
    
    //echo json_encode($output, JSON_PRETTY_PRINT);
    return $output;
  } else {
    echo "0 results";
  }
  mysqli_close($conn);
}





function getFCoursesYear(){
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




?>
