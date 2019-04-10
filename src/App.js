import React, { useState } from 'react';
import User from "./Components/user.js"
import './App.css';

function appFunction()  {
  
  function hordeUser(){
    let hordeAudio = new Audio("https://wow.zamimg.com/wowsounds/1582528");
    hordeAudio.play();
  }
  function allianceUser (){
    let allianceAudio = new Audio("https://wow.zamimg.com/wowsounds/1902387");
    allianceAudio.play();
  }
  
    return (
      <div className="App">
        <User horde={hordeUser} alliance={allianceUser} />
      </div>
    );
  
}

export default appFunction;
