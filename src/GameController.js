import React, {Component} from 'react';
import GameControl from './GameControl';
import ErrorBoundary from './ErrorBoundary';
/*import Player1 from './Player1';
import Player2 from './Player2';
*/


const Player1 = React.lazy( () => import('./Player1'))
const Player2 = React.lazy( () => import('./Player2') )

class GameController extends Component {
    constructor(props) {
        super(props);
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
            name1: 'Player 1',
            name2: 'Player 2',
            finalScore: 100,
        }

        this.handleClick = this.handleClick.bind(this);
        this.handleHold = this.handleHold.bind(this); 
        this.restartGame = this.restartGame.bind(this);
        this.handleChange = this.handleChange.bind(this)
        this.handleKeyPress = this.handleKeyPress.bind(this)

        this.inputRef = React.createRef();
    }

    handleClick() {
        let dice__item = document.getElementById('dice');
        dice__item.style.visibility = "visible";
        let active1 = document.getElementById('Player1');
        let active2 = document.getElementById('Player2');
        
        let initial1 = Math.floor(Math.random() * 6) + 1;
        let initial2 = Math.floor(Math.random() * 6) + 1;
        /*let isGamePlaying = this.state.scoreHold1 < this.state.finalScore || this.state.scoreHold2 < this.state.finalScore ? true : false; 
        */
        
         if( (initial1 === initial2) && (this.state.isActive1 === true) ) {    
             //hide dice when both dice have equal value
                /*dice__item.style.visibility = "hidden"; */
            active1.classList.toggle('active');
            active2.classList.toggle('active')

        this.setState( (prevState) => ({
            isActive1: !prevState.isActive1,
            isActive2: !prevState.isActive2,
            value1: 0,
            value2: initial1 + initial2,          
        }))
        } // Check for matching / equal dice value on Player 2 
        else if( 
            (initial1 === initial2) && (this.state.isActive2 === true) ) {
                //hide dice when both dice have equal value
                /*dice__item.style.visibility = "hidden"; */
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
        
        //Confirm dice values
       let x = initial1;
       let y = initial2;
        console.log(x , y)     
    }

    handleHold() {
        let active1 = document.getElementById('Player1');
        let active2 = document.getElementById('Player2');
        let hideImage = document.getElementById('dice');
        hideImage.style.visibility = "hidden";
        
        /*let scoreHold1 = this.state.scoreHold1 + this.state.value1;
        let scoreHold2 = this.state.scoreHold2 + this.state.value2;
        let isGamePlaying = this.state.scoreHold1 < this.state.finalScore || this.state.scoreHold2 < this.state.finalScore ? true : false; 
        */
        if(
            this.state.isActive1 === true) {
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
            name1: prompt('Please enter Player 1 name:', 'Computer') || this.state.name1,
            name2: prompt('Please enter Player 2 name:', 'Computer') || this.state.name2,
            finalScore: 100,
        })
        let active1 = document.getElementById('Player1');
        let active2 = document.getElementById('Player2');
        if(!active1.classList.contains('active')) {
            active1.classList.add('active');
            active2.classList.remove('active');
        }
    }

    //final Score
    
    handleChange() {
     /*   this.setState({
            finalScore: this.inputRef.current.value,
        })
        */
        
    }

    handleKeyPress(event) {
        if(event.which == 13) {
            this.setState({
                finalScore: this.inputRef.current.value,
        }) }
        console.log(this.state.finalScore)   
        console.log(typeof (event.which))   
    }

    componentDidMount() {
        // Game Instructions
        alert(`
        README: Instruction for the Game
        1. This game can be played by only 2 individuals at a time
        2. First player to get this.state.finalScore points from dice win the game
        3. The current player loses his current score if both dice display equal value
        4. Remember to hold your score
        5. Please enter players name on the next dialog box`
        )
       this.setState(
           (prevState) => ({
        //fall back Player name incase the user decline to enter name
            name1: prompt('Please enter Player 1 name:', 'Computer') || prevState.name1,
            name2: prompt('Please enter Player 2 name:', 'Computer') || prevState.name2,
           })
       )
    }

    componentWillUnmount(){
        
    }

    shouldComponentUpdate(nextProps, nextStates) {     
        if (nextStates.scoreHold1 > this.state.finalScore || nextStates.scoreHold2 > this.state.finalScore ) {
            let active1 = document.getElementById('Player1');
        let active2 = document.getElementById('Player2');
        active1.classList.remove('active');
        active2.classList.remove('active');
        let dice__item = document.getElementById('dice');
        dice__item.style.visibility = "hidden";
        }
        return ( ( this.state.scoreHold1 < this.state.finalScore && this.state.scoreHold2 < this.state.finalScore) ? true: false )

    }
    
    componentDidUpdate(prevProps, prevState, snapShot) {
        //console.log(prevState.finalScore)
        console.log(this.state.finalScore)
    }


    render() { 
        const control = {
            dice__1: this.state.dice__1,
            dice__2: this.state.dice__2,
            handleNewGame: this.restartGame,
            handleClick:  this.handleClick ,
            handleHold: this.handleHold,
            handleChange: this.handleChange,
            inputRef: this.inputRef,
            keyPress: this.handleKeyPress,             
        }

        const player1 = {
            Name: this.state.scoreHold1 >= this.state.finalScore ? 'WINNER': this.state.name1, 
            hold: this.state.scoreHold1,
            value1: this.state.value1, 
            scoreCur: (this.state.isActive1 === true) ?(this.state.value1) : 0 , 
        }

        const player2 = {
            Name: (this.state.scoreHold2 >= this.state.finalScore? 'WINNER': this.state.name2), 
            hold: this.state.scoreHold2, 
            value2: this.state.value2, 
            scoreCur:  (this.state.isActive2 === true) ? (this.state.value2) : 0, 
        }

        const fallback = <div> loading... players!!! Please enter player names </div>         
        
        return(
            <ErrorBoundary>
                <GameControl {...control} />

                <React.Suspense fallback={fallback} >
                    <Player1 {...player1} />    
                    
                    <Player2 {...player2} />
                </React.Suspense>
            </ErrorBoundary>
            
        )
    }
}

export default GameController;