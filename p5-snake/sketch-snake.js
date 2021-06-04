const snake = []
const gridSize = 10

const steps = [
    {x: 1, y: 0}, { x: 1, y: 0}, {x:1, y:0},
    {x: 0, y: -1} ]

// Task 4 - 3 Schritte nach rechts, einen nach oben
/*
function setup() {
    createCanvas(400, 400)
    frameRate(1)
    
    drawForm()

    // [Kopf, Körper, ... , Schwanz]
    snake.push(
    {
        x: 6,
        y: 5
    },
    {
        x: 5,
        y: 5
    },
    {
        x: 4,
        y: 5
    })
}

function draw(){
    // Solange noch Schritte vorhanden sind:
    // Den nächsten Schritt lesen und damit die Schlange bewegen
    if(steps.length > 0){
        const step = steps.shift()
        background(bgColorInput.value())
        move(snake, step)
        drawSnake(snake)
    }
}

function drawSnake(parts){
    for(let part of parts){
        fill(snakeColorInput.value())
        rect(part.x * gridSize, part.y * gridSize, gridSize, gridSize)
    }
}

function move(parts, direction){
    const head = {
        x: parts[0].x + direction.x, 
        y: parts[0].y + direction.y
    }
    // kopf an index 0 einfügen
    parts.unshift(head)
    // schwanz löschen
    parts.pop()
}

function drawForm(){
    const div = createDiv()
    div.position(40, 30)

    bgColorInput = createColorPicker('beige')
    bgColorInput.size(35)
    const bgColorP = createP()
    bgColorP.child(createDiv("Hintergrundfarbe"))
    bgColorP.child(bgColorInput)
    div.child(bgColorP)

    snakeColorInput = createColorPicker('black')
    snakeColorInput.size(35)
    const snakeColorP = createP()
    snakeColorP.child(createDiv("Schlangenfarbe"))
    snakeColorP.child(snakeColorInput)
    div.child(snakeColorP)
}
*/

///////////////////////////////////////////////////////////


// Task 3 - Ein Schritt nach rechts
/*
let bgColorInput
let snakeColorInput

function setup() {
    createCanvas(400, 400)
    
    drawForm()

    // [Kopf, Körper, ... , Schwanz]
    snake.push({
        x: 1,
        y: 0
    },
    {
        x: 0,
        y: 0
    })

    // Schlange an Startposition zeichnen (x und y verändern sich nicht)
    background(bgColorInput.value())
    move(snake, { x: 0, y: 0 })
    drawSnake(snake)

    // Schlange eines nach rechts bewegen (x + 1)
    background(bgColorInput.value())
    move(snake, { x: 1, y: 0 })
    drawSnake(snake)
}

function drawSnake(parts){
    for(let part of parts){
        fill(snakeColorInput.value())
        rect(part.x * gridSize, part.y * gridSize, gridSize, gridSize)
    }
}

function move(parts, direction){
    for(let part of parts){
        // Die ganze Schlange um x und y verschieben
        // z.B. eins nach rechts, falls direction.x = 1
        part.x = part.x + direction.x
        part.y = part.y + direction.y
    }
}

function drawForm(){
    const div = createDiv()
    div.position(40, 30)

    bgColorInput = createColorPicker('beige')
    bgColorInput.size(35)
    const bgColorP = createP()
    bgColorP.child(createDiv("Hintergrundfarbe"))
    bgColorP.child(bgColorInput)
    div.child(bgColorP)

    snakeColorInput = createColorPicker('black')
    snakeColorInput.size(35)
    const snakeColorP = createP()
    snakeColorP.child(createDiv("Schlangenfarbe"))
    snakeColorP.child(snakeColorInput)
    div.child(snakeColorP)
}
*/

/////////////////////////////////////////////////////////////////////


// Task 2 - Formulare für Schlangen- und Spielbrettfarbe
/*
let bgColorInput
let snakeColorInput

function setup() {
    createCanvas(400, 400)

    drawForm()

    // Schlange als Array von Formen mit x und y Koordinaten abbilden
    // [Kopf, Körper, ... , Schwanz]
    snake.push({
        x: gridSize * 3, // Kopf ist eins rechts vom Schwanz (x + 1)
        y: gridSize * 2
    },
    {
        x: gridSize * 2,
        y: gridSize * 2
    })
}

function draw(){
    background(bgColorInput.value())
    drawSnake(snake)
}

function drawSnake(parts){
    for(let part of parts){
        fill(snakeColorInput.value())
        rect(part.x, part.y, gridSize, gridSize)
    }
}

function drawForm(){
    const div = createDiv()
    div.position(40, 30)

    bgColorInput = createColorPicker('beige')
    bgColorInput.size(35)
    const bgColorP = createP()
    bgColorP.child(createDiv("Hintergrundfarbe"))
    bgColorP.child(bgColorInput)
    div.child(bgColorP)

    snakeColorInput = createColorPicker('black')
    snakeColorInput.size(35)
    const snakeColorP = createP()
    snakeColorP.child(createDiv("Schlangenfarbe"))
    snakeColorP.child(snakeColorInput)
    div.child(snakeColorP)
}
*/

////////////////////////////////////////////////////////////////


// Task 1 - Zeichne Schlange
/*
function setup() {
    createCanvas(400, 400)
    background('beige')

    // Schlange als Array von Formen mit x und y Koordinaten abbilden
    // [Kopf, Körper, ... , Schwanz]
    snake.push({
        x: gridSize * 3, // Kopf ist eins rechts vom Schwanz (x + 1)
        y: gridSize * 2
    },
    {
        x: gridSize * 2,
        y: gridSize * 2
    })
    
    drawSnake(snake)
}

function drawSnake(parts){
    for(let part of parts){
        fill('black')
        rect(part.x, part.y, gridSize, gridSize)
    }
}
*/