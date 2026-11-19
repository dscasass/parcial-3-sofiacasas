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

let total = consumo * tarifabase * (1- subsidio + contribucion)