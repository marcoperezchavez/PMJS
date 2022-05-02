//If
let edad = 18;

if(edad >= 10 && edad < 18){
    //console.log("Eres mayor o igual de 10");
}

if(edad < 10){
    //console.log("Eres menor de 10");
}

if (edad == 18){
    //console.log("Eres mayor de edad");
}

//IF   else
let edad2 = 10;

if(edad2 >= 10){
    //console.log("Eres mayor o igual de 10");
} else {
    //console.log("Eres mayor de edad");
}

// else if

let edad5 = 18;

if(edad5 > 10 && edad != 18){
    //console.log("Eres mayor de 10");
} else if(edad5 == 10) {
    //console.log("Tienes 10 de edad");
} else if (edad == 18){
    //console.log("tienes 18")
}
else {
    //console.log("Eres mayor de edad");
}

//Operadores ternarios


let edad6 = 2;

/*
edad6 > 10 && edad6 != 18 ? console.log("tienes mas de 10") 
            : edad6 == 10 ? console.log("Tienes 10 de edad") 
                : edad6 == 18 ? console.log("tienes 18") 
                    : console.log("Eres mayor de edad");
*/
//Switch
let edad7 = 18;

switch(true){
    case edad7 > 10 && edad != 18:
        console.log("tienes mas de 10") 
        break;
    case edad7 == 10:
        console.log("Tienes 10 de edad")
        break;
    case edad7 == 18:
        console.log("tienes 18") 
        break;
    default:
        console.log("Eres mayor de edad");

}

let animal = 'Loro';


switch(animal.toLowerCase()){
    case 'cocodrilo':
        console.log('carnivoro');
        break;
    case 'loro':
        console.log('herbivoro');
        break;
    case 'leon':
        console.log('carnivoro');
        break;
}



