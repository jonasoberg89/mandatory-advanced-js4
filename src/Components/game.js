import React, { useState, useRef } from 'react';
import '../App.css';

const rows = Array(7).fill(null).map((_, idx) => idx);
const coins = Array(6).fill(null).map((_, idx) => idx);
let currentId = 0;

function generateId() {
    const rv = "item-" + currentId;
    currentId += 1;
    return rv;
}

function userFunction(props) {
    const circleElement = useRef(null);
    const board = new Array(42);
    const onButtonClick = (e) => {
        console.log (e.target)
    }

    return (
        <>
            <div className="Gameboard">
                {/* <div className="transparent"></div> */}
                {rows.map(row =>
                    <div className="row" key={row}>
                        {coins.map(x => 
                        <div ref={circleElement}
                            data-circle ={generateId()}
                            key = {currentId}
                            onClick={onButtonClick}
                            className="circle" 
                        >
                        </div>)}
                    </div>)}
            </div>
        </>
    );

}

export default userFunction;
