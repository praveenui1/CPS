<?php
$DBservername = "dcm.uhcl.edu";
$DBusername = "caps17g25";
$DBpassword = "7517089";
$DBname = "caps17g25";

// Create connection
$conn = mysqli_connect($DBservername, $DBusername, $DBpassword, $DBname);
// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}
?>
