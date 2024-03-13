<?php
$name = $_post['name'];
$visitor_email = $_post['email'];
$message = $_post['message'];

$email_from = 'ashikmail2747@gmail.com';

$email_subject = 'New Form Submission';

$email_body = "User Name: $name.\n".
             "User Email: $visitor_email.\n".
             "User Message: $message\n";

 $to = "aashiquiashik2747@gmail.com";

 $headers = "From: $email_from \r\n";

 $headers = "Replay-To: $visitor_email \r\n";

 mail($to,$email_subject,$email_body,$headers);

 header("Location :index.html");
?>