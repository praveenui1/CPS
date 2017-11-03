<?php
include "jsonFormat.php";
include "Helpers/SearchStudent.php";

$keyword = $_POST['q'];
// Checking if 'q' is sent though URL
if (!isset($keyword) || $keyword == "" ) {
    $resp = array(
        success => false,
        message => 'Pass the query parameter names q.'
        );
        
    print json_encode($resp);
    return;
}

$result = search($keyword);

print json_encode($result);
return;
?>
