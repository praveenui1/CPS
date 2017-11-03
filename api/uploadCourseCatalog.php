<?php


include "Helpers/DataBase.php";

$term = "";

   $total_data = 0; $import_count = 0;

    $query = "select * from course_catalog where term = (select max(term) from course_catalog)";
        
    $result = mysqli_query($conn, $query);
        
    if (mysqli_num_rows($result) > 0) {          
        $row = mysqli_fetch_assoc($result);
        $term = $row["term"];
    }

    $term = (int)$term + 10;
    
    

        if(isset($_FILES['importfile'])){
            $target_dir = "uploads/";
            $target_file = $target_dir . basename($_FILES["importfile"]["name"]);

            $fileType = pathinfo($target_file,PATHINFO_EXTENSION);

            $uploadOk = 1;
            if($fileType != "csv" ) {
                echo "please upload a csv file";
                $uploadOk = 0;
            }

            if ($uploadOk != 0) {
                if (move_uploaded_file($_FILES["importfile"]["tmp_name"], $target_dir.'importfile.csv')) {

                    // Checking file exists or not
                    $target_file = $target_dir . 'importfile.csv';
                    $fileexists = 0;
                    if (file_exists($target_file)) {
                        $fileexists = 1;
                    }
                    if ($fileexists == 1 ) {

                        // Reading file
                        $file = fopen($target_file,"r");
                        $i = 0;
                        $fg = 0;
                        $importData_arr = array();
                        $titlesArray = array();
                        while(! feof($file)) {

                            foreach((array)fgetcsv($file) as $key=>$value){
                                if($fg == 0){
                                    $titlesArray[$key] = $value;
                                } else{
                                    $importData_arr[$i][$titlesArray[$key]] = $value;
                                }
                                
                            }
                            ++$fg;
                            
                            if($fg == 1){
                                if($titlesArray[0] != "RUBRIC" || $titlesArray[1] != "NUMBER" || $titlesArray[2] != "COURSE_TITLE" || $titlesArray[3] != "CREDIT_HOUR" || $titlesArray[4] != "LEVEL"){
                                    echo "Invalid File Structure";
                                    exit();
                                }
                        
                              ++$fg;    
                            }
                            
                            $i++;
                        }
                        
                        //print_r($importData_arr);
                        
                        fclose($file);
                        
                        
                        // insert import data
                        
                        $cq = 0;
                        $cr = 0;
                        
                        foreach($importData_arr as $data){
                            
                                
                                $rubric = $data[$titlesArray[0]]; 
                                $number = $data[$titlesArray[1]];
                                $course_title = str_replace("'","\'",$data[$titlesArray[2]]);
                                $credit_hour = $data[$titlesArray[3]];
                                $level = $data[$titlesArray[4]];

                                // Insert record
                                $insert_query = "insert into course_catalog(term,rubric,number,course_title,credit_hour,level) values(".$term.",'".$rubric."',".$number.",'".$course_title."',".$credit_hour.",".$level.")";
                                if(mysqli_query($conn,$insert_query)){
                                    ++$cr;
                                } else {
                                    echo $insert_query.";\n";
                                }
                                ++$cq;
                                
                            
                        }
                        
                        if($cq == $cr){
                            echo "All $cr Courses Inserted successfully!!";
                        } else {
                            echo "$cr of $cq Courses Inserted successfully!!";
                        }
                        
                        
                        $newtargetfile = $target_file;
                        if (file_exists($newtargetfile)) {
                            unlink($newtargetfile);
                        }
                    }
                }
            }
        } else {
            echo "No File";
        }

?>