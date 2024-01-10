<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['field1'];
    $email = $_POST['field2'];
    $subject = $_POST['field3'];
    $message = $_POST['field5'];

    // Recipient email
    $to = 'blaise_maz@hotmail.com';

    // Headers
    $headers = "From: " . $email . "\r\n";
    $headers .= "Reply-To: ". $email . "\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/html; charset=UTF-8\r\n";

    // Sending email
    if(mail($to, $subject, $message, $headers)){
        echo 'Your mail has been sent successfully.';
    } else{
        echo 'Unable to send email. Please try again.';
    }
}
?>
