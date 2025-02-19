
/**
 * This function shows who is the winner
 * @param {Array<Number>} playersScores 
 */
export const determineWinner = (playersScores) => {
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
    }, 1000);
}
