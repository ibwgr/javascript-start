const lineHeight = 20
const charWidth = 10
let x = 0
let y = lineHeight
let lineNr = 0
let charCount = 0

function setup() {
    createCanvas(200, 200)
    background('white')
    textFont('Courier New')
}

function keyTyped(){
    text(key, x, y)
    charCount = charCount + 1
    const textWidth = charCount * charWidth
    lineNr = floor(textWidth / width) + 1
    x = (x + charWidth) % width
    y = lineNr * lineHeight
}