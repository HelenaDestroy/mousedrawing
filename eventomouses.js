const cuadrito = document.getElementById("area_de_dibujo");
const papel = cuadrito.getContext("2d");
document.getElementById("rainbow");
document.getElementById("botoncito");
let colorin = document.getElementById("rainbow");
estado = false;

papel.addEventListener("mousedown", pressMouse);
papel.addEventListener("mousemove", moveMouse);
papel.addEventListener("mouseup", leaveMouse);

function leaveMouse(estado)
 {
    estado == 0;
 }

function pressMouse(estado)
{
estado == 1;
}
function moveMouse (estado)
{ if (estado == 1) 
    {
    dibujarLinea(colorcito, x, y, xfinal, yfinal, papel);
   let x = papel.screenX;
    let y = papel.screenY;    
    colorcito = colorin.value;
   let xfinal = papel.screenX + 0.5;
    let yfinal = papel.screenY + 0.5;
        }
    else { leaveMouse();
   }
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
    hoja.closePath();
    }
