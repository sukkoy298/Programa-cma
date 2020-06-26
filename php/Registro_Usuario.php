<?php
include('Conexion.php');
$Usuario = $_POST['usuario1'];
$Password = $_POST['password'];
$Status = $_POST['zona'];
$insertar = "INSERT INTO users(Usering, Password, Status) VALUES('$Usuario', '$Password', '$Status')";
 AddIndatabase($insertar); 
 echo 'Registrado'; 
?>