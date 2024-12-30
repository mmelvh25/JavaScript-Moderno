/*
 2C= Two of Clubs
 2D= Two of Diamonds
 2H= Two of Hearts
 2S= Two of Spades
*/

let deck=[];
const tipos=['C', 'D', 'H', 'S'];
const especiales= ['AS', 'J', 'Q', 'K'];

let puntosJugador=0;
let puntosComputadora=0;

// Referencias del HTML
const btnPedir= document.querySelector('#btnPedir');
const btnDetener= document.querySelector('#btnDetener');
const btnNuevo= document.querySelector('#btnNuevo');

const divCartasJugador= document.querySelector('#jugador-cartas');
const divCartasComputadora= document.querySelector('#computadora-cartas');

const puntosHTML= document.querySelectorAll('small');

const crearDeck= () => {
   for(let i = 2; i <= 10; i++ ){
         for(let tipo of tipos){
            deck.push(i + tipo);

         }
   }
   for (let tipo of tipos){
      for (let esp of especiales){
         deck.push(esp + tipo);
      }
   }
 
   deck= _.shuffle(deck);
   console.log( deck );
   return deck;
}

crearDeck();

const pedirCarta = () => {
   if(deck.length === 0){
      throw 'No hay cartas en el deck';   
   }
   const carta= deck.pop();
   return carta;
}

/* // para probar que pedirCarta() funciona:
 for(let i=0; i<=100; i++ ){
    pedirCarta();
 }*/

const valorCarta= (carta) => {
   // en JS, todos los string pueden ser trabajados como arreglos
   const valor= carta.substring(0,carta.length-1);
   // console.log({valor});
   // usar una expresión regular y manejar los primeros valor sin pensar en los tipo de cartas?
   
   return ( isNaN( valor ) ) ?
            (valor === 'A' ) ? 11 : 10 
            : valor * 1; // se multiplica por 1 para eliminar el problema de valor como string
   /*
   DATO:
   cuando un número es color gris en la consola 
   del navegador, es un string.
   si es color morado, es int
   --una solución es multiplicar el número por 1 
   para tener su versión numérica
   */ 

}
//  TURNO DE LA COMPU   
const turnoComputadora = (puntosMinimos) =>  {
   do {
      const carta= pedirCarta();
      
      puntosComputadora += valorCarta(carta);
      puntosHTML[1].innerText= puntosComputadora;

      const imgCarta= document.createElement('img');
      imgCarta.src= `assets/cartas/${ carta }.png`;
      imgCarta.classList.add('carta');
      divCartasComputadora.append(imgCarta);

      if(puntosMinimos > 21 ){
         break;
      }
   } while ((puntosComputadora < puntosMinimos) && (puntosMinimos <= 21));

   setTimeout(()=> {
      if(puntosComputadora === puntosMinimos){
         alert('Nadie gana');
      }else if( puntosMinimos > 21 ){
         alert('Computadora gana');
      } else if(puntosComputadora > 21){
         alert('Jugador gana');
      }else{
         alert('Computadora gana');
      }
   
   },100) ;
   
   
}


// const valor= valorCarta(pedirCarta());
// console.log({valor});

// EVENTOS

/*
funciones que se colocan como un argumento a otra función, 
son conocidas como callback
función que se manda como argumento
*/ 

// EVENTO
btnPedir.addEventListener('click', () => {
   const carta= pedirCarta();

   puntosJugador= puntosJugador + valorCarta(carta);
   puntosHTML[0].innerText= puntosJugador;

   const imgCarta= document.createElement('img');
   imgCarta.src= `assets/cartas/${carta}.png`;
   imgCarta.classList.add('carta');
   divCartasJugador.append(imgCarta);

   if ( puntosJugador > 21 ) {
      console.warn('Perdiste');
      btnPedir.disabled= true;
      btnDetener.disabled = true;
      turnoComputadora(puntosJugador);

   } else if( puntosJugador ===21 ) {
      console.warn('21, Ganaste!');
      btnPedir.disabled= true;
      btnDetener.disabled = true;
      turnoComputadora( puntosJugador );
   }
})


btnDetener.addEventListener('click', () => {
   btnPedir.disabled=true;
   btnDetener.disabled=true;
   
   turnoComputadora(puntosJugador);
})


btnNuevo.addEventListener('click', ()=>{
   deck=[];
   deck=crearDeck();
  
   puntosComputadora=0;
   puntosJugador=0;

   puntosHTML[0].innerText=0;
   puntosHTML[1].innerText=0;

   divCartasComputadora.innerHTML = '';
   divCartasJugador.innerHTML = '';

   btnPedir.disabled=false;
   btnDetener.disabled=false;
})