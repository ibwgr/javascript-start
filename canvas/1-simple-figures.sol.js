const gameWidth = 400;
const gameHeight = 400;

const canvas = document.getElementById("game");
canvas.width = gameWidth;
canvas.height = gameHeight;
const ctx = canvas.getContext("2d");


/*
* Aufgabe 1
* */

function drawRect(x, y, width, height, fillColor, strokeColor){
    ctx.beginPath();
    ctx.rect(x, y, width, height);
    ctx.fillStyle = fillColor;
    ctx.strokeStyle = strokeColor;
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
}

function drawTriangle(x, y, width, height, fillColor, strokeColor){
    ctx.beginPath();
    ctx.fillStyle = fillColor;
    ctx.strokeStyle = strokeColor;
    ctx.moveTo(x, y);
    ctx.lineTo(x + width, y);
    ctx.lineTo(x + width / 2, y - height);
    ctx.lineTo(x, y);
    ctx.stroke();
    ctx.fill();
    ctx.closePath();
}

function drawCircle(x, y, radius, fillColor){
    const fullCircle = 2 * Math.PI;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, fullCircle);
    ctx.fillStyle = fillColor;
    ctx.fill();
    ctx.closePath();
}

// circle center
//drawCircle(gameWidth / 2, gameHeight / 2, 50, "green");

// rectangle left top
// drawRect(0, 0, 100, 100, "purple", "purple");

// triangle right bottom
const triangleWidth = 50;
const triangleHeight = 50;
const startX = gameWidth - triangleWidth; // 350
const startY = gameHeight;
// drawTriangle(startX, startY, triangleWidth, triangleHeight, "blue", "blue");


/*
* Aufgabe 2
* */

function drawTree(){
    drawRect(gameWidth / 2 - 10, gameHeight - 80, 20, 80, "brown")
    drawTriangle(gameWidth / 2 - 50, gameHeight - 80, 100, 40, "green")
    drawTriangle(gameWidth / 2 - 50, gameHeight - 110, 100, 40, "green")
    drawTriangle(gameWidth / 2 - 45, gameHeight - 130, 90, 40, "green")
    drawTriangle(gameWidth / 2 - 40, gameHeight - 140, 80, 40, "green")
    drawTriangle(gameWidth / 2 - 30, gameHeight - 150, 60, 40, "green")
}
// drawTree()


/*
Aufgaben

1. Erstelle die Funktionen drawCircle, drawRect, drawTriangle. Entscheide selbst welche Parameter die Funktionen haben.
   Zeichne damit die drei bestehenden Figuren.

2. Nutze die Funktionen aus Aufgabe 1 und zeichne damit:

a) einen Tannenbaum
b) was du willst :)


* */
