import React, { useState, useRef, useEffect } from 'react';
import User from "./Components/user.js"
import Game from "./Components/game.js"
import './App.css';
import Classnames from "classnames"

const hordeAudio = new Audio("https://wow.zamimg.com/wowsounds/1582528");
const allianceAudio = new Audio("https://wow.zamimg.com/wowsounds/1902387");

function appFunction() {
  const [player, setPlayer] = useState(null);
  const [game, setGame] = useState(null);
  const [picture, setPicture] = useState();
  const [picture2,setPicture2] = useState();

  useEffect(() => {
    if (player === "horde") {
      setPicture("http://www.stickpng.com/assets/thumbs/5a576ab91c992a034569ab78.png");
      setPicture2("http://www.stickpng.com/assets/images/5a576a1a1c992a034569ab70.png");
    } else {
      setPicture("http://www.stickpng.com/assets/images/5a576a1a1c992a034569ab70.png");
      setPicture2("http://www.stickpng.com/assets/thumbs/5a576ab91c992a034569ab78.png");
    }
  }, [player]);

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
  function gameMode(mode) {
    setTimeout(function () {
      setGame(mode)
    }, 500);
  }

  if (!game) {
    return (
      <div className="firstpage">
        <User gamemode={gameMode} player={player} horde={hordeUser} alliance={allianceUser} />
      </div>
    );
  }
  else {
    return (
      <>
        <div className="App">
        <div
          style={{
            backgroundImage: `url(${picture})`,
          }}
          className={Classnames("userInfo")}>
        </div>
          <Game player={player} />
          <div 
          style={{
            backgroundImage: `url(${picture2})`,
          }}
          className="user2Info">
        </div>
        </div>

      </>
    )
  }
}

export default appFunction;
