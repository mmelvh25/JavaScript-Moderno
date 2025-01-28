class Rectangulo{
    // # para poner las propiedades 
    #area = 0;
    constructor(base = 0, altura = 0){
        this.base   = base;
        this.altura = altura;
        this.#area   = base * altura;
    }

    calcularArea(){
        console.log(this.#area * 2);
    }
}

const rectangulo = new Rectangulo(10, 15);
rectangulo.#area = 90; //a como se ve, no se puede modificar fuera de la clase
rectangulo.calcularArea();
console.log(rectangulo);
