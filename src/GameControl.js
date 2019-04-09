import React, {Component} from 'react';

function GameControl(props) {
    return (
        <div className="newGame">
            <p id="newGame" onClick={props.handleNewGame} className="newGame__heading">new game </p>

            <div id="dice" className="dice">
                <img className="dice__item" src={props.dice__1} alt="dice" />
                <img className="dice__item" src={props.dice__2 } alt="dice" />
            </div>

            <p id="diceRoll" onClick={props.handleClick}>roll dice</p>

            <p id="holdContr" className="score__hold" onClick={props.handleHold}> Hold </p>

            <input type="text"  placeholder="Final score" ref={props.inputRef} className="score__final" onKeyPress={props.keyPress} />
        </div>
    )
}

export default GameControl;