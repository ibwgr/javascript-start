let rMax = 95
let r = 0

function setup() {
  // einmal ausgeführt
  createCanvas(100, 100)
  fill("black")
  background("beige")
}

function draw(){
  // wiederholt ausgeführt
  r = min(rMax, r+1)
  circle(50, 50, r)
}
