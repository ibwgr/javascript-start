let x = 0
let y = 10
const space = 10
let line = 0
let count = 0

function setup() {
    createCanvas(200, 200)
    background('beige')
}

function draw(){
}

function keyTyped(){
    text(key, x, y)
    count = count + 1
    line = Math.floor((count*space) / width) + 1
    x = (x + space) % width
    y = line * space
}