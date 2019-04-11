const gameWidth = 400;
const gameHeight = 400;

const canvas = document.getElementById("game");
canvas.width = gameWidth;
canvas.height = gameHeight;
const ctx = canvas.getContext("2d");

function drawRect(x, y, w, h, fillColor){
    ctx.beginPath();
    ctx.rect(x, y, w, h);
    ctx.fillStyle = fillColor;
    ctx.fill();
    ctx.closePath();
}
// rectangle left top
drawRect(0, 0, 100, 100, "#FF0000");

// circle center
ctx.beginPath();
const fullCircle = 2 * Math.PI;
ctx.arc((gameWidth / 2) - 5, (gameHeight / 2) - 5, 10, 0, fullCircle);
ctx.fillStyle = "#00FF00";
ctx.fill();
ctx.closePath();

// triangle right bottom
ctx.beginPath();
ctx.strokeStyle = "#0000FF";
ctx.fillStyle = "#0000FF";
const triangleWidth = 50;
const triangleHeight = 50;
const startX = gameWidth - triangleWidth; // 350
ctx.moveTo(startX, gameHeight);
ctx.lineTo(startX + triangleWidth, gameHeight);
ctx.lineTo(startX + triangleWidth / 2, gameHeight - triangleHeight);
ctx.lineTo(startX, gameHeight);
ctx.stroke();
ctx.fill();
ctx.closePath();