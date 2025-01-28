class Persona{
    
    /* se acostumbra poner las propiedades estáticas
        justo abajo del nombre de la clase
    */ 
    
    // propiedades de clase. 
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
        console.log(` ${this.codigo} dice ${this.frase}`);
    }
}

class Desconocido extends Persona {
    clan= 'sin clan';

    constructor(nombre, codigo, frase) {
        /*se debe llamar al constructor super (constructor del padre ) en clases derivadas (como esta)
            antes de acceder a cualquier propiedad que use 'this'
        */
        super(nombre, codigo, frase);//esto primero
        this.clan = 'mi casita';//esto después del super
    }


    quienSoy(){
        console.log(`Soy ${this.nombre}, ${this.clan}`);
        //si se quiere llamar algo de la clase padre, se usa super
        super.quienSoy();
    }
}
const desconocido = new Desconocido();
console.log(desconocido);
desconocido.quienSoy();



