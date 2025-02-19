

/**
 * This function cleans everything for the new game
 * @param {Number} totalPlayers 
 * @param {Array<HTMLElement>} divCards 
 * @param {Array<HTMLElement>} showedScores  
 * @param {Array<Number>} playersScores
 */
export const startGame = (totalPlayers = 2,  divCards, showedScores, playersScores) => {
      console.clear();
      
      //cleaning players score
      playersScores = [];
      for( let i = 0; i < totalPlayers; i++) {
          playersScores.push(0);
          showedScores[i].innerText = 0;
          divCards[i].innerHTML     = '';
      }
  }