let circleX = 200
let circleY = 200
let circleRadius = 20
let points = 0
let width = 400
let height = 400

function setup() {
  createCanvas(width, height)
}

function draw(){
  background("beige")
  circle(circleX, circleY, circleRadius * 2)
  text("Score: " + points, 10, 20)
}

function mouseClicked(){
  const mouseToCenter = dist(mouseX, mouseY, circleX, circleY)
  const clickedInCircle = mouseToCenter < circleRadius
  if(clickedInCircle){
    points = points + 1
    clear()
    circleX = random(circleRadius, width-circleRadius)
    circleY = random(circleRadius, height-circleRadius)
  }
}