<?php
session_start();
  class User{
     var $loginStatus;
     var $loginId;
     var $designation;

     public function authenticate($username,$password){
        include "DBConnect.php";
       
        $query = "select * from user where user_name = '$username' and user_password = '$password'";
        
          $result = mysqli_query($conn, $query);
        
          if (mysqli_num_rows($result) > 0) {
              
            $row = mysqli_fetch_assoc($result);
            $loginStatus = "true";
            $loginId = $row["user_id"];
            $designation = "";
            $type = $row["user_type"];
            if($type=="1"){
                $designation =  "admin"; //Admin
            } else if ($type == "2"){
                $designation = "advisor"; //Acadamic Advisor
            } else if ($type == "3"){
                $designation = "faculty"; //Faculty Advisor
            } else if ($type == "4"){
                $designation = "student"; //Student
            } else {
                $designation = "unkown"; //invalid type of user
            }
            
          } else {
              
                $loginStatus = "false";
                $loginId = -1;
                $designation = "unkown";
          }
       
       $array = array(
          "loginStatus" => $loginStatus,
          "loginId" => $loginId,
          "designation" => $designation,
       );
       $_SESSION["loginStatus"] = $loginStatus;
       $_SESSION["loginId"] = $loginId;
       $_SESSION["designation"] = $designation;
  
       return $array;
     }

    

     public function nodata(){

         $loginStatus = "false";
         $loginId = -1;
         $designation = "unkown";


       $array = array(
          "loginStatus" => $loginStatus,
          "loginId" => $loginId,
          "designation" => $designation,
       );
       $_SESSION["loginStatus"] = $loginStatus;
       $_SESSION["loginId"] = $loginId;
       $_SESSION["designation"] = $designation;
       return $array;

     }
  }
?>
