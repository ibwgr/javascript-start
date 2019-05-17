// Code für https://editor.p5js.org/
function setup() {
    createCanvas(400, 400)
}

function draw() {
    background("beige")
    line(200, 0, 200, 50)
    fill("red")
    circle(200, 50, 10)

    line(200, 60, 200, 140)
    fill("green")
    circle(200, 140, 20)

    line(200,160, 200, 290)
    fill("blue")
    circle(200, 280, 30)
}