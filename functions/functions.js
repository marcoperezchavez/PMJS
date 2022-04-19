//Functions
/*
1 - Nombre de la function
2 - parametros
3 - declaracion o el procedimiento
*/

let nombre = "Marco Perez";

function ObtenerSuma(num1, num2) {
  return num1 + num2;
}

//console.log(ObtenerSuma(10, 1));

function ImprimirNombre() {
  console.log(nombre);
}

function ImprimirEdad(edad) {
  return edad * 2;
}

//ImprimirNombre();

// console.log(ImprimirEdad(2));
// console.log(ImprimirEdad(6));
// console.log(ImprimirEdad(9));

function sobrescribirObjeto(objeto) {
  objeto.nombre = "Dado";
  return objeto.nombre;
}

let objeto2 = {
  nombre: "Lapiz",
};

//console.log(objeto2.nombre);
//console.log(sobrescribirObjeto(objeto2));

const AlCuadrado =  function (num){
    return num * num;
}

//console.log(AlCuadrado(5));

//5      5*4*3*2*1 = 120

const factorial = function fact(num){
    if(num == 0 || num == 1){
        return 1;
    } 
    return num * fact(num -1);  //5*4*3*2*1 = 120
}

// console.log(factorial(5));

// console.log(factorial(20));

// console.log(factorial(10));

// console.log(factorial(2));

const multiplicar = function (num1, num2){
    let resultado = num1 *num2;

    function Dividir(r){
        return r /2;
    }
    return Dividir(resultado)
}

//console.log(multiplicar(10, 5));

// 1 parametros
// 2 expresion o funcionalidad
let suma = (n1, n2) => n1 + n2;
let imprimir = () => "Suscribete";

let Restar = (n1 , n2) => {
    let res = n1 - n2;
    console.log(res);
}


Restar(5,1);

const CrearPersona = ( nombre1, apellido1) => ({nombre: nombre1, apellido:apellido1 });

console.log(CrearPersona("Marco", "Perez"));
console.log(CrearPersona("Maria", "Miramontes"));
console.log(CrearPersona("Abril", "Chavez"));
console.log(CrearPersona("Sofia", "Perez"));