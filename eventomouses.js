document.getElementById("area_de_dibujo");
let cuadrito = document.getElementById("area_de_dibujo");
let papel = cuadrito.getContext("2d");
document.getElementById("rainbow");
document.getElementById("botoncito");
var colorin = document.getElementById("rainbow");
let x = 0;
let y = 0;
estado = 0;

area_de_dibujo.addEventListener("mousedown", pressMouse);
area_de_dibujo.addEventListener("mousemove", moveMouse);
area_de_dibujo.addEventListener("mouseup", leaveMouse);

function pressMouse(estado)
{
estado = 1;
x = papel.layerX;
y = papel.layerY;
}
function moveMouse (estado)
{ if (estado == 1) 
    {
    dibujarLinea(colorcito, x, y, papel.layerX, evento.layerY, papel);
    x = papel.layerX;
    y = papel.layerY;    
    colorcito = colorin.value;
    xfinal = papel.screenX + 0.5;
    yfinal = papel.screenY + 0.5;
    
    }
    else { leaveMouse();
   }
}

function leaveMouse(estado)
 {
    estado == 0;
 }
 
function dibujarLinea(colored,xinicial,yinicial, xfinal, yfinal, hoja)
{
    let colored = colorin.value;
    let cuadrito = document.getElementById("area_de_dibujo");
    let hoja = cuadrito.getContext("2d");
    hoja.beginPath();
    hoja.strokeStyle = color;
    hoja.lineWidth = 2;
    hoja.moveTo(xinicial, yinicial);
    hoja.lineTo(xfinal, yfinal);
    hoja.stroke();
    hoja.closePath;
    }
