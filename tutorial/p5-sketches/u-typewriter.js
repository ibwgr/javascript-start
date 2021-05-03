let x = 0
let y = 10
const charWidth = 10
let lineIdx = 0
let charCount = 0

function setup() {
    createCanvas(200, 200)
    background('beige')
}

function keyTyped(){
    text(key, x, y)
    charCount = charCount + 1
    lineIdx = floor((charCount * charWidth) / width) + 1
    x = (x + charWidth) % width
    y = lineIdx * charWidth
}