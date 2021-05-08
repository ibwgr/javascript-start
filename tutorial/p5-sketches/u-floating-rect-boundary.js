let left = 0
let change = 1
function setup() {
    createCanvas(200, 200)
}
  
function draw(){
    background('beige')
    fill('red')
    left = min(200 - 50, left + change)
    
    // 1. activate to stop at right border
    rect(left, height/2 - 50/2, 50, 50)

    // 2. activate to bounce endlessly
    // if(left >= 200 - 50){
    //     change = -1
    // } else if (left <= 0){
    //     change = 1
    // }
}