




/**
 * This function calculates the value of a card 
 * @param {String} card 
 * @returns {Number} returns the value of the card in question
 */  
export  const cardValue = ( card ) => {
    const value = card.substring(0, card.length - 1);
    // console.log('valor de carta', value);
    return ( isNaN( value ))?
        ( value === 'A') ? 11 : 10
        : value * 1 ;
}