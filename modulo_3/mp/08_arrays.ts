const precios: number[] = [25, 40, 65, 90, 120];
const modelos: Array<string> = ["Toyota", "Kia", "Hyundai"];

const kilometrajes = [15000, 22000, 35000];

console.log(`Arreglo Precios: ${precios}`);
console.log(`Arreglo de Modelos: ${modelos}`);
console.log(`Arreglo de Kilometrajes: ${kilometrajes}`);

const preciosConDescuento: number[] = precios.map((precio) => precio * 0.9);
const preciosEconomicos: number[] = precios.filter((precio) => precio <= 65);
const sumaPrecios: number = precios.reduce((acc, precio) => acc + precio, 0);

console.log(`Precios con descuento: ${preciosConDescuento}`);
console.log(`Precios económicos: ${preciosEconomicos}`);
console.log(`Suma de precios: ${sumaPrecios}`);

precios.push(150);
console.log(`Arreglo Precios: ${precios}`);

precios.unshift(20);
console.log(`Arreglo Precios: ${precios}`);

const ultimoPrecio = precios.pop();
console.log(`Arreglo Precios: ${precios}`);

const primerPrecio = precios.shift();
console.log(`Arreglo Precios: ${precios}`);

const existe: boolean = precios.includes(65);
console.log(`Existe precio 65: ${existe}`);

const indice: number = precios.indexOf(65);
console.log(`Posición del precio 65: ${indice}`);

const encontrado: number | undefined = precios.find((precio) => precio > 100);
console.log(`Precio encontrado mayor a 100: ${encontrado}`);