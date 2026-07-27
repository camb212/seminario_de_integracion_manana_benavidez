type UbicacionCarro = [number, number];
type FechaAlquiler = [number, number, number];
type InformacionAlquiler = [string, number];

const ubicacion: UbicacionCarro = [-0.1807, -78.4678];
const fecha: FechaAlquiler = [2026, 7, 26];
const alquiler: InformacionAlquiler = ["Toyota Corolla", 5];

const [latitud, longitud] = ubicacion;
const [anio, mes, dia] = fecha;
const [modelo, dias] = alquiler;

console.log(`Ubicación: lat=${latitud}, long=${longitud}`);
console.log(`Fecha de alquiler: ${dia}/${mes}/${anio}`);
console.log(`Alquiler: ${modelo} por ${dias} días`);

type HorarioAlquiler = [inicio: number, fin: number];
const horario: HorarioAlquiler = [8, 18];