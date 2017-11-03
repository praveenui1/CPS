<?php

include "jsonFormat.php";
include "Helpers/createCoreRequest.php";

if( isset($_POST["requestTime"]) && isset($_POST["requestId"]) && isset($_POST["coreYear"]) && isset($_POST["coreRubric"]) && isset($_POST["coreNumber"]) && isset($_POST["rowNo"]) ){
  //echo json_encode(createCoreRequest($_POST["requestId"],$_POST["coreYear"],$_POST["coreRubric"],$_POST["coreNumber"]), JSON_PRETTY_PRINT);
  echo createCoreRequest($_POST["requestId"],$_POST["coreYear"],$_POST["coreRubric"],$_POST["coreNumber"],$_POST["rowNo"]);
}


?>