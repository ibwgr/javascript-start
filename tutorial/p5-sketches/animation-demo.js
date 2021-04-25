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
  r = r+1
  r = Math.min(r, rMax)
  circle(50, 50, r)
}
