const gridSize = 20
const width = 400
const numberOfLines = (width / gridSize) - 1

function setup() {
  createCanvas(width, width)
  background('beige')
  noStroke()
  background('black')
  frameRate(10)
}

function draw(){
  let x = round(random(numberOfLines)) * gridSize
  let y = round(random(numberOfLines)) * gridSize
  let red = random(255)
  let green = random(255)
  let blue = random(255)
  fill(red, green, blue)
  rect(x, y, gridSize, gridSize)
}