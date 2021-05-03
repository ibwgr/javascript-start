const parts = 10

function setup() {
    createCanvas(200, 200)
    background('black')
    stroke('white')

    const linesTotal = 200 / parts
    let lineNo = 1
    let x = 0
    while(lineNo < parts){
        if((lineNo - 1) % 2 === 0){
            strokeWeight(2)
        }else {
            strokeWeight(1)
        }
        x = x + linesTotal
        line(x, 0, x, 200)
        lineNo = lineNo + 1
    }
}