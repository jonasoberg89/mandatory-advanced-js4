import React, { useState, useEffect } from 'react';
import Classnames from "classnames"
import checkForWinner from "./checkforwinner.js"
import Winner from "./winner.js"
import '../App.css';

const backgroundMusic = new Audio("https://wow.zamimg.com/wowsounds/772738");
backgroundMusic.loop = true;
const hordeAudio = new Audio("https://wow.zamimg.com/wowsounds/1324843");
const allianceAudio = new Audio("https://wow.zamimg.com/wowsounds/1324777");
hordeAudio.volume = 0.2;
allianceAudio.volume = 0.2;

function generateBoard() {
const rows = Array(7).fill(null).map((_, idx) => idx);
for (let row of rows) {
    const coins = Array(6).fill(null).map((_, idx) => null);
    rows[row] = [...coins]
}
    return rows;
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
    const [column, setColumn] = useState(generateBoard())
    const [turn, setTurn] = useState(props.player)
    const [winner,setWinner] = useState("");
    // const [singleplayer,setSingelplayer] = useState(props.gamemode)

    useEffect(() => {
        backgroundMusic.play();
    }, []);
    useEffect(() => {
        if (winner){
            backgroundMusic.pause();
            backgroundMusic.currentTime = 0;
        }
    }, [winner]);
 
    const onButtonClick = (row, index) => {
        if (turn === "horde") { hordeAudio.play(); }
        else { allianceAudio.play(); }

        let arrayCopy = [...column]
        let col = arrayCopy[index];
        findLastEmptyCell(col)
        setColumn(arrayCopy);
        setWinner(checkForWinner(column, index, turn));
        props.functionTurn();
        if (turn === "horde") {
            setTurn("alliance")
        } else {
            setTurn("horde")
        }
    }
    const findLastEmptyCell = (col) => {
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
            { winner ? <Winner exitgame={() => { setColumn(generateBoard()); props.exitgame(); }} player={winner} /> : null}
            <div className="Gameboard">
                {column.map((row, index) =>
                    <div className="row" onClick={() => onButtonClick(row, index)} key={generateRow()}>
                        {column[index].map(player =>
                            <div
                                key={generateId()}
                                className={Classnames("circle", [player])}>
                            </div>)}
                    </div>)}
            </div>
        </>
    );

}

export default userFunction;
