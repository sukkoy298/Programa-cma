<?php
include ('Conexion.php');
$encuesta = 'SELECT ID_Num FROM facturas';
$conectar = mysqli_query($conexion,$encuesta);
while ($resultado = mysqli_fetch_array($conectar)) {
  $ID_Factura = $resultado['ID_Num']; 
}
if (is_numeric($ID_Factura)) {
    echo $ID_Factura + 1;
}else {
  echo 1;
}
?>
