const gameWidth = 400;
const gameHeight = 400;

const canvas = document.getElementById("game");
canvas.width = gameWidth;
canvas.height = gameHeight;
const ctx = canvas.getContext("2d");

function halfCircle(yOffset, radius, fillColor) {
    ctx.beginPath();
    const circle = Math.PI;
    ctx.arc((gameWidth / 2), (gameHeight / 2)+yOffset, radius, Math.PI, 2 * Math.PI);
    ctx.fillStyle = fillColor;
    ctx.fill();
    ctx.closePath();
}


// using HSL

start = 100
end = 45
steps = 80
stepSize = (start - end) / steps

for (let step = 0; step < steps; step++) {
    const gradientColor = `hsl(${((300 / steps) * step)}, 100%, 48%)`
    halfCircle(150, start - (step * stepSize), gradientColor)
}

halfCircle(150, end, "#FFFFFF")


// --------------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------

// using RGB

start = 100
end = 75
steps = 80
stepSize = (start - end) / steps

// r = 255, g = 0-255
for(let step = 0; step < steps; step++){
    const gradientColor = `rgb(255, ${(255 / steps) * step}, 0)`
    halfCircle(0, start - (step * stepSize), gradientColor)
}


start = 85
end = 75
steps = 10
stepSize = (start - end) / steps

// r = 255-0, g = 255
for(let step = 0; step < steps; step++){
    const gradientColor = `rgb(${255 - ((255 / steps) * step)}, 255, 0)`
    halfCircle(0, start - (step * stepSize), gradientColor)
}



start = 75
end = 60
steps = 10
stepSize = (start - end) / steps

// r = 0, g = 255-0, b = 0-255
for(let step = 0; step < steps; step++){
    const gradientColor = `rgb(0, ${255 - ((255 / steps) * step)}, ${(255 / steps) * step})`
    halfCircle(0, start - (step * stepSize), gradientColor)
}


start = 60
end = 45
steps = 10
stepSize = (start - end) / steps

// r = 0-143, g = 0, b = 255
for(let step = 0; step < steps; step++){
    const gradientColor = `rgb(${(143 / steps) * step}, 0, 255)`
    halfCircle(0, start - (step * stepSize), gradientColor)
}

halfCircle(0, end, "#FFFFFF")
