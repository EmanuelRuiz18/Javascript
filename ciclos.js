
/*  let numero = 0;
 let numero2 = 0;

do {
    numero = parseInt(prompt('Ingrese una cantidad: '));
    numero2 = parseInt(prompt('Ingrese la cantidad a sumar: '));
    let resultado = numero + numero2
    alert('El resultado de la operacion es: ' + resultado);
    pregunta = prompt('Desea hacer otra operacion? S/N: ')
} while (pregunta === 'S');
 */


/* Fin de programa 1  */


/* let nAlumnos = parseInt(prompt('Ingrese el numero de alumnos en la lista: '));

for (i = 1; i <= nAlumnos; i++) {

    let nombre = prompt('Ingresar nombre del alumno: ' + i);
    let apellido = prompt('Ingresar el apellido del alumno: ' + i);        

    let nombreCompleto = nombre +' '+ apellido;
    alert(nombreCompleto);
} */


/* Fin de programa 2 */


let numeros = parseInt(prompt("Ingrese un número mayor a cero: "))
while (numeros === 0) {
    numeros = parseInt(prompt("Ingrese un número mayor a cero: "))
}
for(i = 0; i <= numeros; i++) {
    alert("Hola");
}