
const miModulo = (()=>{
   
   /*
   'use strict' indica a JS que evalúe estrictamente el código, 
   ayuda a que el código sea más limpio.
   Es recomendado usarla con funciones anónimas autoinvocadas
   */ 
   'use strict'
   
      let deck         = [];
      const tipos      = ['C', 'D', 'H', 'S'],
            especiales = ['A', 'J', 'Q', 'K'];

      // let puntosJugadores = [0,0,0]; posiciones de jugadores
      let puntosJugadores = [];

      // Referencias del HTML
      const btnPedir   = document.querySelector('#btnPedir'),
            btnDetener = document.querySelector('#btnDetener'),
            btnNuevo   = document.querySelector('#btnNuevo');

      const divCartasJugadores = document.querySelectorAll('.divCartas'),
            puntosHTML = document.querySelectorAll('small');

      const inicializarJuego = (numJugadores = 2) =>{
            crearDeck();

            puntosJugadores = [];
            for(let i= 0; i < numJugadores; i++){
               puntosJugadores.push(0);
            }

            puntosHTML.forEach(elem => elem.innerText = 0 );
            divCartasJugadores.forEach(elem => elem.innerHTML = '' );
      
            btnPedir.disabled   = false;
            btnDetener.disabled = false;
         }

      const crearDeck = () => {
         deck = [];
         for( let i = 2; i <= 10; i++ ){
               for(let tipo of tipos){
                  deck.push(i + tipo);
               }
         }
         for (let tipo of tipos){
            for (let esp of especiales){
               deck.push(esp + tipo);
            }
         }
      
         return _.shuffle(deck);
      }

      const pedirCarta = () => {
         if(deck.length === 0){
            throw 'No hay cartas en el deck';   
         }
         return deck.pop();
      }


      const valorCarta= (carta) => {
         // en JS, todos los string pueden ser trabajados como arreglos
         const valor= carta.substring(0,carta.length-1);
         // const valor2= carta.slice(0,-1); 
         return ( isNaN( valor ) ) ?
                  (valor === 'A' ) ? 11 : 10 
                  : valor * 1; // se multiplica por 1 para eliminar el problema de valor como string
        
      }

      // Turno: 0 = primer jugador y el último será la computadora 
      const acumularPuntos = (carta, turno) => {
         puntosJugadores[turno]  += valorCarta(carta);
         puntosHTML[turno].innerText = puntosJugadores[turno];
         return puntosJugadores[turno];
      }

      const crearCarta = (carta, turno) => {
         const imgCarta= document.createElement('img');
         imgCarta.src= `assets/cartas/${ carta }.png`;
         imgCarta.classList.add('carta');
         divCartasJugadores[turno].append(imgCarta);
      }
      
      const determinarGanador = () => {
         // destructuracion de arreglos
         const [puntosMinimos, puntosComputadora] = puntosJugadores;
         
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
      


      //  TURNO DE LA COMPU   
      const turnoComputadora = (puntosMinimos) =>  {
        
         let puntosComputadora = 0;

         do {
            const carta= pedirCarta();
            puntosComputadora = acumularPuntos(carta, puntosJugadores.length - 1);
            crearCarta(carta, puntosJugadores.length - 1);
      
         } while ( (puntosComputadora < puntosMinimos) && (puntosMinimos <= 21) );
         
         determinarGanador();  
      }


// Eventos
      btnPedir.addEventListener('click', () => {
         
         const carta = pedirCarta();
         const puntosJugador = acumularPuntos(carta, 0);
         
         crearCarta(carta, 0);

         if ( puntosJugador > 21 ) {
            console.warn('Perdiste');
            btnPedir.disabled= true;
            btnDetener.disabled = true;
            turnoComputadora( puntosJugador );

         } else if( puntosJugador === 21 ) {
            console.warn('21, Ganaste!');
            btnPedir.disabled   = true;
            btnDetener.disabled = true;
            turnoComputadora( puntosJugador );
         }
      })


      btnDetener.addEventListener('click', () => {
         btnPedir.disabled   = true;
         btnDetener.disabled = true;
         
         turnoComputadora( puntosJugadores[0] );
      })


      // btnNuevo.addEventListener('click', ()=>{
         
      //    inicializarJuego();

      // });

      // lo que se retorne aquí será lo único público de este patrón
      // y solo será accedido desde miModulo
      return { 
        nuevoJuego: inicializarJuego
      };
})();



