
const precioDiario: number = 299.99;
const kilometraje: number = 8080;
const temperatura: number = -5.3;
const codigoVehiculo: number = 0xff5733;

const emailCliente: string = "cliente@rentacar.com";
const tipoVehiculo: string = "SUV";
const ruta: string = `/alquileres/v2/carros`;

const estaDisponible: boolean = true;
const requiereReserva: boolean = false;
const tieneSeguro: boolean = false;

const tarifaBase = 1500;
const descuento = 150;
const totalAlquiler = tarifaBase - descuento;

const cliente = "  cliente@rentacar.com  ";
console.log(cliente.trim().toLowerCase());
console.log(emailCliente.includes("rentacar"));
console.log(emailCliente.split("@")[1]);
console.log(emailCliente.split("@"));

let datosCliente: string = "Carlos;Mendoza;28;12-12-1997";
console.log(datosCliente.split(";"));

const puedeAlquilar: boolean = estaDisponible && !requiereReserva;
console.log(puedeAlquilar);