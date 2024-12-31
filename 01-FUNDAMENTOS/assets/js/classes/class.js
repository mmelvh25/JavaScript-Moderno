// todas las clases usan 'use strict' por defecto
class Persona{
    // propiedades de clase. 
    nombre = '';
    codigo = '';
    frase  = '';
    comida = '';
    
    constructor(nombre = 'Sin nombre', codigo = 'Sin código', frase = 'Sin frase'){
        this.nombre = nombre;
        this.codigo = codigo;
        this.frase  = frase;
    }

    quienSoy(){
        console.log(`Soy ${this.nombre} y mi identidad es ${this.codigo}`);
    }

    miFrase(){
        console.log(` ${this.codigo} dice ${this.frase}`);
    }
}

const sujeto = new Persona('LAS', 'hombre enamorado', 'soy un hombre enamorado');
sujeto.quienSoy();
sujeto.miFrase();

