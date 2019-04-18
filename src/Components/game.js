import React, { useState, useRef } from 'react';
import '../App.css';

const rows = Array(7).fill(null).map((_, idx) => idx);
for (let row of rows){
    const coins = Array(6).fill(null).map((_, idx) => idx);
    rows[row]=[...coins]
}
let currentId = 0;
let currentRow = 0;

function generateId() {
    const rv = currentId;
    currentId += 1;
    return rv;
}
function generateRow() {
    const rv =  currentRow;
    currentRow += 1;
    return rv;
}

function userFunction(props) {
    const circleElement = useRef(null);
    const [turn, setTurn]= useState(props.player)
    const [singleplayer,setSingelplayer] = useState(props.gamemode)
    const board = new Array(42);

    const onButtonClick = (row,index) => {
        console.log(row)
        console.log(index)
     
        findLastEmptyCell(row)
    
    }
    const findLastEmptyCell= (col) =>{
        for(let i = 0;i<col.length;i++){
            const cell = col[i];
            console.log (cell.data)
        }
        return null;
    }

    return (
        <>
            <div className="Gameboard">
                {rows.map((row,index )=>
                    <div className="row" onClick={() => onButtonClick(row,index)} id={generateRow()} key={currentRow}>
                        {rows[index].map(x => 
                            <div ref={circleElement}
                                data ="empty"
                                id = {generateId()}
                                key = {currentId}
                                className="circle">
                            </div>)}
                    </div>)}
            </div>
        </>
    );

}

export default userFunction;
