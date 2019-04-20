import React, { useState, useEffect } from 'react';
import Classnames from "classnames"
import checkForWinner from "./checkforwinner.js"
import '../App.css';

const backgroundMusic = new Audio("https://wow.zamimg.com/wowsounds/772738");
backgroundMusic.loop = true;
const hordeAudio = new Audio("https://wow.zamimg.com/wowsounds/1324843");
const allianceAudio = new Audio("https://wow.zamimg.com/wowsounds/1324777");
hordeAudio.volume = 0.2;
allianceAudio.volume = 0.2;

const rows = Array(7).fill(null).map((_, idx) => idx);
for (let row of rows) {
    const coins = Array(6).fill(null).map((_, idx) => null);
    rows[row] = [...coins]
}
let currentId = 0;
let currentRow = 0;

function generateId() {
    const rv = currentId;
    currentId += 1;
    return rv;
}
function generateRow() {
    const rv = currentRow;
    currentRow += 1;
    return rv;
}

function userFunction(props) {
    const [column, setColumn] = useState(rows)
    const [turn, setTurn] = useState(props.player)
    // const [singleplayer,setSingelplayer] = useState(props.gamemode)
    
  useEffect(() => {
    backgroundMusic.play();
  },[]);

    const onButtonClick = (row, index) => {
        if (turn === "horde"){ hordeAudio.play();}
        else{ allianceAudio.play();}

        let arrayCopy = [...column]
        let col = arrayCopy[index];
        findLastEmptyCell(col)
        setColumn(arrayCopy);
        console.log(checkForWinner(column,index,turn))

        if(turn === "horde"){
            setTurn("alliance")
        }else{
            setTurn("horde")
        }
    }
    const findLastEmptyCell= (col) =>{
        for (let i = 0; i < col.length; i++) {
            if (col[i] === null) {
                col[i] = turn;
                return
            }
        }
        return null
    }

    return (
        <>
            <div className="Gameboard">
                {column.map((row, index) =>
                    <div className="row" onClick={() => onButtonClick(row, index)} key={generateRow()}>
                        {column[index].map(player =>
                            <div
                                key={generateId()}
                                className={Classnames("circle",[player])}>
                            </div>)}
                    </div>)}
            </div>
        </>
    );

}

export default userFunction;
