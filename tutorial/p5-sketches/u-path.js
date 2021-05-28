const ps = []

function setup() {
    createCanvas(1000, 1000)
    background('black')
    fill('white')
    stroke('white')

    while(ps.length < 100){
        ps.push({
            x: round(random(10, 990)),
            y: round(random(10, 990))
        })
    }

    let lastP = { x: -1, y: -1 }
    for(let p of ps){
        circle(p.x, p.y, 5)
        if(lastP.x !== -1){
            line(lastP.x, lastP.y, p.x, p.y)
        }
        lastP = p
    }
}
  