<?php

include "jsonFormat.php";
include "Helpers/studentNotification.php";


  echo json_encode(studentNotification(), JSON_PRETTY_PRINT);
  
?>