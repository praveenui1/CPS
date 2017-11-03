<?php

include "jsonFormat.php";
include "Helpers/createRequest.php";



if( isset($_POST["requestTime"]) && isset($_POST["sid"]) ){
  echo json_encode(createRequestWithSid($_POST["requestTime"],$_POST["sid"]), JSON_PRETTY_PRINT);
  //echo createRequest($_POST["requestTime"]);
}else if( isset($_POST["requestTime"]) ){
  echo json_encode(createRequest($_POST["requestTime"]), JSON_PRETTY_PRINT);
  //echo createRequest($_POST["requestTime"]);
}


?>
