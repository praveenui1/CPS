<?php

include "jsonFormat.php";
include "Helpers/createFoundationRequest.php";

if( isset($_POST["requestTime"]) && isset($_POST["requestId"]) && isset($_POST["foundationYear"]) && isset($_POST["foundationCourse"]) && isset($_POST["rowNo"]) ){
  //echo json_encode(createFoundationRequest($_POST["requestId"],$_POST["foundationYear"],$_POST["foundationCourse"]), JSON_PRETTY_PRINT);
  echo createFoundationRequest($_POST["requestId"],$_POST["foundationYear"],$_POST["foundationCourse"], $_POST["rowNo"]);
}


?>
