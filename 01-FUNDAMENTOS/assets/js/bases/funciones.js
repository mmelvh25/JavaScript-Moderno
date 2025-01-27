/*

PARA QUÉ SE USA UNA FUNCIÓN?
centralizar la lógica de un procedimiento 
que se puede reutilizar varias veces o ejecutar 
varias veces

un método es una función dentro de un objeto
*/

/*
FORMAS DE DEFINIR FUNCIONES()

function saludar(nombre){  //función tradicional, no muy recomendada
    console.log('Hola ' + nombre);
}  

const saludar2 = function(nombre){  //función anónima
    console.log('Hola ' + nombre);
} 
el beneficio de una función anónima es que evita que se reutilice el 
param nombre en la app. Es como una medida de seguridad

*/

/*
todas las funciones tradicionales tienen una 
variable implícita llamada arguments.
Esta hace referencia a todos los elementos enviados a la función
*/

/*
LAMBDA FUNCTIONS O FUNCIONES DE FLECHA, ES5
más eficientes que las funciones tradicionales, 
evitan problemas con un objeto especial llamado Dist

const saludarFlecha = ( nombre) =>{
    console.log('Hola ' + nombre);    
}

const saludarFlecha = nombre =>{  //funciona pero no es buena práctica
    console.log('Hola ' + nombre);    
}

const saludarFlecha = () => {
    console.log('Holi');    
}
esto:
const sumar2 = (a,b) => a + b;
es lo mismo que esto:
const sumar2 = (a,b) => {
    return a + b
};

const getAleatorio = () => Math.random();
console.log(getAleatorio());
*/

const saludarFlecha = ( nombre) =>{
    console.log('Hola ' + nombre);    
}



saludarFlecha('Melanny');
saludarFlecha2('Melanny');

/*
RETORNO DE FUNCIONES
cuando una función no tiene un retorno explícito, se devuelve un undefined
*/