// Verwende "Go Live" um diesen sketch im Browser laufen zu lassen.

let bgColorInput
let snakeColorInput
let gridSize = 30
let gameOver = false
const snake = [
    {
        x: 1,
        y: 0
    },
    {
        x: 2,
        y: 0
    }
]
const direction = {
    x: 1,
    y: 0
}

function setup(){
    createCanvas(gridSize * 10, gridSize * 10)
    background('beige')
    frameRate(1)

    drawForm()
}

function draw(){
    background(bgColorInput.value())
    fill(snakeColorInput.value())

    const letztesX = snake[snake.length -1].x
    const letztesY = snake[snake.length -1].y
    
    if(!gameOver){
        if(letztesX >= 9 && direction.x === 1){
            gameOver = true
            frameRate(0)
        }else{
            snake.push({
                x: letztesX + direction.x,
                y: letztesY + direction.y,
            })
        
            snake.shift()
        }
        for(let bodySegment of snake){
            rect(bodySegment.x * gridSize, bodySegment.y * gridSize, 
                gridSize, gridSize)
        }
        fill('green')
        rect(snake[snake.length -1].x * gridSize, snake[snake.length -1].y * gridSize, 
            gridSize, gridSize)
        fill(snakeColorInput.value())
    }
}

function keyPressed() {
    if (keyCode === LEFT_ARROW && direction.x !== 1) {
        direction.x = -1
        direction.y = 0
    } else if (keyCode === RIGHT_ARROW && direction.x !== -1) {
        direction.x = 1
        direction.y = 0
    } else if (keyCode === DOWN_ARROW  && direction.y !== -1) {
        direction.x = 0
        direction.y = 1
    } else if (keyCode === UP_ARROW && direction.y !== 1) {
        direction.x = 0
        direction.y = -1
    }
}

function drawForm(){
    /*
    <div>
        <p>Hintergrundfarbe</p>
        <bgColorInput />

        <p>QuadratFarbe</p>
        <rectColorInput />
    </div>
    */    
    
    const div = createDiv()
    div.position(40, 30)

    const pBgColor = createP("Hintergrundfarbe")
    div.child(pBgColor)

    bgColorInput = createColorPicker('beige')
    bgColorInput.size(35)
    div.child(bgColorInput)

    const pSnakeColor = createP("Schlangenfarbe")
    div.child(pSnakeColor)

    snakeColorInput = createColorPicker('black')
    snakeColorInput.size(35)
    div.child(snakeColorInput)
}