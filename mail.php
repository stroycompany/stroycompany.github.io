<?php

$name = $_POST['user-name'];
$phone = $_POST['tel'];
$msg = $_POST['comm'];
$token = "5575251598:AAGF84Vr_dmu8vVtdKU7TAskeTyup0W0BS0";
$chat_id = "-686986772";
$arr = array(
  'Имя пользователя: ' => $name,
  'Телефон: ' => $phone,
  'Сообщение:' => $msg
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

if ($sendToTelegram && $sendToTelegram2) {
  header('Location: thanks.html');
} else {
  echo "Error";
}
?>