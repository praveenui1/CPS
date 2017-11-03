<?php

//header('Content-Type: application/json');
//echo json_encode(search("1455396"), JSON_PRETTY_PRINT);
//This is just for testing purpose uncomment above two lines and check this url
//https://cps-nellurigopinath.c9users.io/api/Helpers/SearchStudent.php

function search($keyword) {
    include "DBConnect.php";
    
    $query = "SELECT * FROM user where (LOWER(user_first_name) like LOWER('%$keyword%') 
        or LOWER(user_last_name) like lower('%$keyword%') or user_id like '$keyword') AND user_type = 4";
    // $query = "SELECT * FROM user";
    // print $query;
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
