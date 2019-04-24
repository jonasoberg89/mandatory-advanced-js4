import React, { useEffect } from 'react';

const hordeCheer = new Audio("https://wow.zamimg.com/wowsounds/567388");
const allianceCheer = new Audio("https://wow.zamimg.com/wowsounds/567383");

function winner(props) {

    useEffect(() => {
        if (props.player === "horde") {
            hordeCheer.play();
        } else {
            allianceCheer.play();
        }
        return () => {
            hordeCheer.pause();
            allianceCheer.pause();
            hordeCheer.currentTime = 0;
            allianceCheer.currentTime = 0;
        }
    }, [props.player])

   

    
    return (
        <div className="overlay">
            <div className="winner-container">
                <div className="winner-container-header">
                    <h1 className="winner-text">Quest complete</h1>
                </div>
                <div className="winner-container-player">
                    <h2 className="winner-text">The {props.player} won the battle!</h2>
                </div>
                <div className="fun-facts">
                    {props.player === "horde" ?
                        <p>
                            The horde advanced on the battlefield, and after a heroic effort by Orcish leader,
                            <br />
                            the horde stod victorious! And the survinving humans became food for the hungry wolfs!
                            <br />
                            <br />
                            FOR THE HORDE!
                        </p>
                        :
                        <p>
                            The leader of the Alliance stod victorious after a long cruel battle <br />
                            The last orc on the battlefield begged for his life but the strong human, the leader of the alliance,<br />
                            wield his sword and the ground got decorated with orcish blood!
                            <br />
                            <br />
                            For the Alliance!!
                         </p>
                    }
                </div>
                <div className="winner-container-buttons">
                    <button className="body-button">Restart Game</button>
                    <button onClick={props.exitgame} className="body-button">Exit Game</button>
                </div>

            </div>
        </div>
    )

}
export default winner