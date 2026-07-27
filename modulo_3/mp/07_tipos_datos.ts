const entero: number = 42;
const decimal: number = 3.14;
const negativo: number = -100;
const hexadecimal: number = 0xff;
const binario: number = 0b1010;
const octal: number = 0o17;
const grande: number = 1_000_000;

console.log(hexadecimal);
console.log(binario);
console.log(grande);

console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.isFinite(1 / 0));
console.log(Number.isNaN(0 / 0));

const simple: string = "Alquiler de carros";
const doble: string = 'RentaCar disponible';
const template: string = `Vehículo: ${"Toyota Corolla"}`;

const modelo: string = "Toyota Corolla";
const dias: number = 5;

const saludo: string = `El ${modelo} está alquilado por ${dias} días.`;
const estadoAlquiler: string = `El vehículo está ${dias > 0 ? "alquilado" : "disponible"}`;

const mensaje: string = `
  Modelo: Toyota Corolla
  Categoría: Sedan
  Estado: Disponible
`.trim();

console.log("  Toyota Corolla  ".trim());
console.log("toyota corolla".toUpperCase());
console.log("2026-07-26".split("-"));
console.log("carro disponible".includes("disponible"));
console.log("Toyota Corolla".endsWith("Corolla"));
console.log("Toyota Corolla".startsWith("Toyota"));

const disponible: boolean = true;
const reservado: boolean = false;

const esMayorDeEdad = 25 >= 18;
const tieneDisponibilidad = 0 > 0;

if (!tieneDisponibilidad) {
  console.log("No hay carros disponibles");
}

let sinAsignar: undefined = undefined;
let sinValor: null = null;

function buscarCarro(id: number): string | null {
  if (id === 1) return "Toyota Corolla";
  return null;
}

const carro = buscarCarro(5);

const modeloCarro = carro ?? "Ningún carro seleccionado";
console.log(modeloCarro);

const longitud = carro?.length;
console.log(longitud);