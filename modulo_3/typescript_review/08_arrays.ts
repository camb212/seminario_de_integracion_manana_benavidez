// Concepto puro — dos sintaxis equivalentes
const numeros: number[] = [1, 2, 3, 4, 5];
const textos: Array<string> = ["a", "b", "c"];   // forma genérica

// TypeScript infiere el tipo del array si lo inicializas
const inferido = [10, 20, 30]; // number[] inferido

// Métodos tipados: el compilador conoce el tipo del elemento
const dobles: number[] = numeros.map((n) => n * 2);       // [2, 4, 6, 8, 10]
const pares: number[] = numeros.filter((n) => n % 2 === 0); // [2, 4]
const suma: number = numeros.reduce((acc, n) => acc + n, 0); // 15
console.log(`Dobles: ${dobles}`);
console.log(`Pares: ${pares}`);
console.log(`Dobles: ${suma}`);

// Modificación (cambia el array original)
numeros.push(6);            // agrega al final
console.log(`Arreglo Numeros: ${numeros}`);
numeros.unshift(0);         // agrega al inicio
console.log(`Arreglo Numeros: ${numeros}`);
let ultimo = numeros.pop();     // elimina y devuelve el último
console.log(`Arreglo Numeros: ${numeros}`);
let primero = numeros.shift();  // elimina y devuelve el primero
console.log(`Arreglo Numeros: ${numeros}`);

// Búsqueda
let existe: boolean = numeros.includes(3);          // true
console.log(`Exite 3: ${existe}`);
let indice: number = numeros.indexOf(3);            // posicion
console.log(`Posición del valor 3: ${indice}`);
let encontrado: number | undefined = numeros.find((n) => n > 4);
console.log(`Valor encontrado mayor a 4: ${indice}`);
