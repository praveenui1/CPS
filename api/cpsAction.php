<?php

include "jsonFormat.php";
include "Helpers/cpsAction.php";

  
if( isset($_POST["timestamp"]) && isset($_POST["rid"]) && isset($_POST["action"]) ){
    echo cpsAction($_POST["rid"],$_POST["action"],$_POST["timestamp"]);
}
  
  
  
?>
