//import { divCards } from "../index";

/**
 * 
 * @param {Number} currentTurn 
 * @param {String} card 
 * @param {Array<HTMLElement>} divCards
 * @returns {HTMLImageElement} returns card image 
 */
export const createCardImage = (divCards, currentTurn, card) => {
    const imgCard = document.createElement('img');
        imgCard.src = `assets/cartas/${card}.png`;
        imgCard.classList.add('card-style');
        divCards[currentTurn].append(imgCard);
    return imgCard;
}