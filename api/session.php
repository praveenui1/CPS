<?php
include "jsonFormat.php";
session_start();
if ($_SESSION != null ){
  $data = array(
      "loginStatus" => $_SESSION["loginStatus"],
      "loginId" =>  $_SESSION["loginId"],
      "designation" => $_SESSION["designation"],
    );
} else {
  $data = array(
      "loginStatus" => "false",
      "loginId" =>  -1,
      "designation" => "unkown",
    );
}
echo json_encode($data, JSON_PRETTY_PRINT);
?>
