import React, {Component} from 'react';

function Player2(props) {
    return(
        <div id="Player2" className="Player Player__2" >
            <p id="playerName2" className="name"> {props.Name} </p>
            <p id="scoreHold2" className="score score__temp"> {props.hold} </p>

            <div className="score score__perm">
                <p className="score__current score__current--2" >current</p>
                <p id="scoreCur2" className="score__value score__value--2"> {props.scoreCur} </p>
            </div>      
        </div>
    )
}

export default Player2;