const ps = []
let lineColor = 'white'

function setup() {
    createCanvas(400, 400)
    fill('white')
}

function draw(){
    background('black')

    let lastP = { x: -1, y: -1 }
    for(let p of ps){
        noStroke()
        circle(p.x, p.y, 5)
        if(lastP.x !== -1){
            stroke(lineColor)
            //stroke(p.color) // Zusatzaufgabe
            line(lastP.x, lastP.y, p.x, p.y)
        }
        lastP = p
    }
}

function mouseClicked(){
    ps.push({
        x: mouseX, 
        y: mouseY, 
        //color: lineColor // Zusatzaufgabe
    })
}

function keyPressed(){
    if(keyCode === BACKSPACE){
        ps.pop()
    }
}

// Zusatzaufgabe
function keyTyped(){
    if(key === 'y'){
        lineColor = 'yellow'
    }
    if(key === 'r'){
        lineColor = 'red'
    }
    if(key === 'g'){
        lineColor = 'green'
    }
}