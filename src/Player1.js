import React, {Component} from 'react';

function Player1(props){ 
    return(
        <div id="Player1" className="Player Player__1 active">
            <p className="name active__name"> {props.Name} &nbsp;
                <span className="active__circle"></span>
            </p>     
            <p id="scoreHold1" className="score score__temp"> {props.hold} </p>

            <div className="score score__perm">
                <p className="score__current score__current--1" >current</p>
                <p id="scoreCur1" className="score__value score__value--1">  {props.scoreCur} </p>
            </div>       
        </div>
    )
}

export default Player1;