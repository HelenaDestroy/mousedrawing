let colorin = document.getElementById("rainbow");
let cuadrito = document.getElementById("area_dibujo");
cuadrito.addEventListener("mousedown", pressMouse);
cuadrito.addEventListener("mousemove", moveMouse);
cuadrito.addEventListener("mouseup", leaveMouse);
let papel = cuadrito.getContext("2d");
let estado = 0;
let x = 0;
let y= 0;

function pressMouse(evento)
{
    // guardar posición
estado = 1;
x = evento.clientX;
y = evento.clientY;
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
    papel.closePath();
}
function moveMouse (event)
{
    if (estado == 1) {
    const bounds = cuadrito.getBoundingClientRect();  //valor x e y cuando empieza el canvas.
   //dibuja línea desde posición guardada previamente a la posición actual.
    dibujarLinea(colorin.value, x - bounds.left, y - bounds.top, event.clientX - bounds.left, event.clientY - bounds.top, papel);
    //actualizar posición guardada con la actual.
    }
    // guarda posición en x e y ya con el mouse habiéndose movido
    x = event.clientX;
    y = event.clientY;
}

let button = 0;
const borrar = document.getElementById("botonBorrar");
borrar.addEventListener("click", canvasClear);

function canvasClear(){
button = 1;
if (button = 1){
papel.clearRect(0, 0, 300, 300);
}
}
