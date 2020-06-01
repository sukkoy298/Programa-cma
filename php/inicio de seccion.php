<?php
include ('Conexion.php');
$usuario = $_POST['user'];
$password = $_POST['pass'];
$direccion_carpeta = "Location:http://localhost/Programa-cma-master/";
$direcciones;
    $seguridad = explode("=" ,$usuario);
    $seguridadPass = explode("=",$password);
    if($seguridad[2] || $seguridadPass[2]){
        echo "<h2> que crees que haces? , tas bien? </2>";
    }else{
        if(!empty($usuario) && !empty($password)){
        $encuesta = "SELECT Status FROM users WHERE Usering = '$usuario' AND  Password = '$password'";
        $campo = 'Status';
        $area = query($encuesta, $campo);      
            if ($area == "nothing") {
            echo "<h2> Usuario o contraseña incorrectos </h2>";
            }else{
            $encuesta ="SELECT direcc FROM direcciones_archivos WHERE nivel = '$area'";
            $campo = 'direcc';
            $direcciones = query($encuesta, $campo);      
                if ($direcciones) {   
                header($direccion_carpeta . $direcciones);
                }elseif(!$direcciones){
                    echo "<h2> Usuario o contraseña incorrectos </h2>";
                }
            }
        }else{
        echo'que haces ';
        }
    }
?>
