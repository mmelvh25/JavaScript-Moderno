 
 
 


/**
 * 
 * @param {Array<String>} deck 
 * @returns {String} returns the picked card on the deck
 */
 export const askCard = (deck) => {
    if(!deck || deck.length === 0 ){
        throw 'No more cards left in the deck'
    }
    let cardPopped = deck.pop();
    // console.log(cardPopped);
    // console.log(deck);
    return cardPopped;
}