import React, { useEffect } from 'react';

const hordeCheer = new Audio("https://wow.zamimg.com/wowsounds/567388");
const allianceCheer = new Audio("https://wow.zamimg.com/wowsounds/567383");
const legion = new Audio("https://wow.zamimg.com/wowsounds/598232")

function winner(props) {

    useEffect(() => {
        if (props.player === "horde") {
            hordeCheer.play();
        } else if (props.player ==="alliance") {
            allianceCheer.play();
        }else{
            legion.play();
        }
        return () => {
            hordeCheer.pause();
            allianceCheer.pause();
            legion.pause();
            hordeCheer.currentTime = 0;
            allianceCheer.currentTime = 0;
            legion.currentTime = 0;
        }
    }, [props.player])

    const questText = () => {
        if (props.player === "horde") {
            return (
                <p>
                    The horde advanced on the battlefield, and after a heroic effort by Orcish leader,
                    <br />
                    the horde stod victorious! And the survinving humans became food for the hungry wolfs!
                    <br />
                    <br />
                    FOR THE HORDE!
                </p>
            )
        }
        else if (props.player === "alliance") {
            return (
                <p>
                    The leader of the Alliance stod victorious after a long cruel battle <br />
                    The last orc on the battlefield begged for his life but the strong human, the leader of the alliance,<br />
                    wield his sword and the ground got decorated with orcish blood!
                    <br />
                    <br />
                    For the Alliance!!
                </p>
            )
        }else {
            return (
                <p>
                    While the grate battle between the Horde and the Alliance the sky turned red and fallan stars<br/>
                    began to rain down on the battlefield. From the firey mass the evil Archimond appears!
                    with his Legion he wiped out the entire Army from the Horde and The Alliance! 
                    <br/>
                    <br/>
                    The World shall burn!
                    Leave none alive! 
                </p>
            )

        }
    }



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
                    {questText()}
                </div>
                <div className="winner-container-buttons">
                    <button onClick={props.restartgame} className="body-button">Restart Game</button>
                    <button onClick={props.exitgame} className="body-button">Exit Game</button>
                </div>

            </div>
        </div>
    )

}
export default winner