import React from 'react';
import '../App.css';

function userFunction(props) {

    if (!props.player) {
        return (
            <>
                <div className="userHeadline">
                    <h1>Choose your side!</h1>
                </div>
                <div className="userContainer">
                    <div onClick={props.horde} className="hordeContainer"></div>
                    <div onClick={props.alliance} className="allianceContainer"></div>
                </div>
            </>
        );
    } else {
        return (
            <>
                <div className="userHeadline">
                    <h1>Choose mode</h1>
                </div>
                <div className="userContainer">
                    <div className="gamemode"><h1 onClick={()=>{props.gamemode("1vs1")}}>1vs1</h1></div>
                    <div className="gamemode"><h1 onClick={()=>{props.gamemode("ai")}}>AI</h1></div>
                </div>
            </>
        )
    }

}

export default userFunction;
