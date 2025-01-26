
const myModule = ( () => {
    'use strict';

    let deck       = [];
    const types    = ['C', 'D', 'H', 'S'],
          specials = ['A', 'J', 'Q', 'K'];

    // The last element of the array will always represent the computer's score.
    let playersScores = [];

    //HTML References
    const btnAskCard       = document.querySelector('#btnAskCard'),
          btnStop          = document.querySelector('#btnStop'),
          btnNewGame       = document.querySelector('#btnNewGame');

    const divCards         = document.querySelectorAll('.divCards'),
          showedScores     =  document.querySelectorAll('small');

    //Starts game
    const startGame = (totalPlayers = 2 ) => {
        console.clear();
        deck = createDeck();

        //cleaning players score
        playersScores = [];
        for( let i = 0; i < totalPlayers; i++) {
            playersScores.push(0);
            showedScores[i].innerText = 0;
            divCards[i].innerHTML     = '';
        }

        btnAskCard.disabled = false;
        btnStop.disabled    = false;
    }

    //Creates new deck
    const createDeck = () => {
         deck = [];
        //i.e. = 4D, 10C....
        for( let i = 2; i <= 10; i++ ){
            for( let type of types ){
                deck.push( i + type );
            }
        }
        //i.e. = AD, KC....
        for( let type of types ){
            for (let special of specials){
                deck.push(special + type);
            }
        }
        return _.shuffle(deck); // returns deck reacomodated randomly
    }

    //Allows to take a new card
    const askCard = () => {
        if(deck.length === 0 ){
            throw 'No more cards left in the deck'
        }
        // console.log(deck.pop())
        return deck.pop();
    }

    //Calculates the card value
    const cardValue = ( card ) => {
        const value = card.substring(0, card.length - 1);
        return ( isNaN( value ))?
            ( value === 'A') ? 11 : 10
            : value * 1 ;
    } 

    const updateScores = ( currentTurn, card) => {
        playersScores[currentTurn] += cardValue(card);
        showedScores[currentTurn].innerText = playersScores[currentTurn];
        return playersScores[currentTurn];
    }

    const createCardImage = (currentTurn, card) => {
        const imgCard = document.createElement('img');
            imgCard.src = `assets/cartas/${card}.png`;
            imgCard.classList.add('card-style');
            divCards[currentTurn].append(imgCard);
    }

    const determineWinner = () => {
        const [playerScore, computerScore] = playersScores;

        setTimeout(() => {
            if( computerScore === playerScore){
                alert('IT IS A TIE!');

            }else if(playerScore > 21 ){
                alert('COMPUTER WON!');

            }else if(computerScore > 21 ){
                alert('PLAYER 1 WON!');

            }else {
                alert('COMPUTER WON!');
            }
        }, 100);
    }

    const computerTurn = (minPoints) =>{
        let computerScore = 0;

        do{
            const card = askCard();

            computerScore= updateScores( playersScores.length - 1, card);
            createCardImage( playersScores.length - 1, card);
            
        } while( (computerScore < minPoints) && (minPoints <= 21 ) );

        determineWinner();
    }


    //TODO: create another function with the logic inside btnAskCard event 

    //When clicked Ask Card Button...
    btnAskCard.addEventListener('click', () => {
        const card = askCard();
        const playerScore = updateScores(0, card);

        createCardImage(0, card);

        if(playerScore > 21){
            computerTurn( playerScore );
            console.warn('You lost');
            btnAskCard.disabled = true;
            btnStop.disabled    = true;


        }else if(playerScore === 21){
            computerTurn( playerScore );
            console.log('21, cool! You won!');
            btnAskCard.disabled = true;
            btnStop.disabled    = true;
        }
    } )

    //When clicked Stop Button...
    btnStop.addEventListener('click', () => {
        btnAskCard.disabled = true;
        btnStop.disabled    = true;
        
        computerTurn(playersScores[0]);
    })


    return {
        newGame : startGame
    };

}) ();

