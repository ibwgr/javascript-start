let circleX = 250
let circleY = 250
let circleRadius = 20
let circleFillColor = 'black'
let points = 0
let width = 500
let height = 500
let ellapsedFrames = 0

function setup() {
  createCanvas(width, height)
  frameRate(60)
}

function draw(){
  ellapsedFrames = ellapsedFrames + 1
  const ellapsedSeconds = ellapsedFrames / 60
  if(ellapsedSeconds > 0.6){
    ellapsedFrames = 0
    calcRandomPosition()
  }

  background("beige")
  fill(circleFillColor)
  noStroke()
  circle(circleX, circleY, circleRadius * 2)
  fill('black')
  text("Score: " + points, 10, 20)
}

function mouseClicked(){
  const mouseToCenter = dist(mouseX, mouseY, circleX, circleY)
  const clickedInCircle = mouseToCenter < circleRadius
  if(clickedInCircle){
    ellapsedFrames = 0
    points = points + 1
    clear()
    circleRadius = random(10, 50)
    calcRandomPosition()
    circleFillColor = color(random(0, 256), random(0, 256), random(0, 256))
  } else {
    points = max(0, points - 1)
  }
}

function calcRandomPosition(){
  circleX = random(circleRadius, width - circleRadius)
  circleY = random(circleRadius, height - circleRadius)
}