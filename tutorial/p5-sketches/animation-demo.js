let rStart = 0
let rMax = 40
let r = rStart
let change = 1

function setup() {
  createCanvas(100, 100)
  fill("black")
}

function draw(){
  background("beige")
  if(r >= rMax){
    change = -1
  }
  if(r <= rStart){
    change = 1
  }
  r = r + change
  circle(50, 50, r)
}
