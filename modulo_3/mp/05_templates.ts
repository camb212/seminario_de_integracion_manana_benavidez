const nombreCliente: string = "Ana";
const tipoCliente: string = "frecuente";
const alquileres: number = 42;

const bienvenida: string = `Bienvenida, ${nombreCliente}. Tipo de cliente: ${tipoCliente}. Alquileres realizados: ${alquileres}.`;
console.log(bienvenida);

const precioDiario: number = 1200;
const diasAlquiler: number = 0.19;
const total: string = `Precio del alquiler: $${(precioDiario * (1 + diasAlquiler)).toFixed(2)}`;
console.log(total);

const reporte: string = `
=== Reporte del alquiler ===
Cliente  : ${nombreCliente}
Vehículo : Toyota Corolla
Estado   : alquilado
Días     : ${alquileres}
`;
console.log(reporte);