function setup() {
  createCanvas(400, 400)
  background('beige')
  
  let i = 0
  while(i < 10){
    drawSmiley(
    	random(40, width - 40), 
	    random(40, width - 40))
    i = i + 1
  }

  drawSmiley(width / 2, width / 2)
}

function drawSmiley(x, y){
  stroke('black')
  fill('yellow')
  circle(x, y, 40)
  fill('black')
  circle(x - 7, y - 7, 10)
  circle(x + 7, y - 7, 10)
  ellipse(x, y + 10, 20, 10)
}