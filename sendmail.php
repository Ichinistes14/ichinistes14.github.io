<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;

require "vendor/autoload.php";

if (!array_key_exists('name', $_GET)) {
    echo "no data";
    return;
}

$to = "contact@jonathandevlin.site";
$name = $_GET['name'];
$email = $_GET['email'];
$message = $_GET['message'];
$subject = $_GET['subject'];

$mail = new PHPMailer(true);

$mail->SMTPDebug = SMTP::DEBUG_SERVER;

$mail->isSMTP();
$mail->SMTPAuth = true;

$mail->Host = "smtp-fr.securemail.pro";
$mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
$mail->Port = 465;

$mail->Username = "fromwcontact@jonathandevlin.site";
$mail->Password = "Fromcontact1*$";

$mail->setFrom($email, $name);
$mail->addAddress("contact@jonathandevlin.site", "Jonathan Devlin");

$mail->Subject = $subject;
$mail->Body = $message;

$mail->send();

echo "mail send";

?>
