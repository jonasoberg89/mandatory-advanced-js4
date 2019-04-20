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
      setPicture("https://seeklogo.net/wp-content/uploads/2013/06/world-of-warcraft-horde-vector-logo.png");
      setPicture2("https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d099d316-98cf-4095-a2f9-32cca4219baa/dam5zdb-54a8509e-0aa6-43aa-92ca-56a917596d4c.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2QwOTlkMzE2LTk4Y2YtNDA5NS1hMmY5LTMyY2NhNDIxOWJhYVwvZGFtNXpkYi01NGE4NTA5ZS0wYWE2LTQzYWEtOTJjYS01NmE5MTc1OTZkNGMucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.pIG8oY5ldYlgvBFfg05NDdTKd4TH_IAoUY41Dbj9Gmk");
    } else {
      setPicture("https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d099d316-98cf-4095-a2f9-32cca4219baa/dam5zdb-54a8509e-0aa6-43aa-92ca-56a917596d4c.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2QwOTlkMzE2LTk4Y2YtNDA5NS1hMmY5LTMyY2NhNDIxOWJhYVwvZGFtNXpkYi01NGE4NTA5ZS0wYWE2LTQzYWEtOTJjYS01NmE5MTc1OTZkNGMucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.pIG8oY5ldYlgvBFfg05NDdTKd4TH_IAoUY41Dbj9Gmk");
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
