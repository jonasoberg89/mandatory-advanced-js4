let winnerCombosVertical = [
    [0,1,2,3],
    [1,2,3,4],
    [2,3,4,5],
]
let winnerCombosHorizontal = [
    [0,1,2,3],
    [1,2,3,4],
    [2,3,4,5],
    [3,4,5,6],
]
function checkForWinner(array,index,player){
    const testVertical = winnerCombosVertical.find(combo => combo.every(line =>array[index][line]===player)) 
    if(testVertical)return player;

    for (let i = 0; i < 6;i++){
        const horizontal = array.map((colum) =>{
            return colum[i];
        })
        const testHorizontal = winnerCombosHorizontal.find(combo => combo.every(line =>horizontal[line]===player)) 
        if(testHorizontal)return player;    
    }

 
}

export default checkForWinner