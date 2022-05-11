let colorin = document.getElementById("rainbow");

let x = 0;
let y = 0;
let estado = 0;
document.getElementById("area_dibujo");
let cuadrito = document.getElementById("area_dibujo");
let papel = cuadrito.getContext("2d");

cuadrito.addEventListener("mousedown", pressMouse);
cuadrito.addEventListener("mousemove", moveMouse);
cuadrito.addEventListener("mouseup", leaveMouse);
function pressMouse(evento)
{
estado = 1;
x = evento.layerX;
y = evento.layerY;
}
function leaveMouse(evento)
 {
    estado = 0;
 }
function dibujarLinea(color,xi,yi, xf, yf, papel)
{
    papel.beginPath();
    papel.strokeStyle = color;
    papel.lineWidth = 2;
    papel.moveTo(xi, yi);
    papel.lineTo(xf, yf);
    papel.stroke();
    papel.closePath;
}
function moveMouse (evento)
{ if (estado == 1) {
dibujarLinea(colorin.value, x, y, evento.layerX, evento.layerY, papel);
x = 0.1;
y = 0.1;
}
else { 
x = evento.layerX;
y = evento.layerY;
}
}


