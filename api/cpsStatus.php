<?php

include "jsonFormat.php";
include "Helpers/cpsStatus.php";



if( isset($_POST["timestamp"]) && isset($_POST["requestId"])  ){
    echo json_encode(cpsStatus($_POST["requestId"]), JSON_PRETTY_PRINT);
}

  
  
?>
