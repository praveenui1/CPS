<?php

include "jsonFormat.php";
include "Helpers/yearList.php";
/*
if( isset($_POST["term"]) && isset($_POST["dept"]) && isset($_POST["min"]) && isset($_POST["max"]) ){
  echo json_encode(electiveSub($_POST["term"],$_POST["dept"],$_POST["min"],$_POST["max"]), JSON_PRETTY_PRINT);
}
*/
echo json_encode(yearList(), JSON_PRETTY_PRINT);


?>
