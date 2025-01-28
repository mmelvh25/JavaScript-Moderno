//función con el nombre iniciando en mayúscula 
// para crear objetos
function Persona(nombre, edad){
    console.log('se ejecutó está línea');
    
    this.nombre = nombre;
    this.edad   = edad;

    this.imprimir = function () {
        console.log(`Nombre: ${this.nombre} - edad: ${this.edad}`);
    }
}


const maria = new Persona('María', 18); //nueva instancia
console.log(maria);
maria.imprimir();


/*ESTA ES UNA MANERA DE ASEMEJAR POO, SIN EMBARGO YA NO SE USA
A MENOS QUE SE BUSQUE COMPATIBILIDAD CON NAVEGADORES VIEJOS (8 AÑOS ATRÁS)*/



