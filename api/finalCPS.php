<?php

include "jsonFormat.php";
include "Helpers/finalCPS.php";

//print_r($_POST);


if( isset($_POST["timestamp"]) && isset($_POST["sid"])){
  echo json_encode(finalCPSWithSid($_POST["sid"]), JSON_PRETTY_PRINT);
}else if( isset($_POST["timestamp"]) ){
  echo json_encode(finalCPS(), JSON_PRETTY_PRINT);
}

?>
