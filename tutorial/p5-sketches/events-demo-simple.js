let clicks = 0

function setup() {
  createCanvas(200, 100)
}

function draw(){
  background("beige")
  text("Clicks: " + clicks, 10, 20)
}

function mouseClicked(){
  clicks = clicks + 1
}
