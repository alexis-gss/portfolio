<?php
    if(empty($_POST['lang'])){
        $_POST['lang'] = 'fr';
    };
    if ($_POST['lang']=='fr') {           // si la langue est 'fr' (français) on inclut le fichier fr-lang.php
        include('lang/fr-lang.php');
    } 
    else if ($_POST['lang']=='en') {      // si la langue est 'en' (anglais) on inclut le fichier en-lang.php
        include('lang/en-lang.php');
    }
?>