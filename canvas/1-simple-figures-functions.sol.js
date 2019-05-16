const gameWidth = 400;
const gameHeight = 400;

const canvas = document.getElementById("game");
canvas.width = gameWidth;
canvas.height = gameHeight;
const ctx = canvas.getContext("2d");

function drawRect(x, y, w, h, fillColor, strokeColor) {
    ctx.beginPath();
    ctx.rect(x, y, w, h);
    ctx.fillStyle = fillColor;
    ctx.strokeStyle = strokeColor;
    ctx.stroke();
    ctx.fill();
    ctx.closePath();
}

function clearAll() {
    ctx.clearRect(0, 0, gameWidth, gameHeight);
}

// Beispiel:
// drawRect(0, 0, 100, 100, "red");


// Aufgabe 1
// Zeichne einen quadratischen Raster mit 9 Quadraten.

// Schritt 1
const sideLength = 3;
const cellWidth = gameWidth / sideLength;
const cellHeight = gameHeight / sideLength;

drawRect(0, 0, cellWidth, cellHeight, "green", "white");
drawRect(cellWidth, 0, cellWidth, cellHeight, "green", "white");
drawRect(2 * cellWidth, 0, cellWidth, cellHeight, "green", "white");

drawRect(0, cellHeight, cellWidth, cellHeight, "green", "white");
drawRect(cellWidth, cellHeight, cellWidth, cellHeight, "green", "white");
drawRect(2 * cellWidth, cellHeight, cellWidth, cellHeight, "green", "white");

drawRect(0, 2 * cellHeight, cellWidth, cellHeight, "green", "white");
drawRect(cellWidth, 2 * cellHeight, cellWidth, cellHeight, "green", "white");
drawRect(2 * cellWidth, 2 * cellHeight, cellWidth, cellHeight, "green", "white");

// Schritt 2
clearAll();

for (let row = 0; row < 3; row++) {
    for (let col = 0; col < 3; col++) {
        drawRect(col * cellWidth, row * cellHeight, cellWidth, cellHeight, "green", "white")
    }
}


// Aufgabe 2
// Nutze das ganze Farbspektrum, um jeder Kachel eine andere Farbe zu geben.
clearAll();

let cellNumber = 0
for (let row = 0; row < sideLength; row++) {
    for (let col = 0; col < sideLength; col++) {
        let color = `hsl(${360 / (sideLength ** 2) * cellNumber} ,100%, 50%)`;
        drawRect(col * cellWidth, row * cellHeight, cellWidth, cellHeight, color, "white")
        cellNumber++
    }
}