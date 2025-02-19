import _ from 'underscore';
import {createDeck, askCard, cardValue, updateScores, computerTurn, createCardImage, startGame} from './usecases'

  let deck       = [];
  const types    = ['C', 'D', 'H', 'S'],
        specials = ['A', 'J', 'Q', 'K'];

  // The last element of the array will always represent the computer's score.
 let playersScores = [];


  //HTML References
  const btnAskCard       = document.querySelector('#btnAskCard'),
        btnStop          = document.querySelector('#btnStop'),
        btnNewGame       = document.querySelector('#btnNewGame');

  const divCards   = document.querySelectorAll('.divCards'),
        showedScores     =  document.querySelectorAll('small');



  //TODO: create another function with the logic inside btnAskCard event 

  //When clicked Ask Card Button...
  btnAskCard.addEventListener('click', () => {
      const card = askCard(deck);
      // console.log('esta es la carta en el index: ', card);
      // console.log('este es el deck en index: ', deck)
      const playerScore = updateScores(0, card, playersScores, showedScores);
      // console.log(playerScore);
      createCardImage(divCards, 0, card);

      if(playerScore > 21){
          computerTurn( playerScore, deck, playersScores, showedScores, divCards);
          
          console.warn('You lost');
          btnAskCard.disabled = true;
          btnStop.disabled    = true;


      }else if(playerScore === 21){
          computerTurn( playerScore, deck, playersScores, showedScores, divCards);
          console.log('21, cool! You won!');
          btnAskCard.disabled = true;
          btnStop.disabled    = true;
      }
    /*   else if(playerScore === 21  && playerScore === 21){
         computerTurn( playerScore, deck, playersScores, showedScores, divCards);
         console.log('It is a tie!');
         btnAskCard.disabled = true;
         btnStop.disabled    = true;
         }
    */ 
  } )

  //When clicked Stop Button...
  btnStop.addEventListener('click', () => {
      btnAskCard.disabled = true;
      btnStop.disabled    = true;
      
      computerTurn(playersScores[0], deck, playersScores, showedScores, divCards);
  })


  btnNewGame.addEventListener('click', ()=>{
   
    console.clear();
    let totalPlayers = 2;

    //cleaning players score
    playersScores = [];
    for( let i = 0; i < totalPlayers; i++) {
        playersScores.push(0);
        showedScores[i].innerText = 0;
        divCards[i].innerHTML     = '';
    }


   // startGame( divCards, showedScores, playersScores);
    deck = createDeck( types, specials );

    btnAskCard.disabled = false;
    btnStop.disabled    = false;
  })