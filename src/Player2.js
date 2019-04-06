import React, {Component} from 'react';

function Player2(props) {
    return(
        <div id="Player2" className="Player Player__2" >
            <p className="name"> {props.Name} </p>
            <p className="score score__temp"> 0 </p>

            <div className="score score__perm">
                <p className="score__current score__current--2" >current</p>
                <p id="scoreCur2" className="score__value score__value--2"> {props.score} </p>
            </div>      
        </div>
    )
}

export default Player2;