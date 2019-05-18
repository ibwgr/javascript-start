// Initialize canvas and required variables
const canvas = document.getElementById("canvas"),
    ctx = canvas.getContext("2d"),
    W = window.innerWidth -100,
    H = window.innerHeight -100,
    paddles = [2],
    mouse = {};

let multiplier = 1,
    over = 0,
    init,
    paddleHit;

canvas.addEventListener("mousemove", trackPosition, true);
canvas.addEventListener("mousedown", btnClick, true);

// Set the canvas's height and width to full screen
canvas.width = W;
canvas.height = H;

function paintCanvas() {
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, W, H);
}

function Paddle(pos) {
    // Height and width
    this.h = 5;
    this.w = 150;

    // Paddle's position
    this.x = W/2 - this.w/2;
    this.y = (pos === "top") ? 0 : H - this.h;
}

paddles.push(new Paddle("bottom"));
paddles.push(new Paddle("top"));

const ball = {
    x: 50,
    y: 50,
    r: 5,
    c: "white",
    vx: 4,
    vy: 8,

    // Function for drawing ball on canvas
    draw: function() {
        ctx.beginPath();
        ctx.fillStyle = this.c;
        ctx.arc(this.x, this.y, this.r, 0, Math.PI*2, false);
        ctx.fill();
    }
};

let startBtn = {
    w: 100,
    h: 50,
    x: W/2 - 50,
    y: H/2 - 25,

    draw: function() {
        ctx.strokeStyle = "white";
        ctx.lineWidth = "2";
        ctx.strokeRect(this.x, this.y, this.w, this.h);

        ctx.font = "18px Arial, sans-serif";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillStlye = "white";
        ctx.fillText("Start", W/2, H/2 );
    }
};

const restartBtn = {
    w: 100,
    h: 50,
    x: W/2 - 50,
    y: H/2 - 50,

    draw: function() {
        ctx.strokeStyle = "white";
        ctx.lineWidth = "2";
        ctx.strokeRect(this.x, this.y, this.w, this.h);

        ctx.font = "18px Arial, sans-serif";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillStlye = "white";
        ctx.fillText("Restart", W/2, H/2 - 25 );
    }
};

// Draw everything on canvas
function draw() {
    paintCanvas();
    for(let i = 0; i < paddles.length; i++) {
        const p = paddles[i];

        ctx.fillStyle = "white";
        ctx.fillRect(p.x, p.y, p.w, p.h);
    }

    ball.draw();
    update();
}

// Track the position of mouse cursor
function trackPosition(e) {
    mouse.x = e.pageX;
    mouse.y = e.pageY;
}

// The main game logic is defined here
function update() {

    // Move the paddles on mouse move
    if(mouse.x && mouse.y) {
        for(let i = 1; i < paddles.length; i++) {
            let p = paddles[i];
            p.x = mouse.x - p.w/2;
        }
    }

    // Move the ball
    ball.x += ball.vx;
    ball.y += ball.vy;

    // Collision with paddles
    const p1 = paddles[1];
    const p2 = paddles[2];

    // If the ball strikes with paddles,
    // invert the y-velocity vector of ball,
    // increment the points, play the collision sound,
    // save collision's position so that sparks can be
    // emitted from that position, set the flag variable,
    // and change the multiplier
    if(collides(ball, p1)) {
        collideAction(ball, p1);
    } else if(collides(ball, p2)) {
        collideAction(ball, p2);
    } else {
        // Collide with walls, If the ball hits the top/bottom,
        // walls, run gameOver() function
        if(ball.y + ball.r > H) {
            ball.y = H - ball.r;
            gameOver();
        } else if(ball.y < 0) {
            ball.y = ball.r;
            gameOver();
        }

        // If ball strikes the vertical walls, invert the
        // x-velocity vector of ball
        if(ball.x + ball.r > W) {
            ball.vx = -ball.vx;
            ball.x = W - ball.r;
        } else if(ball.x -ball.r < 0) {
            ball.vx = -ball.vx;
            ball.x = ball.r;
        }
    }
}

//Function to check collision between ball and one of the paddles
function collides(b, p) {
    if(b.x + ball.r >= p.x && b.x - ball.r <=p.x + p.w) {
        if(b.y >= (p.y - p.h) && p.y > 0){
            paddleHit = 1;
            return true;
        } else if(b.y <= p.h && p.y === 0) {
            paddleHit = 2;
            return true;
        } else return false;
    }
}

//Do this when collides == true
function collideAction(ball, p) {
    ball.vy = -ball.vy;

    if(paddleHit === 1) {
        ball.y = p.y - p.h;
        multiplier = -1;
    } else if(paddleHit === 2) {
        ball.y = p.h + ball.r;
        multiplier = 1;
    }
}

function gameOver() {
    ctx.fillStlye = "white";
    ctx.font = "20px Arial, sans-serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";

    window.cancelAnimationFrame(init);
    over = 1;
    restartBtn.draw();
}

// Function for running the whole animation
function animloop() {
    init = window.requestAnimationFrame(animloop);
    draw();
}

// Function to execute at startup
function startScreen() {
    draw();
    startBtn.draw();
}

// On button click (Restart and start)
function btnClick(e) {
    // Variables for storing mouse position on click
    const mx = e.pageX;

    // Click start button
    if(mx >= startBtn.x && mx <= startBtn.x + startBtn.w) {
        animloop();
        // Delete the start button after clicking it
        startBtn = {};
    }

    // If the game is over, and the restart button is clicked
    if(over === 1) {
        if(mx >= restartBtn.x && mx <= restartBtn.x + restartBtn.w) {
            ball.x = 20;
            ball.y = 20;
            ball.vx = 4;
            ball.vy = 8;
            animloop();

            over = 0;
        }
    }
}

// Show the start screen
startScreen();