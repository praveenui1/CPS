<?php
include "jsonFormat.php";
include "Helpers/User.php";
$user = new User;
if(isset($_GET["username"]) && isset($_GET["password"])){
  echo json_encode($user -> authenticate($_GET["username"],$_GET["password"]), JSON_PRETTY_PRINT);
} else if(isset($_POST["userName"]) && isset($_POST["passWord"])){
  echo json_encode($user -> authenticate($_POST["userName"],$_POST["passWord"]), JSON_PRETTY_PRINT);
} else if(isset($_POST["username"]) && isset($_POST["password"])){
  echo json_encode($user -> authenticate($_POST["username"],$_POST["password"]), JSON_PRETTY_PRINT);
} else {
  echo json_encode($user -> nodata(), JSON_PRETTY_PRINT);
}
?>
