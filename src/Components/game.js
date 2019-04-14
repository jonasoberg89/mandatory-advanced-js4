import React, { useState, useRef } from 'react';
import '../App.css';

const rows = Array(7).fill(null).map((_, idx) => idx);
const coins = Array(6).fill(null).map((_, idx) => idx);
let currentId = 0;
let currentRow = 0;

function generateId() {
    const rv = "item-" + currentId;
    currentId += 1;
    return rv;
}
function generateRow() {
    const rv = "item-" + currentId;
    currentRow += 1;
    return rv;
}

function userFunction(props) {
    const circleElement = useRef(null);
    const [turn, setTurn]= useState(props.player)
    const board = new Array(42);

    const onButtonClick = (e) => {
        let row = e.target.parentElement
        console.log (row.children)
    }

    return (
        <>
            <div className="Gameboard">
                {rows.map(row =>
                    <div className="row" onClick={onButtonClick} key={generateRow()}>
                        {coins.map(x => 
                        <div ref={circleElement}
                            key = {generateId()}
                            className="circle" 
                        >
                        </div>)}
                    </div>)}
            </div>
        </>
    );

}

export default userFunction;
