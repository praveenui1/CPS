<?php

include "jsonFormat.php";
include "Helpers/notificationSeen.php";

if(isset($_POST["nid"])){

  echo notificationSeen($_POST["nid"]);
}
?>