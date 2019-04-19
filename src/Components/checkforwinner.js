let winnerCombosVertical = [
    [0,1,2,3],
    [1,2,3,4],
    [2,3,4,5],
]

let winnerCombosDiagonal = [

]
function checkForWinner(array,index,player){
    const testVertical = winnerCombosVertical.find(combo => combo.every(line =>array[index][line]===player)) 
    if(testVertical)return player;

    const winnerCombosHorizontal = array.map((colum) => colum.indexOf(player))
    console.log(winnerCombosHorizontal);
}

export default checkForWinner