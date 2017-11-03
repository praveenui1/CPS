<?php

include "jsonFormat.php";
include "Helpers/cpsChange.php";


//echo json_encode(cpsChange(), JSON_PRETTY_PRINT);
  
if( isset($_POST["timestamp"]) && isset($_POST["requestId"])  ){
    echo json_encode(cpsChange($_POST["requestId"]), JSON_PRETTY_PRINT);
}

  
  
?>
