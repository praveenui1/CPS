<?php

include "jsonFormat.php";
include "Helpers/myNotification.php";


  echo json_encode(myNotification(), JSON_PRETTY_PRINT);
  
?>