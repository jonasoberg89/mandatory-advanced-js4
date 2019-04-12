import React, { useState, useRef, useEffect } from 'react';
import User from "./Components/user.js"
import Game from "./Components/game.js"
import './App.css';
const hordeAudio = new Audio("https://wow.zamimg.com/wowsounds/1582528");
const allianceAudio = new Audio("https://wow.zamimg.com/wowsounds/1902387");

function appFunction() {
  const [player, setPlayer] = useState(null);
  const [picture, setPicture] = useState({})
  const userImg = useRef(null);

  useEffect(() => {
    if (player === "horde") {
      setPicture("http://www.stickpng.com/assets/thumbs/5a576ab91c992a034569ab78.png")
    }else{
      setPicture("http://www.stickpng.com/assets/images/5a576a1a1c992a034569ab70.png");
    } 
  },[player]);
  
  function hordeUser() {
    hordeAudio.play();
    setTimeout(function () {
      setPlayer("horde")
    }, 1500);

  }
  function allianceUser() {
    allianceAudio.play();
    setTimeout(function () {
      setPlayer("alliance")
    }, 2000);
  }

  if (!player) {
    return (
      <div className="App">
        <User horde={hordeUser} alliance={allianceUser} />
      </div>
    );
  }
  else {
    return (
      <>
        <div ref={userImg} 
          style={{
            backgroundImage: `url(${picture})`,
            }} 
          className="userInfo">
        </div>
        <div className="App">
          <Game />
        </div>
      </>
    )
  }
}

export default appFunction;
