
function crearPersona(nombre, apellido){
    return {
        nombre, //nombre: nombre,
        apellido //apellido:apellido
    }
}
/*
--------------TIP 1----------------------
cuando se quiere retornar algo en un objeto y el nombre
de la propiedad es exactamente el mismo que el nombre
de la variable a la cual se quiere hacer la impresión,
no hace falta que se especifiquen nombre:nombre dos veces,
basta que solo se ponga el nombre de la propiedad
*/
const persona = crearPersona('Melanny', 'VH');
//console.log(persona);

/*
/* 
--------------TIP 2----------------------

AHORA COMO FUNCION FLECHA

const  crearPersona2 = (nombre, apellido) => {
     return {nombre, apellido}
 }

/*de esta forma, uno se asegura que sea claro 
qué es lo que uno quiere para retornar y 
qué no es el cuerpo de la función*/
const  crearPersona2 = (nombre, apellido) => ({nombre, apellido});

console.log(crearPersona2('Melanny', 'VaHe'));


/*
--------------TIP 3----------------------
imprimir el objeto que viene tradicionalmente en las funciones
llamado arguments*/

function imprimeArgumentos(){
    console.log(arguments);
}
imprimeArgumentos();

/*

/const imprimeArgumentos2 = (args) => { //así solo se imprimiría el primer elemento
//   console.log(args);
//}
pero, así se imprimen todos
esto hace referencia a un PARAM REST, el cual dice que todos los argumentos
que sean enviados al argumento2 "crea un arreglo con cada uno de ellos";
sin embargo,
con el param REST no puede venir ningún otro param, sino dará error;
también,
tomará el primer elemento como parte de un param, ejm:

const imprimeArgumentos2 = (edad,...args) => { 
    console.log({edad, args}); //10 será edad
}
imprimeArgumentos2(10,true, false, 'Melanny');
*/

const imprimeArgumentos2 = (...args) => { 
    return args;
}
const [casado, viudo, nombre, saludo]= imprimeArgumentos2(10,true, false, 'Melanny');
console.log({casado, viudo, nombre, saludo});
/*
imprime esto 
{casado: 10, viudo: true, nombre: false, saludo: 'Melanny'}
casado: 10
nombre: false
saludo: "Melanny"
viudo: true
 */

const {apellido: nuevoApellido} = crearPersona('Mel', 'Vargas');
console.log({nuevoApellido});


/* 
--------------TIP 4----------------------
DESESTRUCTURACIÓN DE ARGUMENTOS

el ejemplo de tony stark en el archivo js del cod fuente

*/