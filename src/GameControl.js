import React, {Component} from 'react';

function GameControl(props) {
    return (
        <div className="newGame">
            <p className="newGame__heading">new game </p>

            <div id="dice" className="dice">
                <img className="dice__item" src={props.dice__1} alt="dice" />
                <img className="dice__item" src={props.dice__2 } alt="dice" />
            </div>

            <p onClick={props.handleClick}>roll dice</p>

            <p id="holdContr" className="score__hold" onClick={props.handleHold}> Hold </p>

            <input type="text" placeHolder="Final score"  className="score__final" />
        </div>
    )
}

export default GameControl;