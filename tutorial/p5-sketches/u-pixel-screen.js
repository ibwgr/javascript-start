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
        min(9, round(random(width/gridSize)))*gridSize, 
        min(9, round(random(height/gridSize)))*gridSize, 
        gridSize, gridSize)
}