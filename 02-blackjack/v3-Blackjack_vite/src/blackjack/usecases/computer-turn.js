import { askCard}          from './ask-card';
import { updateScores}     from './update-scores';
import { determineWinner } from './determine-winner';
import { createCardImage } from './create-card-image';



/**
 * 
 * @param {Number} minPoints min Points needed for the computer to win
 * @param {Array<String>} deck 
 * @param {Array<Number>} playersScores
 */
export const computerTurn = (minPoints, deck=[], playersScores, showedScores, divCards) =>{

    if( !minPoints )
        throw new Error('minPoints is needed');

      let computerScore = 0;

      do{
          const card = askCard(deck);

          computerScore= updateScores( playersScores.length - 1, card, playersScores, showedScores );
          createCardImage(divCards, playersScores.length - 1, card);
          
      } while( (computerScore < minPoints) && (minPoints <= 21 ) );

      determineWinner(playersScores);
  }