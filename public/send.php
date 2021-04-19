<?php
// Файлы phpmailer
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';
// Переменные, которые отправляет пользователь
$name = $_POST['name'];
$tel = $_POST['tel'];
$mail = new PHPMailer\PHPMailer\PHPMailer();
try {
    $msg = "ok";
    $mail->isSMTP();   
    $mail->CharSet = "UTF-8";                                          
    $mail->SMTPAuth   = true;
    // Настройки вашей почты
    $mail->Host       = 'smtp.gmail.com'; // SMTP сервера GMAIL
    $mail->Username   = 'fundament561740@gmail.com'; // Логин на почте
    $mail->Password   = 'VflfufcrfH561740'; // Пароль на почте
    $mail->SMTPSecure = 'ssl';
    $mail->Port       = 465;
    $mail->setFrom('fundament561740@gmail.com', 'Zakaz s sayta'); // Адрес самой почты и имя отправителя
    // Получатель письма
    $mail->addAddress('fundamentgomel@gmail.com');  
    $mail->addAddress('puxa561740@gmail.com'); // Ещё один, если нужен
    // Прикрипление файлов к письму
        // -----------------------
        // Само письмо
        // -----------------------
        $mail->isHTML(true);
    
        $mail->Subject = 'Письмо от клиента сайта';
        $mail->Body    = "<b>Имя:</b> $name <br>
        <b>Почта:</b> $tel";
// Проверяем отравленность сообщения
if ($mail->send()) {
    echo "$msg";
} else {
echo "Сообщение не было отправлено. Неверно указаны настройки вашей почты";
}
} catch (Exception $e) {
    echo "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}