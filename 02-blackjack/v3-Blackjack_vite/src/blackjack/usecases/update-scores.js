  import { cardValue } from "./value-card";
  
  
  /**
   * This function updates the score of the actual player
   * @param {Number} currentTurn 
   * @param {String} card 
   * @param {Array<Number>} playersScores
   * @param {Array<HTMLElement>} showedScores
   * @returns {Array<Number>} returns an array with the players scores
   */
  export const updateScores = ( currentTurn, card, playersScores, showedScores) => {
      let valorrrr= cardValue(card);
      // console.log('valor acá', valorrrr);
      playersScores[currentTurn] += valorrrr;
      // console.log('valor de playersScore', playersScores[currentTurn]);
      showedScores[currentTurn].innerText = playersScores[currentTurn];
      return playersScores[currentTurn];
  }