<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title></title>
    </head>
    <body>
        <?php
        header("Content-Type: text/html; charset=utf-8");
$to = "ma.jedlicka@gmail.com";
$extra = "From: $_POST[email]\r\nReply-To: $_POST[email]\r\n";
$subject = "Kontakt od ".$_POST['jmeno']."";
$mess = "Jméno: ".$_POST['jmeno']."\nEmail: ".$_POST['email']."\nText:\n".$_POST['zprava']."";
if(empty($_POST['jmeno'])||empty($_POST['zprava'])|| empty($_POST['email']) ||!ereg("^.+@.+\..+$", $_POST['email'])) {
echo "<script>alert('Špatně zadané údaje, zkuste to prosím znovu.');</script>";
echo "<p>Váš e-mail se <strong>nepodařilo odeslat</strong>. Pravděpodobně jste nevyplnili všechny údaje.</p>"; 

exit();
}
else{
$succes = mb_send_mail($to, $subject, $mess, $extra);
if($succes){
echo "<script>alert('Zpráva byla úspěšně odeslána na můj email. Přeji pěkný den.');</script>";
echo "<p><strong>Váš e-mail byl úspěšně odeslán</strong>.</p>"; 

}else{
echo "<script>alert('Nastala chyba, zkuste nás kontaktovat na e-mail: ma.jedlicka@gmail.com');</script>"; } }
print "<meta http-equiv=\"refresh\" content=\"0;URL=index.html#kontakt\">";
exit();

        ?>
    </body>
</html>
