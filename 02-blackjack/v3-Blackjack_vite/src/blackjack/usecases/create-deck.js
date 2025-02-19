import _ from 'underscore';

export let message = 'this is a message';


/**
 * This function creates a new deck
 * @param {Array<String>} cardTypes 
 * @param {Array<String>} specialCards 
 * @returns {Array<String>} return new card deck
 */
export const createDeck = ( cardTypes, specialCards ) => {

    if ( !cardTypes || !cardTypes.length === 0 ) 
        throw new Error('cardTypes is demanded like a string array');
     
    if ( !specialCards || !specialCards.length === 0 ) 
        throw new Error('specialCards is demanded like a string array');


        let  deck = [];
      //i.e. = 4D, 10C....
      for( let i = 2; i <= 10; i++ ){
          for( let type of cardTypes ){
              deck.push( i + type );
          }
      }
      //i.e. = AD, KC....
      for( let type of cardTypes ){
          for (let special of specialCards){
              deck.push(special + type);
          }
      }

      deck = _.shuffle(deck);
      return deck; // returns deck reacomodated randomly
  }

 