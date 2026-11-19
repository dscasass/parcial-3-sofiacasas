/* 
Danna sofia casas sanchez
Grupo 1
Problema c:Factura de energía eléctrica con subsidio y contribución por estrato
*/

let consumo = parseFloat(prompt("ingrese el consumo de energia electrica en kwh:"));
let estrato = parseInt(prompt("Ingrese el estrato (1, 2, 3, 4, 5 o 6):"));

let tarifabase= 0.5; //tarifa base por kwh
let subsidio= 0; //subsidio por estrato
let contribucion= 0; //contrubucion por estrato


const tarifas = { //subsidios x estrato
    1: 0.3,
    2: 0.2,
    3: 0.1
};

const contribuciones = { //contribuciones x estrato
    4: 0.1,
    5: 0.2,
    6: 0.3
};

const validestratos = [1, 2, 3, 4, 5, 6]; //estratos validos

if (!validestratos.includes(estrato)) {
    console.log("Estrato no válido. Por favor, ingrese un estrato entre 1 y 6.");
} else {

}

const subsidio = tarifas[estrato] //0;


switch(estrato){
    case 1:
        subsidio = 0.3;
        break;
    case 2:
        subsidio = 0.2;
        break;
    case 3:
        subsidio = 0.1;
        break;
    default:
        subsidio = 0;
}

switch(estrato){
    case 4:
        contribucion = 0.1;
        break;
    case 5:
        contribucion = 0.2;
        break;
    case 6:
        contribucion = 0.3;
        break;
    default:
        contribucion = 0;
}

let total = consumo * tarifabase * (1- subsidio + contribucion);
console.log("el total a pagar por el consumo de energia electrica es: " + total.toFixed(2) + " pesos"); //tofixed para mostrar el valor redondeado o a dos decimales
let mesaje = "el consumo de energia electrica es: " +consumo + " kwh, el estrato es: " + estrato + ", el subsidio aplicado es : " + (subsidio*100)+ "%, la contribucion aplicada seria: " + (contribucion*100) + "% y el total de pagar es: " + total.toFixed(2) + " pesos";
console.log(mesaje); 
