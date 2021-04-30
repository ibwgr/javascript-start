const gridSize = 20

function setup() {
    createCanvas(200, 200)
    background('beige')
    frameRate(4)
}
  
function draw(){
    fill('red')
    // Zusatzaufgabe: fill(random(255),random(255), random(255))
    rect(
        Math.min(9, Math.round(random(width/gridSize)))*gridSize, 
        Math.min(9, Math.round(random(height/gridSize)))*gridSize, 
        gridSize, gridSize)
}