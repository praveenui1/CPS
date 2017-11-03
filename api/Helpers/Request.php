<?php

//header('Content-Type: application/json');
//echo json_encode(getRequests("1455396"), JSON_PRETTY_PRINT);
//This is just for testing purpose uncomment above two lines and check this url
//https://cps-nellurigopinath.c9users.io/api/Helpers/Request.php

function getRequests($user_id) {
    include "DataBase.php";
    
    
     if($_SESSION["loginStatus"] != true || ($_SESSION["designation"] != "faculty" && $_SESSION["designation"] != "advisor")){
        exit();
      } 
      
    $query = "SELECT * FROM request where sId = $user_id order by rId desc";
    
    if($_SESSION["designation"] == "faculty") {
        $query = "SELECT *,faculty_approved as approvedStatus FROM request where sId = $user_id order by rId desc";
    } else if ($_SESSION["designation"] == "advisor") {
        $query = "SELECT *,acad_advisor_approved as approvedStatus FROM request where sId = $user_id order by rId desc";
    }
    
    $result = mysqli_query($conn, $query);
    
    $search_results = array();
    if (mysqli_num_rows($result) > 0) {
        // output data of each row
        while($row = mysqli_fetch_assoc($result)) {
             array_push($search_results,$row);
        }
        
        return $search_results;
    } else {
        $resp = array(
            success => false,
            message =>  'Sorry no results'
            );
        return $resp;
    }

}

?>
