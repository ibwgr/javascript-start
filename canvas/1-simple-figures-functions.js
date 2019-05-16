const gameWidth = 400;
const gameHeight = 400;

const canvas = document.getElementById("game");
canvas.width = gameWidth;
canvas.height = gameHeight;
const ctx = canvas.getContext("2d");

function drawRect(x, y, w, h, fillColor, strokeColor){
    ctx.beginPath();
    ctx.rect(x, y, w, h);
    ctx.fillStyle = fillColor;
    ctx.strokeStyle = strokeColor;
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
}

function clearAll(){
    ctx.clearRect(0, 0, gameWidth, gameHeight);
}

// Beispiel:
// drawRect(0, 0, 100, 100, "red", "white");


// Aufgabe 1
// Zeichne einen quadratischen Raster mit 9 Quadraten.


// Aufgabe 2
// Nutze das ganze Farbspektrum, um jeder Kachel eine andere Farbe zu geben.