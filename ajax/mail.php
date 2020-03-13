<?php
  $email = $_POST['email'];
  $email = $_POST['name'];
  $email = $_POST['tel'];
  $email = $_POST['files'];
  $email = $_POST['message'];

  $subject = "=?utf-8?b?".base64_encode("Сообщение с сайта")."?=";
  $headers = "From: $email\r\nReply-to: $email\r\nContent-type: text/html; charset=utf-8\r\n";


  $success = mail("admin@gmail.com", $subject, $message, $headers);
  echo $success
?>