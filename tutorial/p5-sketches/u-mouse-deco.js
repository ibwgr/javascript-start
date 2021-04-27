function setup() {
    createCanvas(200, 200)
    background('beige')
    noCursor()
}
  
function draw(){
    
}

function mouseMoved(){
    background('beige')
    noStroke()
    fill('red')
    circle(mouseX, mouseY, 10, 10)
}