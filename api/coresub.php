<?php

include "jsonFormat.php";
include "Helpers/CoreSubjects.php";

if(isset($_POST["sid"])){
    core_subjectsWithSid($_POST["sid"]);
}
else{
    core_subjects();
}


?>
