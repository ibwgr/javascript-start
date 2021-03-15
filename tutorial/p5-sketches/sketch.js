let cc, bgColor
function setup() {
  cc = createCanvas(400, 400)
  cc.mousePressed(mousePressed)
  cc.mousePressed(mouseReleased)
  bgColor = 'grey'
  frameRate(6)
}

function draw() {
  background(bgColor)
}
function mousePressed(){
  bgColor = 'yellow'
}
function mouseReleased(){
  bgColor = 'grey'
}


/**
let c, bgColor
function setup() {
  c = createCanvas(400, 400)
  frameRate(6)
}

function draw() {
  if(mouseIsPressed){
    bgColor = 'yellow'
  }else{
    bgColor = 'grey'
  }
  background(bgColor)
}
 */
