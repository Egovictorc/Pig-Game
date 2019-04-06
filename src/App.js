import React, {Component} from 'react';
import './css/Index.css';
import Back from './back.jpg';
import GameControl from './GameControl';
import Player1 from './Player1';
import Player2 from './Player2';
import GameController from './GameController';

function App(props) {
    return (
        <div className="container">
            <GameController />
            
        </div>
    )
}

export default App;