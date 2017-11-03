<?php
//header('Content-Type: application/json');
//echo json_encode(cpsChange(194), JSON_PRETTY_PRINT);

function cpsChange($rid){
  include "DataBase.php";
  $id = studentId($rid);
  $approvedresult = array("Foundations" => appfchange($id), "Corecourses" => appcchange($id), "Electives" => appechange($id), "Completecourse" => appochange($id));
  $requestedresult = array("Foundations" => reqfchange($rid), "Corecourses" => reqcchange($rid), "Electives" => reqechange($rid), "Completecourse" => reqochange($rid));
  $restultout = array("Approved" => $approvedresult, "Requested" => $requestedresult);
  return $restultout;
  
  mysqli_close($conn);
}

function studentId($rid){
  include "DBConnect.php";
  $query1 = "SELECT max(sId) FROM request  where rId = $rid";

  $result = mysqli_query($conn, $query1);

  if (mysqli_num_rows($result) > 0) {
    // output data of each row
    
    if ($row = mysqli_fetch_assoc($result)) {
      return $row["max(sId)"];
    } else {
      return 0;
    }
    
  } else {
     return 0;
  }
}

function appfchange($id){
  include "DBConnect.php";
  $query1 = "SELECT * FROM request r, foundationsrequest fr, fsubjecttable fs, term tr where r.rId = (select max(rId) from request where acad_advisor_approved = 1 and faculty_approved = 1 and sId = $id) and r.rId = fr.rid and fr.term = tr.term_id and fs.fsid = fr.fsid order by fr.rowNo asc";

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

$query2 = "SELECT * FROM request r, corerequest cr, course_catalog cc, term tr where r.rId = (select max(rId) from request where acad_advisor_approved = 1 and faculty_approved = 1 and sId = $id) and r.rId = cr.rid and cr.term = tr.term_id and cc.number = cr.number and cr.rubric = cc.rubric and cc.term = (select max(term) from course_catalog) order by cr.rowNo asc";

  $result = mysqli_query($conn, $query2);

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

 $query3 = "SELECT * FROM request r, electiverequest er, course_catalog cc, term tr where r.rId = (select max(rId) from request where acad_advisor_approved = 1 and faculty_approved = 1 and sId = $id) and r.rId = er.rid and er.term = tr.term_id and cc.number = er.number and er.rubric = cc.rubric and cc.term = (select max(term) from course_catalog) order by er.category asc";

  $result = mysqli_query($conn, $query3);

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

 $query4 = "SELECT * FROM request r, ccrequest cco, term tr where r.rId = (select max(rId) from request where acad_advisor_approved = 1 and faculty_approved = 1 and sId = $id) and cco.term = tr.term_id and cco.rid = r.rId order by cco.cno asc";

  $result = mysqli_query($conn, $query4);

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


function reqfchange($rid){
 include "DBConnect.php";
 
 $query5 = "SELECT * FROM request r, foundationsrequest fr, fsubjecttable fs, term tr where r.rId = $rid and r.rId = fr.rid and fr.term = tr.term_id and fs.fsid = fr.fsid order by fr.rowNo asc";

  $result = mysqli_query($conn, $query5);

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
function reqcchange($rid){
 include "DBConnect.php";
 
 $query6 = "SELECT * FROM request r, corerequest cr, course_catalog cc, term tr where r.rId = $rid and r.rId = cr.rid and cr.term = tr.term_id and cc.number = cr.number and cr.rubric = cc.rubric and cc.term = (select max(term) from course_catalog) order by cr.rowNo asc";

  $result = mysqli_query($conn, $query6);

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
function reqechange($rid){
 include "DBConnect.php";

 $query7 = "SELECT * FROM request r, electiverequest er, course_catalog cc, term tr where r.rId = $rid and r.rId = er.rid and er.term = tr.term_id and cc.number = er.number and er.rubric = cc.rubric and cc.term = (select max(term) from course_catalog) order by er.category asc";

  $result = mysqli_query($conn, $query7);

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
function reqochange($rid){
 include "DBConnect.php";

 $query8 = "SELECT * FROM request r, ccrequest cco, term tr where r.rId = $rid and cco.term = tr.term_id and cco.rid = r.rId order by cco.cno asc";

  $result = mysqli_query($conn, $query8);

  if (mysqli_num_rows($result) > 0) {
    // output data of each row
    $output =  array();
    while($row = mysqli_fetch_assoc($result)) {
      if ($row["ccsub"] == "1" && $row["cno"] == "1")
      {
        $row["ccsub"] = "Thesis-1";
      }
      else if ($row["ccsub"] == "1" && $row["cno"] == "2")
      {
        $row["ccsub"] = "Thesis-2";
      }
      else if ($row["ccsub"] == "2" && $row["cno"] == "1")
      {
        $row["ccsub"] = "Capstone";
      }
      array_push($output,$row);
    }
    return $output;
  } else {
    return 0;
  }
}
?>
