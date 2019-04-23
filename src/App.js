import React, { useState, useEffect } from 'react';
import User from "./Components/user.js"
import Game from "./Components/game.js"
import './App.css';
import Classnames from "classnames"

const hordeAudio = new Audio("https://wow.zamimg.com/wowsounds/1582528");
const allianceAudio = new Audio("https://wow.zamimg.com/wowsounds/1902387");

function appFunction() {
  const [player, setPlayer] = useState(null);
  const [turn, setTurn] = useState(true);
  const [game, setGame] = useState(null);
  const [picture, setPicture] = useState();
  const [picture2, setPicture2] = useState();

  useEffect(() => {
    if (player === "horde") {
      setPicture("https://www.usfine.com/images/game_left/world-of-warcraft.png");
      setPicture2("http://heroes.blizzplanet.com/wp-content/uploads/2015/11/blizzcon-2015-genn-greymane-human.png");
    } else {
      setPicture("http://heroes.blizzplanet.com/wp-content/uploads/2015/11/blizzcon-2015-genn-greymane-human.png");
      setPicture2("https://www.usfine.com/images/game_left/world-of-warcraft.png");
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
  function turnFunction() {
    setTurn(!turn);
  }
  function exitGame(){
    console.log("exit")
    setGame(null);
    setPlayer(null)
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
            className={Classnames("userInfo",
            { "active":turn===true})}
            >
          </div>
          <Game player={player} exitgame={exitGame} functionTurn={turnFunction} />
          <div
            style={{
              backgroundImage: `url(${picture2})`,
            }}
            className={Classnames("user2Info",
              { "active":turn===false})}
          >
          </div>
        </div>

      </>
    )
  }
}

export default appFunction;
