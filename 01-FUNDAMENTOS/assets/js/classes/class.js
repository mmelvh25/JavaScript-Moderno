/*
******************** PROPIEDADES, GETS Y MÉTODOS STATIC ****************************************
*/


// todas las clases usan 'use strict' por defecto
//para indicar que es una clase, poner el nombre en Open Camel Case
class Persona{
    
    /* se acostumbra poner las propiedades estáticas
        justo abajo del nombre de la clase
    */ 
    static _conteo = 0;

    static get conteo(){
        return Persona._conteo + ' instancia(s)'
    };

    static mensaje(){
        console.log('Este es un método static');
        console.log('Al ser un método estático, el valor de esta propiedad ' + this.nombre + ' será undefined');
    }

    
    // propiedades de la clase. 
    nombre = '';
    codigo = '';
    frase  = '';
    comida = '';

    constructor(nombre = 'Sin nombre', codigo = 'Sin código', frase = 'Sin frase'){
        this.nombre = nombre;
        this.codigo = codigo;
        this.frase  = frase;
        Persona._conteo++;
    }

    // los set no pueden tener el mismo nombre 
    // de la propiedad a la que se le establece
    set setComidaFavorita(comida){ 
        this.comida= comida.toUpperCase();
    }

    get getComidaFavorita(){
        return `La comida favorita de ${this.nombre} es ${this.comida}`
    }

    quienSoy(){
        console.log(`Soy ${this.nombre} y mi identidad es ${this.codigo}`);
    }

    miFrase(){
        this.quienSoy();
        console.log(` ${this.codigo} dice ${this.frase}`);
    }
}

const sujeto = new Persona('Lana', 'este es el código de Lana', 'Esta es la frase de Lana');
sujeto.quienSoy();
sujeto.miFrase();
sujeto.setComidaFavorita = 'Ninguna, está a dieta'; //Así se llama un set en JS
console.log(sujeto.getComidaFavorita);

//Persona._conteo = 2;
console.log('Conteo de Persona instancias desde la propiedad estática: ', Persona._conteo);
//aquí se está llamando al get stático
console.log('Conteo de Persona instancias con el get estático: ', Persona.conteo); 

//aquí se llama el método static. A estos también se les puede mandar argumentos
Persona.mensaje();

//También se puede hacer esto, pero solo existirá en sujeto y en ningún otra instancia del objeto Persona
sujeto.colorFavorito = 'Verde';
console.log(sujeto);

//Además, es posible definir propiedades estáticas fuera de la clase. 
//no es recomendable
Persona.propiedadEstaticaExterna = 'Esto es una propiedad estática externa';
console.log(Persona.propiedadEstaticaExterna);
console.log(Persona);