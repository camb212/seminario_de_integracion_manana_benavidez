// const — valor que NO cambia (preferida por defecto)
const TARIFA_BASE: number = 35;
const NOMBRE_EMPRESA: string = "Renta de Alquiler de Carros";
const SISTEMA_ACTIVO: boolean = true;

let diasAlquiler: number = 1;
let estadoCarro: string = "disponible";
let clienteActivo: boolean = false;

console.log(
  `Tarifa base: $${TARIFA_BASE}, Empresa: ${NOMBRE_EMPRESA}, Sistema activo: ${SISTEMA_ACTIVO}`
);

console.log(
  `Días de alquiler: ${diasAlquiler}, Estado del carro: ${estadoCarro}, Cliente activo: ${clienteActivo}`
);

diasAlquiler++;                    // 2
estadoCarro = "alquilado";         // ok
clienteActivo = true;              // ok


console.log(
  `Días de alquiler: ${diasAlquiler}, Estado del carro: ${estadoCarro}, Cliente activo: ${clienteActivo}`
);