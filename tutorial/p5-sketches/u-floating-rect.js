let left = 0
function setup() {
    createCanvas(200, 200)
}
  
function draw(){
    background('beige')
    fill('red')
    left = left + 1
    rect(left, height/2-50/2, 50, 50)
}