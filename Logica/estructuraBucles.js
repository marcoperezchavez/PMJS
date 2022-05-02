//for



for(let i = 0; i<10; i++){
   // console.log(i);
}

//console.log("Ya termine y suscribete")

let numero = 10;
// while

while(numero < 10){
    console.log(numero);
    numero++;
}

//console.log("Ya termine y suscribete")
//do while
do{
    //console.log(numero);
    numero++;
}while(numero<10)
//console.log(`Ya termine y suscribete - valor de numero: ${numero}`)
//for in

let Personas  = ['Marco','Perez', 11];
for(let persona in Personas){
    console.log(persona);
}

// for of
console.log("/////////////////");
let Personas2 = ['Marco','Perez', 11];

for(let persona2 of Personas2){
    console.log(persona2);
}


//foreach
console.log("/////////////////");
Personas.forEach(persona=> console.log(persona));


console.log("***********");
//continue
for(let x = 0; x<5; x++){
    if(x ==2){
        continue;
    }
    console.log(x);
}
console.log("activa la campanita");
//break