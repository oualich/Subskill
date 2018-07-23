<?php

$dbhost = 'localhost';
$dbuser = 'root';
$dbpass = 'root';

$conn = mysql_connect($dbhost, $dbuser, $dbpass);
mysql_set_charset('utf8',$conn);

if(!$conn) {
  die('Connexion interrompue: ' . mysql_error());
}

mysql_select_db('subskill');
mysql_set_charset('utf8mb4'); 
// echo 'Current PHP version: '. Phpversion();



?>