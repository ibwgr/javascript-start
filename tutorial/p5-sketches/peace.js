function setup() {
  createCanvas(200, 200)
  background('beige')
  fill('beige')
  strokeWeight(8)

  const centerX = width/2
  const centerY = height/2
  const r = 75
  const leftAngle = 140
  const rightAngle = 40

  circle(centerX, centerY, r*2)
  translate(centerX, centerY)

  line(0, 0-r, 0, 0)
  line(0, 0, r * Math.cos(leftAngle*Math.PI/180), r * Math.sin(leftAngle*Math.PI/180))
  line(0, 0, r * Math.cos(rightAngle*Math.PI/180), r * Math.sin(rightAngle*Math.PI/180))
}