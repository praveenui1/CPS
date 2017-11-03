<?php

function yearList(){
  include "DBConnect.php";
  echo "";
  $query = "select * from term tm where tm.year >= ".(date('Y')-2)." and tm.year <= ".(date('Y')+2)." order by term_id DESC";

  $result = mysqli_query($conn, $query);

  if (mysqli_num_rows($result) > 0) {
    // output data of each row
    $output =  array();
    $set = array();
    $last = -1;

    while($row = mysqli_fetch_assoc($result)) {


      array_push($output,$row);
    }
    //echo json_encode($output, JSON_PRETTY_PRINT);
    return $output;
  } else {
    echo "{}";
  }
  mysqli_close($conn);
}

?>
