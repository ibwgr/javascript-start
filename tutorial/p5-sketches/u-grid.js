const parts = 10

function setup() {
    createCanvas(200, 200)
    background('beige')
    stroke('black')

    const linesTotal = 200 / parts

    // vertical grid lines
    let lineNo = 1
    let x = 0
    while(lineNo < parts){
        x = x + linesTotal
        line(x, 0, x, 200)
        lineNo = lineNo + 1
    }

    // horizontal grid lines
    lineNo = 1
    let y = 0
    while(lineNo < parts){
        y = y + linesTotal
        line(0, y, 200, y)
        lineNo = lineNo + 1
    }

    // horizontal numbers
    let col = 1
    let nr = 0
    let textX = 0
    while(col <= parts){
        col = col + 1
        nr = nr + 1
        textX = textX + linesTotal
        text(nr, textX - 15, 15)
    }

    // vertical numbers
    let row = 2
    nr = 1
    let textY = linesTotal
    while(row <= parts){
        row = row + 1
        nr = nr + 1
        textY = textY + linesTotal
        text(nr, 5, textY - 5)
    }
}