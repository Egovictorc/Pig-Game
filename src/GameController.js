import React, {Component} from 'react';
import GameControl from './GameControl';
import Player1 from './Player1';
import Player2 from './Player2';

class GameController extends Component {
    constructor() {
        super();
        this.state = {
            
            value1: 0,
            value2: 0,
            //dice__1: `images/dice-${this.value1}.png`
            dice__1: `images/dice-1.png`,
            dice__2: 'images/dice-2.png',
        }

        this.handleClick = this.handleClick.bind(this);
        
    }

    handleClick() {
        let dice__item = document.getElementById('dice');
        dice__item.style.visibility = "visible";
        let active1 = document.getElementById('Player1');
        let active2 = document.getElementById('Player2');
        
        let value1 = Math.floor(Math.random() * 6) + 1;
        let value2 = Math.floor(Math.random() * 6) + 1;

        this.setState({
            value1: value1,
            value2: value2,
            dice__1: `images/dice-${value1}.png`,
            dice__2: `images/dice-${value2}.png`,
        })
        
        if(this.state.dice__1 === this.state.dice__2 ) {      active1.classList.toggle('active');
            active2.classList.toggle('active')
        } 

       let x = this.state.value1;
        console.log(x)
    }

    render(){
        return(
            <>
            <GameControl dice__1={this.state.dice__1} dice__2={this.state.dice__2} handleClick={ this.handleClick } />

            <Player1 Name="Player 1" value1={this.state.value1} score={ this.state.value1 + this.state.value2 } />
            <Player2 Name="Player 2" value2={this.state.value2} score={ this.state.value1 + this.state.value2 } />
            </>
            
        )
    }
}

export default GameController;