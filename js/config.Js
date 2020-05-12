/*acciones de configuraciones*/
var configurar = document.getElementById("Logo");
var btncambiar = document.getElementById("btn2");
/*datos iniciales */
var color;
var borde;
var bordesSuperior;
var valoresIniciales = [];/*por si el usuario desea cancelar los cambios*/
var tipografias = ["","\"sans-serif\"","\"Arial\"" ];/*tipografias a disposicion*/
valoresIniciales[0] = document.getElementById("color_Fondo").value;
valoresIniciales[1] = document.getElementById("Color_Bordes").value;
valoresIniciales[2] = document.getElementById("Color_Borde_superior").value;
/*objetos a cambiar*/
  var tLetras = document.getElementById("prueba_Tipografia");/*esto es un label*/
  var letrasT = document.getElementById("TLetra");/*esto es la lista tama;os*/
  var tipografia = document.getElementById("Tipografia");/*la lista de la tipografia*/
  var seleccion = document.getElementById("muestra");/*este el boton pruebas*/
  var pruebasFondo = document.getElementById("FondoPrueba");/**este es el fondo de configuraciones*/

/*al inciar la pagina*/
window.addEventListener("load", function(){
for (var i = 12; i < 23; i++) {
var t = document.createElement("option");/*creo la opcion de la lista*/
t.value = i;/*le doy un valor*/
  var texto = document.createTextNode(i);/*un texto*/
  t.appendChild(texto);/*agrego el texto a la option*/
letrasT.appendChild(t);/*agrego la option a el select*/
}
/*lo mismo de arriba pero con tipografias*/
for (var i = 1; i <= 2; i++) {
var t = document.createElement("option");
t.value = tipografias[i];
  var texto = document.createTextNode(tipografias[i]);
  t.appendChild(texto);
tipografia.appendChild(t);
}
});
  /*entrada y salida de configuraciones*/
configurar.addEventListener("click", function(){
Opacacion.classList.add("activo");
});

function salir_configuraciones(){
pruebasFondo.style.backgroundColor = valoresIniciales[0];
seleccion.style.borderColor = valoresIniciales[1];
seleccion.style.borderTopColor = valoresIniciales[2];

document.getElementById("color_Fondo").value = valoresIniciales[0];
document.getElementById("Color_Bordes").value = valoresIniciales[1];
document.getElementById("Color_Borde_superior").value = valoresIniciales[2];
 btncambiar.disabled = true;
  Opacacion.classList.remove("activo");
}
function realizarCambios(){
  if (color != undefined ) {
    document.body.style.backgroundColor = color;
  }
if (borde != undefined) {
var x = 1
var btn = document.getElementById("btn" + x);
  while (btn != undefined) {
    btn.style.borderColor = borde;
    x ++;
    btn = document.getElementById("btn" + x);
  }
}
/*********************************************************************/
if (bordesSuperior != undefined){
  var x = 1
  var btn = document.getElementById("btn" + x);
    while (btn != undefined) {
      btn.style.borderTopColor = bordesSuperior;
      x ++;
      btn = document.getElementById("btn" + x);
    }
}
/*********************************************************************/
if (letrasT.value != undefined){
  var x = 1
  var btn = document.getElementById("btn" + x);
    while (btn != undefined) {
      btn.style.fontSize = letrasT.value;
      x ++;
      btn = document.getElementById("btn" + x);
    }
     /*este esta orientado a tablas, y sus elementos*/
     var y = 0;/*este sera el controlador de los 3 siguientes whiles*/ 
     var filaTablauno = document.getElementById("filaUno" + y);
     var filaTablados = document.getElementById("textfile" + y);
     var filaTablatres = document.getElementById("filaTres" + y);
       while ( filaTablauno != undefined) {
       filaTablauno.style.fontSize = letrasT.value;
         y ++;
      filaTablauno = document.getElementById("filaUno" + y);
       }
       /*separacion, esta es para textfiles*/
       y = 0;
         while ( filaTablados != undefined) {
         filaTablados.style.fontSize = letrasT.value;
           y ++;
        filaTablados = document.getElementById("textfile" + y);
         }
          y = 0;
          /*separacion, esta es para labels o tablas*/ 
           while ( filaTablatres != undefined) {
           filaTablatres.style.fontSize = letrasT.value;
             y ++;
          filaTablatres = document.getElementById("filaTres" + y);
           }
           /*este apartado es para todo tipo de texto(etiquetas)*/
      var z = 0;
      var labels = document.getElementById("label" + z);
      while ( labels != undefined) {
      labels.style.fontSize = letrasT.value;
        z ++;
     labels = document.getElementById("label" + z);
      }
}
/*********************************************************************/
if (tipografia.value != undefined) {
  var x = 1; 
  var btn = document.getElementById("btn" + x);
    while (btn != undefined) {
      btn.style.fontFamily = tipografia.value;
      x ++;
      btn = document.getElementById("btn" + x);
    }
    /*este esta orientado a tablas, y sus elementos*/
    var y = 0;/*este sera el controlador de los 3 siguientes whiles*/ 
    var filaTablauno = document.getElementById("filaUno" + y);
    var filaTablados = document.getElementById("textfile" + y);
    var filaTablatres = document.getElementById("filaTres" + y);
      while ( filaTablauno != undefined) {
      filaTablauno.style.fontFamily = tipografia.value;
        y ++;
     filaTablauno = document.getElementById("filaUno" + y);
      }
      /*separacion, esta es para textfiles*/
      y = 0;
        while ( filaTablados != undefined) {
        filaTablados.style.fontFamily = tipografia.value;
          y ++;
       filaTablados = document.getElementById("textfile" + y);
        }
         y = 0;
         /*separacion, esta es para labels o tablas*/ 
          while ( filaTablatres != undefined) {
          filaTablatres.style.fontFamily =tipografia.value;
            y ++;
         filaTablatres = document.getElementById("filaTres" + y);
          }
          /*este apartado es para todo tipo de texto(etiquetas)*/
      var z = 0;
      var labels = document.getElementById("label" + z);
      while ( labels != undefined) {
      labels.style.fontFamily = tipografia.value;
        z ++;
     labels = document.getElementById("label" + z);
      }
}
Opacacion.classList.remove("activo");
}
/*cambios*/
function colorfondo(){
color = document.getElementById("color_Fondo").value;
pruebasFondo.style.backgroundColor = color;
btncambiar.disabled = false;
}
function cambiarBorde(){
  borde = document.getElementById("Color_Bordes").value;
 seleccion.style.borderColor = borde;
 btncambiar.disabled = false;
}
function cambiarBordeSuperior(){
  bordesSuperior = document.getElementById("Color_Borde_superior").value;
 seleccion.style.borderTopColor = bordesSuperior;
 btncambiar.disabled = false;
}

letrasT.addEventListener("change", function(){
tLetras.style.fontSize = letrasT.value;
btncambiar.disabled = false;
});

tipografia.addEventListener("change", function(){
tLetras.style.fontFamily = tipografia.value;
btncambiar.disabled = false;
});
