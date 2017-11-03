<?php

include "jsonFormat.php";
include "Helpers/GetFCourses.php";

if(isset($_POST["sid"])){
    getFCoursesWithSid($_POST["sid"]);
}
else{
    getFCourses();
}


?>
