let left = 0
function setup() {
    createCanvas(300, 150)
    frameRate(6)
// Zusatzaufgabe    
// }

// function draw(){
    background('skyblue')
    
    drawHouse()

    drawWindow(20, 25, 90)
    drawWindow(10, 25, 30)
    drawWindow(20, 70, 30)
    drawWindow(20, 70, 90)

    let x = 101
    while(x < 300){
        drawWeed(x)
        x = x + 2
    }
}

function drawWeed(x){
    const colors = ['lightgreen', 'green']
    const zeroOrOne = floor(random(0, 10)) % 2
    stroke(colors[zeroOrOne])
    line(x, height, x + random(1, 5), height - random(7, 15))
}

function drawHouse(){
    const houseHeight = 110
    const houseWidth = 60
    fill('beige')
    noStroke()
    rect(20, height - houseHeight, 20 + houseWidth, houseHeight)
}

function drawWindow(size, x, aboveGround){
    fill('lightgrey')
    stroke('brown')
    strokeWeight(3)
    rect(x, height - aboveGround, size, size)
    strokeWeight(1)
    line(x + size / 2, height - aboveGround, x + size / 2, height - (aboveGround - size))
    line(x, height - (aboveGround - size / 2), x + size, height - (aboveGround - size / 2))
}