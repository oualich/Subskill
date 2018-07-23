<?php

include '../serveur/database.php';

$nom = $_POST['nom'];

$prenom = $_POST['prenom'];

$email = $_POST['email'];

$password = $_POST['password'];

$naissance = $_POST['naissance'];

$cp = $_POST['cp'];

$genre = $_POST['genre'];


if (isset($_POST['nom'])) {

    $query = "INSERT INTO `users` (`id`, `nom`, `prenom`, `email`, `naissance`, `cp`, `genre`, `password`) 
    VALUES (NULL, '$nom', '$prenom', '$email', '$naissance', '$cp', '$genre', MD5('".$password."'))";
    $resultat = mysql_query($query, $conn);

echo "enregistrement validé !";
include 'mail.php';
}


?>