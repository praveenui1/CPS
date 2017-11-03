<?php

include "jsonFormat.php";
include "Helpers/createElectiveRequest.php";

if( isset($_POST["requestTime"]) && isset($_POST["requestId"]) && isset($_POST["electiveYear"]) && isset($_POST["electiveSubject"]) && isset($_POST["electiveCategory"])){
  //echo json_encode(createElectiveRequest($_POST["requestId"],$_POST["electiveYear"],$_POST["electiveSubject"],$_POST["electiveCategory"]), JSON_PRETTY_PRINT);
  echo createElectiveRequest($_POST["requestId"],$_POST["electiveYear"],$_POST["electiveSubject"],$_POST["electiveCategory"]);
}


?>