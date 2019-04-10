import React, { useState } from 'react';
import '../App.css';

function userFunction(props)  {
  
  
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
  
}

export default userFunction;
