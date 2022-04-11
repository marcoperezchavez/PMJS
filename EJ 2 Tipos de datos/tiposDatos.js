/*
Tipos de datos
PMFOX Technologies
*/

//var let const

// 8 tipos de datos
//string o cadena de carcteres
let nombre = "MARCO PEREZ "; 
let apellido = String('Perez');
let empresa = new String("PMFOX technologies");

let nombreCompleto = nombre + " " + apellido + " " + "de la empresa:" + " " + empresa;
let nombreComplet2 = `${nombre} ${apellido} de la empresa: ${empresa}`;

let edad2 = 30;
let edadS = edad2.toString();

//console.log(edadS);
/*
console.log(nombre);
console.log(apellido);
console.log(empresa.toString());
*/

//Number 
let edad = 5;
let peso = 21;
let estatura = 8.4;
let porcentaje = .20;
let total = edad + estatura;
let pesoS = "30";
let pesoNum = parseInt(pesoS);

//NaN
let errorNan = edad * undefined;

/*
console.log(Number('10'));
console.log(Number(''));
console.log(Number(undefined));
console.log(Number(null));
console.log(Number('767Marco'));
console.log(Number(false));
console.log(Number(true));
console.log(Number({}))
console.log(Number([]));
*/


/*
console.log(edad);
console.log(peso);
console.log(estatura);
console.log(porcentaje);
console.log(total);
*/
//BigInt
let numeroGrande = 23232323239399393939393939393949299n;

let nBig = BigInt("23238273827837286381939626423342");


//console.log(nBig);

//Boolean  true false
/*
let tieneHijos = true;
let estaCasado = false;
let vaALaEscuela = false;
console.log(tieneHijos);
console.log(estaCasado);
console.log(vaALaEscuela);
*/
//null 

let nada = null;
//console.log(nada);
//undefined
let tiempo;
let nombreEscuela;

/*
console.log(tiempo);
console.log(nombreEscuela);
*/
//Symbol

let nombre2 = Symbol("Marco");
let nombreCopia = Symbol("Marco");

let res = nombre2 == nombreCopia;

/*
console.log(nombre2);
console.log(nombreCopia);
console.log(res);
*/
//Objeto == 

let persona = {
    nombre: "Juan",
    apellido: "Perez",
    edad: 20,
    nacionalidad: "Mexicano",
    esEstudiante: false
}

let persona2 = {nombre:"Panfilo", apellido: "Chavez" }

let numeros = [1,2,3,2,3,5,1,3,4,2];
let nombres = ["panfilo","juan","maria","abril","sofia","marco"]

//console.log(persona2);