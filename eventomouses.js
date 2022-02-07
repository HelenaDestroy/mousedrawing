document.getElementById("area_de_dibujo");
var cuadrito = document.getElementById("area_de_dibujo");
var papel = cuadrito.getContext("2d");
document.getElementById("rainbow");
document.getElementById("botoncito");
botoncito.addEventListener("click", aviso);
var colorin = document.getElementById("rainbow");
var x = 0;
var y = 0;
estado = 0;

function aviso()
{     alert("Color " + colorin.value + " seleccionado.");  }   

area_de_dibujo.addEventListener("mousedown", pressMouse);
area_de_dibujo.addEventListener("mousemove", moveMouse);
area_de_dibujo.addEventListener("mouseup", leaveMouse);

function pressMouse(evento)
{
estado = 1;
var x = evento.layerX;
var y = evento.layerY;
}
function moveMouse (evento)
{ if (estado == 1) {
dibujarLinea(colorin.value, x, y, evento.layerX, evento.layerY, papel);
x = evento.layerX + 0,5;
y = evento.layerY + 0,5;
}
else { 
  x = evento.layerX;
  y = evento.layerY;
}
}

function leaveMouse(evento)
 {
    estado = 0;
 }
 
function dibujarLinea(color,xinicial,yinicial, xfinal, yfinal, papel)
{
    var color = colorin.value;
    var cuadrito = document.getElementById("area_de_dibujo");
    var papel = cuadrito.getContext("2d");
    papel.beginPath();
    papel.strokeStyle = color;
    papel.lineWidth = 2;
    papel.moveTo(xinicial, yinicial);
    papel.lineTo(xfinal, yfinal);
    papel.stroke();
    papel.closePath;
    }