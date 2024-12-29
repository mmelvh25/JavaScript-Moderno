//relación entre objetos y cómo romperla?
/*
TODOS LOS PRIMITIVOS SE PASAN POR VALOR
cuando se trabaja con primitivos, cualquier tipo de asignación,
como la de abajo, o cuando se envía una función como argumento, 
SE MANDA POR VALOR!!!!
Es decir, no importa si transformamos la variable o le asignamos a otra cosa, 
no estamos afectando el mismo lugar de memoria, únicamente se pasa el valor */

let a = 10;
let b = a;


/* TODOS LOS OBJETOS SE PASAN POR REFERENCIA 
en JS, todos los objetos son pasados por referencia
en JS, todo es objeto excepto los primitivos
ejemplo a continuación:
*/
let juan ={nombre:'Juan'};
let ana = juan;
ana.nombre='Ana';
console.log({juan, ana});
/*
lo que se imprime:  
{juan: {…}, ana: {…}}
ana: {nombre: 'Ana'}
juan: {nombre: 'Ana'}
[[Prototype]]: Object
*/

/*otro ejm
const cambiaNombre = (persona) =>{
    persona.nombre ='Tony';
    return persona;
}
let peter = {nombre:'Peter'};
let tony = cambiaNombre(peter);
console.log({peter, tony});
*/
/*
lo que se imprime:  
{peter: {…}, tony: {…}}
peter: {nombre: 'Tony'}
tony: {nombre: 'Tony'}
[[Prototype]]: Object
*/

//cómo se arregla?
const cambiaNombre = ({...persona}) =>{
    persona.nombre ='Tony';
    return persona;
}
let peter = {nombre:'Peter'};
let tony = cambiaNombre(peter);
console.log({peter, tony});
