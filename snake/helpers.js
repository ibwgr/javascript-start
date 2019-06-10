
function loadImage(url) {
    return new Promise(function(res){
        const img = new Image();
        img.src = url;
        img.onload = function () {
            res(img);
        };
    })
}

export function loadImages(names, onload){
    Promise.all(names.map(loadImage)).then(onload)
}

export function setupContext(board, gameSize){
    const dpr = window.devicePixelRatio || 1;
    board.width = gameSize * dpr;
    board.height = gameSize * dpr;
    const ctx = board.getContext('2d');
    ctx.scale(dpr, dpr);
    return ctx;
}

// Generiert eine Zufallszahl, welche zwischen min und max liegt und ein Vielfaches von multiplier ist.
export function randomMultiple(min, max, multiplier = 1){
    return Math.round((Math.random() * (max-min) + min) / multiplier) * multiplier;
}
