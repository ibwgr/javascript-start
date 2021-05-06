const gridSize = 20

function setup() {
  createCanvas(200, 200)
  background('beige')
  frameRate(4)
  noStroke() 
}

function draw() {
  fill('red')
  const xs = width / gridSize
  const ys = height / gridSize
  // Zusatzaufgabe: fill(random(255),random(255), random(255))
  rect(
    min(round(xs - 1), round(random(xs))) * gridSize,
    min(round(ys - 1), round(random(ys))) * gridSize,
    gridSize, gridSize)
}