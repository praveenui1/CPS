<?php

  include "Helpers/DataBase.php";

  $query = "select term, rubric, number, course_title, credit_hour, level from course_catalog where term = (select max(term) from course_catalog)";

  $result = mysqli_query($conn, $query);

  if (mysqli_num_rows($result) > 0) {
    // output data of each row
    $output =  array();
    $count = 0;
    $inserted = 0;
    while($row = mysqli_fetch_assoc($result)) {
      $term = (int)$row["term"] + 10;
      $rubric = $row["rubric"];
      $number = $row["number"];
      $course_title = str_replace("'","\'",$row["course_title"]);
      $credit_hour = $row["credit_hour"];
      $level = $row["level"];
      $insert_query = "insert into course_catalog(term,rubric,number,course_title,credit_hour,level) values(".$term.",'".$rubric."',".$number.",'".$course_title."',".$credit_hour.",".$level.")";
      if(mysqli_query($conn, $insert_query)){
        ++$inserted;
      }                         
      $term = "";
      $rubric = "";
      $number = "";
      $course_title = "";
      $credit_hour = "";
      $level = "";
      ++$count;
    }
    if($count == $inserted){
      echo "All $count Courses Inserted successfully!!";
    } else {
      echo "$inserted of $count Courses Inserted successfully!!";
    }
    
  }
    
?>