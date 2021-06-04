
let bgColorInput
let rectColorInput

function setup(){
    createCanvas(400, 400)

    drawForm()
}

function draw(){
    background(bgColorInput.value())

    fill(rectColorInput.value())
    rect(50, 50, 100, 100)
}

function drawForm(){
    /*
    <div>
        <p>
            <div>Hintergrundfarbe</div>
            <bgColorInput />
        </p>
        <p>
            <div>QuadratFarbe</div>
            <rectColorInput />
        </p>
    </div>    
    */

    const div = createDiv()
    div.position(40, 30)

    bgColorInput = createColorPicker('beige')
    bgColorInput.size(35)
    const bgColorP = createP()
    bgColorP.child(createDiv("Hintergrundfarbe"))
    bgColorP.child(bgColorInput)
    div.child(bgColorP)

    rectColorInput = createColorPicker('black')
    rectColorInput.size(35)
    const snakeColorP = createP()
    snakeColorP.child(createDiv("Quadratfarbe"))
    snakeColorP.child(rectColorInput)
    div.child(snakeColorP)
}