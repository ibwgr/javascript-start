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
    console.log('drew rect', ...arguments)
}

function drawCircle(x, y, radius, fillColor){
    ctx.beginPath();
    const fullCircle = 2 * Math.PI;
    ctx.arc(x, y, radius, fullCircle, 0, Math.PI);
    ctx.fillStyle = fillColor;
    ctx.fill();
    ctx.closePath();
    console.log('drew circle', ...arguments)
}

function isIntersect(point, obj) {
    if(obj.type === 'circle'){
        return Math.sqrt((point.x-obj.x) ** 2 + (point.y - obj.y) ** 2) < obj.radius;
    }
    if(obj.type === 'rect'){
        let hor = point.x > obj.x && point.x < obj.x + obj.w;
        let ver = point.y > obj.y && point.y < obj.y + obj.h;
        return hor && ver;
    }
}

const objects = [
    {
        type: 'circle',
        x: (gameWidth / 2) - 5,
        y: (gameHeight / 2) - 5,
        radius: 10,
        fillColor: "#00FF00"
    },
    {
        type: 'rect',
        x: 0,
        y: 0,
        w: 150,
        h: 150,
        fillColor: "#FF0000"
    }
]

function draw(){
    ctx.clearRect(0, 0, gameWidth, gameHeight)
    for(let obj of objects){
        if(!obj.hit){
            if(obj.type === 'circle'){
                drawCircle(obj.x, obj.y, obj.radius, obj.fillColor)
            }
            if(obj.type === 'rect'){
                drawRect(obj.x, obj.y, obj.w, obj.h, obj.fillColor);
            }
        }
    }
}

canvas.addEventListener('click', (e) => {
    const point = {
        x: e.clientX - canvas.offsetLeft,
        y: e.clientY - canvas.offsetTop
    }

    let anyHit = false
    for(let obj of objects){
        if (isIntersect(point, obj) === true) {
            console.log('clicked', obj)
            obj.hit = true
            anyHit = true
            window.requestAnimationFrame(draw)
        }
    }

    if(!anyHit){
        console.log('almost …', point)
    }
});

window.requestAnimationFrame(draw)
