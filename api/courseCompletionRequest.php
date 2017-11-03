<?php

include "jsonFormat.php";
include "Helpers/courseCompletionRequest.php";

if( isset($_POST["requestTime"]) && isset($_POST["requestId"]) && isset($_POST["ccYear"]) && isset($_POST["ccSub"]) && isset($_POST["ccNo"])){
  //echo json_encode(createCoreRequest($_POST["requestId"],$_POST["coreYear"],$_POST["coreRubric"],$_POST["coreNumber"]), JSON_PRETTY_PRINT);
  echo courseCompletionRequest($_POST["requestId"],$_POST["ccNo"],$_POST["ccYear"],$_POST["ccSub"]);
}


?>