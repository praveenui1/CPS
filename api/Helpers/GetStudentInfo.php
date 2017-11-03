<?php
function GetStudentInfo(){
  include "DataBase.php";

  if($_SESSION["loginStatus"] != true || $_SESSION["designation"] != "student"){
    exit();
  } else {
    $sid = $_SESSION["loginId"];
  }


  $query = "select u.user_id, u.user_first_name, u.user_last_name, s.student_acad_plan, s.student_acad_subplan from user u, student s where u.user_id = s.user_id and u.user_id = $sid";

  $result = mysqli_query($conn, $query);

  if (mysqli_num_rows($result) > 0) {
    // output data of each row
    $output =  array();
    $set = array();
    
    while($row = mysqli_fetch_assoc($result)) {
      $set["user_id"] = $row["user_id"];
      $set["user_first_name"] = $row["user_first_name"];
      $set["user_last_name"] = $row["user_last_name"];
      $set["student_acad_plan"] = $row["student_acad_plan"];
      $set["student_acad_subplan"] = $row["student_acad_subplan"];
      //$set["Foundation"] = getFoundationCourses($row["user_id"]);
      array_push($output,$set);
    }
    echo json_encode($output, JSON_PRETTY_PRINT);
  } else {
    echo "0 results";
  }
  mysqli_close($conn);

}

function getFoundationCourses($user_id){
  include "DBConnect.php";
  
 $query = "SELECT DISTINCT fs.rubric, fs.number, fs.fsname, fr.term
FROM foundationsassigned as fa, fsubjecttable as fs, foundationsrequest as fr, request as r
WHERE fs.fsid = fa.fcid
AND fs.fsid = fr.fcid 
AND fr.rid = r.rId
AND r.sId = 1396894
AND acad_advisor_approved = 1
OR faculty_approved =1
order by r.rId desc 
limit 1";

  $result = mysqli_query($conn, $query);

  if (mysqli_num_rows($result) > 0) {
    // output data of each row
    $output =  array();
    $set = array();
    $last = -1;

    while($row = mysqli_fetch_assoc($result)) {
      //if($row[""])

      array_push($output,$row);
    }
    //echo json_encode($output, JSON_PRETTY_PRINT);
    return $output;
  } else {
    echo "0 results";
  }
  mysqli_close($conn);
}

 ?>