<?php
function course_catalog(){
  include "DataBase.php";
  $query = "SELECT * from course_catalog where rubric = 'CSCI' and term = (SELECT max(term) FROM course_catalog)";
  $result = mysqli_query($conn, $query);

  if (mysqli_num_rows($result) > 0) {
    // output data of each row
    $output =  array();
    while($row = mysqli_fetch_assoc($result)) {
      array_push($output,$row);
    }
    echo json_encode($output, JSON_PRETTY_PRINT);
  } else {
    echo "0 results";
  }
  mysqli_close($conn);
}

?>
