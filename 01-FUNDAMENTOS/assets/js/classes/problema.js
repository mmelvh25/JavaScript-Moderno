function Persona(nombre, edad){
    console.log('se ejecutó está línea');
    
    this.nombre = nombre;
    this.edad   = edad;

    this.imprimir = function () {
        console.log(`Nombre: ${this.nombre} - edad: ${this.edad}`);
    }
}


const maria = new Persona('María', 18);
console.log(maria);
maria.imprimir();
