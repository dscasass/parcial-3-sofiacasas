/* 
Danna sofia casas sanchez
Grupo 1
Problema c:Factura de energía eléctrica con subsidio y contribución por estrato
*/
const TARIFA_KWH = 900;
const CONSUMO_SUBSISTENCIA = 173;
const CARGO_FIJO = 6000;

const PORCENTAJES_SUBSIDIO = {
  1: 0.50,
  2: 0.40,
  3: 0.15
};

const PORCENTAJES_CONTRIBUCION = {
  5: 0.50,
  6: 0.60
};

// 2. Entrada de datos
const estrato = parseInt(prompt("Ingrese el estrato (1 a 6):"));
const consumo = parseFloat(prompt("Ingrese el consumo del mes en kWh:"));

// 3. Validaciones
if (isNaN(estrato) || estrato < 1 || estrato > 6) {
  alert("Estrato no válido");
} else if (isNaN(consumo) || consumo < 0) {
  alert("Consumo no válido");
} else 

  // 4. Proceso de cálculo
  const consumoBasico = Math.min(consumo, CONSUMO_SUBSISTENCIA);
  const consumoExceso = consumo - consumoBasico;

  const valorBasico = consumoBasico * TARIFA_KWH;
  const valorExceso = consumoExceso * TARIFA_KWH;
  const costoConsumo = valorBasico + valorExceso;

  let subsidio = 0;
  let contribucion = 0;



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

 if (estrato >= 1 && estrato <= 3) {
    // Subsidio aplica solo al valor del consumo básico
    subsidio = valorBasico * PORCENTAJES_SUBSIDIO[estrato];
  } else if (estrato === 5 || estrato === 6) {
    // Contribución aplica a todo el costo del consumo
    contribucion = costoConsumo * PORCENTAJES_CONTRIBUCION[estrato];
  }

  const totalPagar = costoConsumo - subsidio + contribucion + CARGO_FIJO;

  // 5. Salidas (formateadas con separador de miles)
  const mensaje = 
    `Costo del consumo: $${costoConsumo.toLocaleString("es-CO")}\n` +
    `Valor del subsidio: $${subsidio.toLocaleString("es-CO")}\n` +
    `Valor de la contribución: $${contribucion.toLocaleString("es-CO")}\n` +
    `Total a pagar: $${totalPagar.toLocaleString("es-CO")}`;

  alert(mensaje);
  console.log(mensaje);
}