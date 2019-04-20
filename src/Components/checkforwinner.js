let winnerCombosVertical = [
    [0,1,2,3],
    [1,2,3,4],
    [2,3,4,5],
]

function check(array, length) {
    var count = 0,
        value = array[0];

    return array.some(function (a) {
        if (value !== a) {
            count = 0;
            value = a;
        }
        return ++count === length;
    });
}
function checkForWinner(array,index,player){
    const testVertical = winnerCombosVertical.find(combo => combo.every(line =>array[index][line]===player)) 
    if(testVertical)return player;
    
    for (let i =0;i < 6;i++){
        const winnerCombosHorizontal = array.map((colum) =>{
        return colum[i];
        })
   
        console.log( check(winnerCombosHorizontal,4))
    }

 
}

export default checkForWinner