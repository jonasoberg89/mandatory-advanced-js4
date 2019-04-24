let winnerCombosVertical = [
    [0, 1, 2, 3],
    [1, 2, 3, 4],
    [2, 3, 4, 5],
];
let winnerCombosHorizontal = [
    [0, 1, 2, 3],
    [1, 2, 3, 4],
    [2, 3, 4, 5],
    [3, 4, 5, 6],
];
function checkForWinner(array, index, player) {
    // CHECK VERTICAL WINNER//
    const testVertical = winnerCombosVertical.find(combo => combo.every(line => array[index][line] === player))
    if (testVertical) return player;
    // CHECK HORIZONTAL WINNER//
    for (let i = 0; i < 6; i++) {
        const horizontal = array.map((colum) => {
            return colum[i];
        })
        const testHorizontal = winnerCombosHorizontal.find(combo => combo.every(line => horizontal[line] === player))
        if (testHorizontal) return player;
    }
    // CHECK DIAGONAL WINNER LEFT TO RIGHT//
    for (let i = 0; i < 6; i++) {
        for (let j = 0; j < 7; j++) {
            const x = array.slice(j);
            const diagonalLeft = x.map((colum, k) => {
                return colum[i + k];
            })
            const testDiagonalLeft = winnerCombosHorizontal.find(combo => combo.every(line => diagonalLeft[line] === player))
            if (testDiagonalLeft) return player;
        }
    }
    // CHECK DIAGONAL WINNER RIGHT TO LEFT// 
    for (let i = 6; i > 0; i--) {
        for (let j = 0; j < 7; j++) {
            const x = array.slice(j);
            const diagonalRight = x.map((colum, k) => {
                return colum[i - k];
            })
            const testDiagonalRight = winnerCombosHorizontal.find(combo => combo.every(line => diagonalRight[line] === player))
            if (testDiagonalRight) return player;
        }
    }
    // CHECK DRAW//
    let draw = true;
    for (let column of array) {
        for (let coin of column) {
            if (!coin) {
                draw=false;
            }
        }
    }
        if (draw)return "Burning Legion";


}

export default checkForWinner