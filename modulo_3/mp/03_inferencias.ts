const precioDiario1: number = 35;
const modelo1: string = "Toyota Corolla";
const disponible1: boolean = true;

const precioDiario2 = 35;
const modelo2 = "Toyota Corolla";
const disponible2 = true;

let diasAlquiler: number;
diasAlquiler = 5;

let identificador: number | string = 101;
identificador = "CAR-101";

function calcularAlquiler(modelo: string, dias: number): string {
  return `El ${modelo} fue alquilado por ${dias} día(s)`;
}