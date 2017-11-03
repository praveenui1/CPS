<?php

include "jsonFormat.php";
include "Helpers/Electives.php";

if( isset($_POST["term"]) && isset($_POST["dept"]) && isset($_POST["min"]) && isset($_POST["max"]) && isset($_POST["category"]) && isset($_POST["sid"]) ){
  echo json_encode(electiveSubWithSid($_POST["term"],$_POST["dept"],$_POST["min"],$_POST["max"],$_POST["category"],$_POST["sid"]), JSON_PRETTY_PRINT);
} else if( isset($_POST["term"]) && isset($_POST["dept"]) && isset($_POST["min"]) && isset($_POST["max"]) && isset($_POST["category"]) ){
  echo json_encode(electiveSub($_POST["term"],$_POST["dept"],$_POST["min"],$_POST["max"],$_POST["category"]), JSON_PRETTY_PRINT);
}


?>
