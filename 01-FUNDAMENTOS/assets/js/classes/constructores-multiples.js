

class Persona{

    // este método estático crea una nueva instancia de Persona pero utilizando
    // el mismo constructor y argumento diferente
    static porObjeto({nombre, apellido, pais}){ //para los argumentos se está usando la desestructuración de objetos
        return new Persona(nombre, apellido, pais);
    }


    constructor(nombre, apellido, pais){
        this.nombre   = nombre;
        this.apellido = apellido;
        this.pais     = pais;
    }
    
    getInfo(){
        console.log(`info: ${this.nombre}, ${this.apellido}, ${this.pais}`);
    }
}

const nombre1  = 'Melanny',
      apellido = 'Vargas',
      pais     = 'CR';

const persona1 = new Persona(nombre1, apellido, pais);


const dvar = {
    nombre: 'Dignora',
    apellido: 'Vargas',
    pais: 'CR'
}
// se envía y crea otro objeto pero usando el método estático
const persona2 =  Persona.porObjeto(dvar);


persona1.getInfo();
persona2.getInfo();