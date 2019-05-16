const gameWidth = 400;
const gameHeight = 400;

const canvas = document.getElementById("game");
canvas.width = gameWidth;
canvas.height = gameHeight;
const ctx = canvas.getContext("2d");
const log = console.log;

let color = "black";
let strokeWith = 4;

canvas.addEventListener('mousemove', function(ev){
    if(ev.buttons > 0){
        ctx.beginPath();
        const fullCircle = 2 * Math.PI;
        ctx.arc(ev.offsetX, ev.offsetY, strokeWith, 0, fullCircle);
        ctx.fillStyle = color;
        ctx.fill();
        ctx.closePath();
    }
});

document.getElementById('black').addEventListener('click', function(){
   color = "black";
});

document.getElementById('red').addEventListener('click', function(){
    color = "red";
});