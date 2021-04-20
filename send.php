<?php
// Файлы phpmailer
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';
// Переменные, которые отправляет пользователь

$name = "не определено";
$tel= "не определено";
if(isset($_GET["user_name"])){
  
    $name = $_GET["user_name"];
}
if(isset($_GET["tel"])){
  
    $tel = $_GET["tel"];
}


// Формирование самого письма
$title = "Письмо от клиента сайта";
$body = "
<h2>Письмо от клиента $name</h2>
<b>Имя:</b> $name<br>
<b>Телефон:</b> $tel<br><br>";

// Настройки PHPMailer
$mail = new PHPMailer\PHPMailer\PHPMailer();
try {
    $msg = "ok";
    $mail->isSMTP();   
    $mail->CharSet = "UTF-8";                                          
    $mail->SMTPAuth   = true;

    // Настройки вашей почты
    $mail->Host       = 'smtp.gmail.com'; // SMTP сервера GMAIL
    $mail->Username   = 'fundament561740@gmail.com'; // Логин на почте
    $mail->Password   = 'gnljitwnzjbnnape'; // Пароль на почте
    $mail->SMTPSecure = 'ssl';
    $mail->Port       = 465;
    $mail->setFrom('fundament561740@gmail.com', 'Zakaz s sayta'); // Адрес самой почты и имя отправителя
    // Получатель письма
    $mail->addAddress('fundamentgomel@gmail.com');
        // -----------------------
        // Само письмо
        // -----------------------
        $mail->isHTML(true);
        $mail->Subject = $title;
        $mail->Body    = $body;
// Проверяем отравленность сообщения
    if ($mail->send()) {
        $reg = $name; 
        echo var_dump($_POST);
    } else {
    echo "Сообщение не было отправлено. Неверно указаны настройки вашей почты";
    }
} catch (Exception $e) {
    echo "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}

// Отображение результата
// echo json_encode(["result" => $result, "resultfile" => $rfile, "status" => $status]);