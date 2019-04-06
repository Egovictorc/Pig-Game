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
            isActive1: true,
            isActive2: false,
            scoreHold1: 0,
            scoreHold2: 0,
        }

        this.handleClick = this.handleClick.bind(this);
        this.handleHold = this.handleHold.bind(this); 
    }

    handleClick() {
        let dice__item = document.getElementById('dice');
        dice__item.style.visibility = "visible";
        let active1 = document.getElementById('Player1');
        let active2 = document.getElementById('Player2');
        
        let initial1 = Math.floor(Math.random() * 6) + 1;
        let initial2 = Math.floor(Math.random() * 6) + 1;
        
        if( (this.state.dice__1 === this.state.dice__2) && (this.state.isActive1 === true) ) {      active1.classList.toggle('active');
        active2.classList.toggle('active')

        this.setState( (prevState) => ({
            value1: 0,
            value2: initial1 + initial2,
            isActive1: !prevState.isActive1,
            isActive2: !prevState.isActive2,
            
        }))
        } else if( 
            (this.state.dice__1 === this.state.dice__2) && (this.state.isActive2 === true) ) {
                active1.classList.toggle('active');
                active2.classList.toggle('active')
        this.setState( (prevState) => ({
            value1: initial1 + initial2,
            value2: 0,
            isActive1: !prevState.isActive1,
            isActive2: !prevState.isActive2,
            
        }))
        }

        if(this.state.isActive1 === true) {
            this.setState(
                (prevState) => ({
                    value1: prevState.value1 +
                    initial1 + initial2,
                    value2:  0,
                })
            )
        } else {
            this.setState(
                (prevState) => ({
                    value2: prevState.value2 +
                    initial1 + initial2,
                    value1:  0,
                })
            )
        }
        this.setState(
            (prevState) => ({
                dice__1: `images/dice-${initial1}.png`,
                dice__2: `images/dice-${initial2}.png`,
            })
        )
        


       let x = this.state.value1;
        console.log(x)
    }

    handleHold() {
        let scoreHold1 = document.getElementById('scoreHold1');
        let scoreHold2 = document.getElementById('scoreHold2');
        let active1 = document.getElementById('Player1');
        let active2 = document.getElementById('Player2');
        let initial1 = Math.floor(Math.random() * 6) + 1;
        let initial2 = Math.floor(Math.random() * 6) + 1;
        let hideImage = document.getElementById('dice');
        hideImage.style.visibility = "hidden";

        if(this.state.isActive1 === true) {
            active1.classList.toggle('active')
            active2.classList.toggle('active')

            this.setState( (prevState) => ({
                value1: 0,
                value2: 0,
                scoreHold1: prevState.scoreHold1 + prevState.value1,
                isActive1: !prevState.isActive1,
                isActive2: !prevState.isActive2
                
            }))
        } else {
            active1.classList.toggle('active');
            active2.classList.toggle('active');

            this.setState( (prevState) => ({
                
                value1: 0,
                value2: 0,
                scoreHold2: prevState.scoreHold2 + prevState.value2,
                isActive1: !prevState.isActive1,
                isActive2: !prevState.isActive2,
                
            }))
        }
    }

    render(){
        
        return(
            <>
            <GameControl dice__1={this.state.dice__1} dice__2={this.state.dice__2} handleClick={ this.handleClick } handleHold={this.handleHold} />

            <Player1 Name="Player 1" hold={this.state.scoreHold1} value1={this.state.value1} scoreCur={(this.state.value1) } />

            <Player2 Name="Player 2" hold={this.state.scoreHold2} value2={this.state.value2} scoreCur={(this.state.value2)} />

            </>
            
        )
    }
}

export default GameController;