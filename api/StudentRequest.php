<?php
include "jsonFormat.php";
include "Helpers/Request.php";

$keyword = $_POST['user_id'];
// Checking if 'user_id' is sent though URL
if (!isset($keyword) || $keyword == "" ) {
    $resp = array(
        success => false,
        message => 'Pass the user_id parameter.'
        );
        
    print json_encode($resp);
    return;
}

$result = getRequests($keyword);

print json_encode($result);
return;
?>
