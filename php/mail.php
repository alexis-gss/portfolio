<?php
    if(isset($_POST["sendMail"])){
        if(!empty($_POST['lastname']) AND !empty($_POST['firstname']) AND !empty($_POST['mail']) AND !empty($_POST['message'])){
            $to      = 'alexis.gousseau@orange.fr';
            $subject = 'CONTACT (alexis-gousseau.com) - ' . $_POST['lastname'] . ' ' . $_POST['firstname'];
            $lastname = $_POST['lastname'];
            $firstname = $_POST['firstname'];
            $mail = $_POST['mail'];
            $message = $_POST['message'];
            $headers = 'From: ' . $_POST['mail'] . "\r\n" .
            'Reply-To: ' . $_POST['mail'] . "\r\n" .
            'X-Mailer: PHP/' . phpversion();
            
            mail($to, $subject, $message, $headers);
            $msg = "Le mail a bien été envoyé !";
        }
        else{
            $msg = "Tous les champs doivent être complétés !";
        }
    }
?>