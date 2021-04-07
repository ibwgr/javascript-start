let clicks = 0
let bgColor = "beige"

function setup() {
  createCanvas(400, 100)
}

function draw(){
  background(bgColor)
  text("Clicks: " + clicks, 10, 20)
}

function mouseClicked(){
  clicks = clicks + 1
  bgColor = color(random(0, 256), random(0, 256), random(0, 256))
}
