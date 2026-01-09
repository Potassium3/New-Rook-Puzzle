
function generate(width, pieces) {
    return [[0, 0], [0, 3], [2, 3], [2, 4], [1, 4], [1, 1]]
}

function makePuzzle() {
    let grid = document.getElementById("grid");
    grid.innerHTML = "Generating...";
    let size = 5;
    let puzzle = generate(size, 8);
    grid.innerHTML = "";
    let firstPiece = true;
    for (let thing of puzzle) {
        if (firstPiece) {
            grid.innerHTML += `
            <div class="rook" style="top:${thing[0]/size*100}%; left:${thing[1]/size*100}%; width:${100/size}%;"><div></div></div>
            `
        } else {
            let piecetype = ["pawn", "bishop", "knight", "rook", "queen"][Math.floor(Math.random()*5)];    
            grid.innerHTML += `
            <div class="piece piece-${piecetype}" style="top:${thing[0]/size*100}%; left:${thing[1]/size*100}%; width:${100/size}%;"><div></div></div>
            `
        }
        firstPiece = false;
    }
}