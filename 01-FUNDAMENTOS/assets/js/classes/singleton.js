// instancia única de una clase

class Singleton {
    /* cómo se puede identificar un singleton?
    crear una propiedad static llamada instancia.
    cuando alguien trate de iniciar la clase, se
    le regresará esta propiedad.
    pero son opcionales (lin 10, 11)

    cuando se lleguen a aceptar las propiedades privadas en todos los navegadores, 
    posiblemente se creará la instancia como una propiedad privada:
    static #instancia;
    */ 
    static instancia; //si no se define, dará undefined
    nombre = '';
// lo que se hace con el constructor de una clase singleton es hacia el return del this
    constructor (nombre = ''){
        //  if there's not an instance, return the singleton class 
        if(!!Singleton.instancia){
            return Singleton.instancia;
        }

        // el this hace referencia a la instancia de la clase en este momento
        Singleton.instancia = this;
        this.nombre =  nombre;

        // un constructor puede regresar una instancia de la misma clase, 
        // pero si no se especifica, por defecto hace lo mismo,
        // return this;
    }
}
const instancia1 =  new Singleton('Mela');
const instancia2 =  new Singleton('María');
console.log(`Nombre en la instancia1 es: ${instancia1.nombre}`);
console.log(`Nombre en la instancia1 es: ${instancia2.nombre}`);