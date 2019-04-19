let winnerCombosVertical = [
    [0,1,2,3],
    [1,2,3,4],
    [2,3,4,5],
]
let winnerCombosHorisental = [

]
let winnerCombosDiagonal = [

]
function checkForWinner(array,index,player){
    const testVertical = winnerCombosVertical.find (combo => combo.every(line =>array[index][line]===player)) 
    if(testVertical){
       return player;
    }
}

export default checkForWinner