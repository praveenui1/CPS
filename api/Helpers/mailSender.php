<?php
require_once('php-ews/ExchangeWebServices.php');
require_once('php-ews/NTLMSoapClient.php');
require_once('php-ews/NTLMSoapClient/Exchange.php');
require_once('php-ews/EWS_Exception.php');
require_once('php-ews/EWSType.php');

require_once('php-ews/EWSType/MessageType.php');
require_once('php-ews/EWSType/EmailAddressType.php');
require_once('php-ews/EWSType/BodyType.php');
require_once('php-ews/EWSType/SingleRecipientType.php');
require_once('php-ews/EWSType/CreateItemType.php');
require_once('php-ews/EWSType/NonEmptyArrayOfAllItemsType.php');
require_once('php-ews/EWSType/ItemType.php');

class EwsSendEmail
{
    function __construct()
    {
       
    }
    
    
    function sendEmail($receiverId,$requestId)
    {
        
        $server = 'webmail.uhcl.edu';
        
        // change all this details from line 31 to line 35
        
        $fromMailName = "Gopinath Nelluri";
        $fromMailID = "NelluriG6365@uhcl.edu";
        
        $username = 'pclab/NelluriG6365';
        $password = 'Ch0wd@ry'; // webmail password
        
        // change above details before running this project
        
        
        $mainMessage = $this -> getMessage($requestId);
        $testMessage = "<center> <div class='OnlineCPS' style='min-width:300px;font-family: Arial, Helvetica, sans-serif;font-weight: normal;'> <div class='OnlineCPSHeader' style='background:#1C90F3;border: 2px solid #1C90F3;min-width:90vw;text-align: center;display: table;position:relative;'> <div style='display: table-cell;vertical-align: middle;color:white;'> <h2> Online CPS Notification </h2> </div> </div> <div class='OnlineCPSBody' style='background:white;min-width:90vw;text-align: center;display: table;border: 2px dashed #f69c55;position:relative;top:10px;'> <div style='display: table-cell;vertical-align: middle;'> <br/> <div class='OnlineCPSMrssage'> $mainMessage </div> <br/>  </div> </div> </div> </center>";
        
        //$testMessage = $this -> getMessage($requestId);
        
        $ews = new ExchangeWebServices($server, $username, $password);

        $msg = new EWSType_MessageType();
        
        $toUserData = $this -> getUserData($receiverId);
        
        $toAddresses = array();
        $toAddresses[0] = new EWSType_EmailAddressType();
        
        $toAddresses[0]->EmailAddress = $toUserData["user_email"];
        $toAddresses[0]->Name = $toUserData["user_first_name"]+($toUserData["user_last_name"] == "" ? "": (" "+$toUserData["user_last_name"]) );
        
        
        

        $msg->ToRecipients = $toAddresses;
        
        $fromAddress = new EWSType_EmailAddressType();
        $fromAddress->EmailAddress = $fromMailID;
        $fromAddress->Name = $fromMailName;

        $msg->From = new EWSType_SingleRecipientType();
        $msg->From->Mailbox = $fromAddress;
        
        $msg->Subject = "Online CPS Notification";
        
        
        
        
        $msg->Body = new EWSType_BodyType();
        $msg->Body->BodyType = 'HTML';
        $msg->Body->_ = $testMessage;
        
        
        $msgRequest = new EWSType_CreateItemType();
        $msgRequest->Items = new EWSType_NonEmptyArrayOfAllItemsType();
        $msgRequest->Items->Message = $msg;
        $msgRequest->MessageDisposition = 'SendAndSaveCopy';
        $msgRequest->MessageDispositionSpecified = true;
                
        $response = $ews->CreateItem($msgRequest);

    }
    
    protected function getUserData($toId){
        include "DBConnect.php";
        $query = "SELECT * FROM user WHERE user_id = $toId";
  
        $result = mysqli_query($conn, $query);
        
        if (mysqli_num_rows($result) > 0) {
        
            if($row = mysqli_fetch_assoc($result)) {
                return $row;
            } else {
                return Array(); 
            }
            
        } else {
            return Array();
        }
          
         
        mysqli_close($conn);
    }
    
    
    protected function getMessage($requestId){
        include "DBConnect.php";
        $query = "SELECT * FROM request WHERE rId = $requestId";
  
        $result = mysqli_query($conn, $query);
        
        if (mysqli_num_rows($result) > 0) {
        
            if($row = mysqli_fetch_assoc($result)) {
                $rid = $row["rId"];
                $fapproved = $row["faculty_approved"];
                $aapproved = $row["acad_advisor_approved"];
                $raisedBy = $row["raisedBy"];
                
                $rmessage = "";
                
                $fapprovedMessage = "";
                $aapprovedMessage = "";
                if($fapproved == "1" ){
                    $fapprovedMessage = "is approved by Faculty Advisor";
                } else if($fapproved == "-1" ){
                    $fapprovedMessage = "is rejected by Faculty Advisor";
                } else if($fapproved = "0" && $raisedBy != "2"){
                    $fapprovedMessage = "is yet to approved by faculty advisor";
                } else if($fapproved = "0" && $raisedBy == "2"){
                    $fapprovedMessage = "needs no approval by faculty advisor";
                } else {
                    $fapprovedMessage = "is yet to approved by faculty advisor";
                }
                
                if($raisedBy == "2" ){
                    $rmessage = "CPS change request with <b>Request ID: $requestId</b> is raised by Academic Advisor";
                } else if($raisedBy == "3" ){
                    $rmessage = "CPS change request with <b>Request ID: $requestId</b> is raised by Faculty Advisor";
                } else if($raisedBy == "4" ){
                    $rmessage = "CPS change request with <b>Request ID: $requestId</b> is raised by student";
                }
                
                if($aapproved == "1" ){
                    $aapprovedMessage = "approved by Academic Advisor";
                } else if($aapproved == "-1" ){
                    $aapprovedMessage = "rejected by Academic Advisor";
                } else if($aapproved = "0" && $fapproved == "-1" ){
                    $aapprovedMessage = "can not be approved by Academic Advisor";
                } else if($aapproved = "0" && $fapproved == "1" ){
                    $aapprovedMessage = "yet to approved by Academic advisor";
                } else if($aapproved = "0" && $fapproved == "0" ){
                    $aapprovedMessage = "then forwarder to Academic advisor for approval";
                } else {
                    $aapprovedMessage = " and need Academic advisor to approve";
                }
                
                
                return $rmessage." which ".$fapprovedMessage." and ".$aapprovedMessage;
            } else {
                return "Notification Failed..!"; 
            }
            
        } else {
             return "Notification Failed..!"; 
        }
          
         
        mysqli_close($conn);
    }
    
    
}

//$mail = new EwsSendEmail();
//$mail -> sendEmail("1455396","198");

?>