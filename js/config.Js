var btncambiar = document.getElementById("btn2");
  var valorPropiedad = [];
  var letrasT = document.getElementById("TLetra");/*tamaño de las letras,(no es optimo usar Ñ)*/
  var tipografia = document.getElementById("Tipografia");
  var valoresIniciales = ["#E0E0E0", "#009245", "#614385", 14,"\"sans-serif\""];/*por si el usuario desea cancelar los cambios*/
  var tipografias = ["","\"sans-serif\"","\"Arial\"" ];/*tipografias a disposicion*/
function colorfondo(valor){
  valorPropiedad[0] = valor;
  $('#FondoPrueba').css({'background-color': valorPropiedad[0]});
  btncambiar.disabled = false;
}
function cambiarBorde(valor){
  valorPropiedad[1] = valor;
  $('#muestra').css({'border-color':valorPropiedad[1]});
  btncambiar.disabled = false;
}
function cambiarBordeSuperior(valor){
  valorPropiedad[2] = valor; 
  $('#muestra').css({'border-top-color':valorPropiedad[2]});
  btncambiar.disabled = false;
}
letrasT.addEventListener("change", function(){
  valorPropiedad[3] = letrasT.value; 
  $('#prueba_Tipografia').css({'font-size':valorPropiedad[3]});
  btncambiar.disabled = false;
});
  tipografia.addEventListener("change", function(){
  valorPropiedad[4] = tipografia.value;
  $('#prueba_Tipografia').css({'font-family':valorPropiedad[4]});
  btncambiar.disabled = false;
});
window.addEventListener("load", function(){
  for (var i = 12; i < 23; i++) {
    var size = document.createElement("option");/*creo la opcion de la lista*/
    size.value = i;/*le doy un valor*/
    var texto = document.createTextNode(i);/*un texto*/
    size.appendChild(texto);/*agrego el texto a la option*/
    letrasT.appendChild(size);/*agrego la option a el select*/
  }
  for (var i = 1; i <= 2; i++) {
    var tipo = document.createElement("option");
    tipo.value = tipografias[i];
    var texto = document.createTextNode(tipografias[i]);
    tipo.appendChild(texto);
    tipografia.appendChild(tipo);
  }
});
$('#Logo').click(function(){
  Opacacion.classList.add("activo");
});
function realizarCambios(){
  /* 0 = background, 1 = border color , 2 = borderTopColor, 3 = fontSize, 4 = fontFamily*/ 
  document.body.style.backgroundColor = valorPropiedad[0];
  if (valorPropiedad[1] != undefined){
    $('.btn').css({'border-color': valorPropiedad[1]});  
  } 
  if (valorPropiedad[2] != undefined){
    $('.btn').css({'border-top-color': valorPropiedad[2]});
  }   
  if (valorPropiedad[3] != undefined){
    $('input').css({'font-size': valorPropiedad[3]});
    $('label').css({'font-size': valorPropiedad[3]});
    $('th').css({'font-size': valorPropiedad[3]});
  }  
  if (valorPropiedad[4] != undefined){
    $('input').css({'font-family': valorPropiedad[4]});
    $('label').css({'font-family': valorPropiedad[4]});
    $('th').css({'font-family': valorPropiedad[4]}); 
  }  
  btncambiar.disabled = true;
  Opacacion.classList.remove("activo");
}
function salir_configuraciones(){
  color.value = valoresIniciales[0];
  borde.value = valoresIniciales[1];
  bordesSuperior.value = valoresIniciales[2];
  colorfondo();
  cambiarBorde();
  cambiarBordeSuperior();
  btncambiar.disabled = true;
  $('.activo').removeClass('activo');
}
