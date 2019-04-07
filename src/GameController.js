import React, {Component} from 'react';
import GameControl from './GameControl';
/*import Player1 from './Player1';
import Player2 from './Player2';
*/


const Player1 = React.lazy( () => import('./Player1'))
const Player2 = React.lazy( () => import('./Player2') )

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
        this.restartGame = this.restartGame.bind(this);
    }

    handleClick() {
        let dice__item = document.getElementById('dice');
        dice__item.style.visibility = "visible";
        let active1 = document.getElementById('Player1');
        let active2 = document.getElementById('Player2');
        
        let initial1 = Math.floor(Math.random() * 6) + 1;
        let initial2 = Math.floor(Math.random() * 6) + 1;
        
        if( (initial1 === initial2) && (this.state.isActive1 === true) ) {    
            dice__item.style.visibility = "hidden";  active1.classList.toggle('active');
            active2.classList.toggle('active')

        this.setState( (prevState) => ({
            isActive1: !prevState.isActive1,
            isActive2: !prevState.isActive2,
            value1: 0,
            value2: initial1 + initial2,          
        }))
        } else if( 
            (initial1 === initial2) && (this.state.isActive2 === true) ) {
                dice__item.style.visibility = "hidden"; 
                active1.classList.toggle('active');
                active2.classList.toggle('active')
        this.setState( (prevState) => ({
            isActive1: !prevState.isActive1,
            isActive2: !prevState.isActive2,
            value1: initial1 + initial2,
            value2: 0,
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
        
       let x = initial1;
       let y = initial2;
        console.log(x , y)
        
    }

    handleHold() {
        let active1 = document.getElementById('Player1');
        let active2 = document.getElementById('Player2');
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

    restartGame() {
        // reset all state attributes back to zero
        this.setState({
            value1: 0,
            value2: 0,
            scoreHold1: 0,
            scoreHold2: 0,
            isActive1: true,
            isActive2: false,
        })
        let active1 = document.getElementById('Player1');
        let active2 = document.getElementById('Player2');
        if(!active1.classList.contains('active')) {
            active1.classList.add('active');
            active2.classList.toggle('active');
        }
    }

    componentDidMount() {
       
    }

    componentWillUnmount(){
       
    }
   

    render(){ 
   
        return(
            <>
            <GameControl dice__1={this.state.dice__1} dice__2={this.state.dice__2} handleNewGame={this.restartGame} handleClick={ this.handleClick } handleHold={this.handleHold} />

            <React.Suspense fallback={ <div> loading...</div>} >
            <Player1 Name={this.state.scoreHold1 >= 100? 'WINNER': "Player 1"} hold={this.state.scoreHold1} value1={this.state.value1} scoreCur={(this.state.isActive1 === true) ?(this.state.value1) : 0 } />
            
            
            <Player2 Name={this.state.scoreHold2 >= 100? 'WINNER': "Player 2"} hold={this.state.scoreHold2} value2={this.state.value2} scoreCur={ (this.state.isActive2 === true) ? (this.state.value2) : 0} />
            </React.Suspense>
            </>
            
        )
    }
}

export default GameController;