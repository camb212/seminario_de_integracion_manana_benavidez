// Concepto puro
type Producto = {
  id: number;
  nombre: string;
  precio: number;
  disponible: boolean;
  regalo: boolean;
};

const catalogo: Producto[] = [
  { id: 1, nombre: "Laptop",  precio: 999,  disponible: true, regalo: false },
  { id: 2, nombre: "Mouse",   precio: 25,   disponible: true, regalo: false },
  { id: 3, nombre: "Monitor", precio: 350,  disponible: false, regalo: true },
  { id: 4, nombre: "Teclado", precio: 120,  disponible: true, regalo: false },
  { id: 5, nombre: "Webcam",  precio: 85,   disponible: true, regalo: true },
];

// TypeScript sabe que cada "p" es de tipo Producto
const disponibles: Producto[] = catalogo.filter((p) => p.disponible);
const nombres: string[] = catalogo.map((p) => p.nombre);
const masBarato: Producto | undefined = catalogo.reduce((min, p) =>
  p.precio < min.precio ? p : min
);

// Imprime los nombres de los productos
console.log(nombres);                                    // ["Laptop", "Mouse", "Monitor", "Teclado", "Webcam"]
console.log(masBarato?.nombre);                          // "Mouse"
console.log(disponibles.length);                         // 4
console.log("Catálogo completo:", catalogo);
const cuartoElemento = catalogo[3];
if (cuartoElemento) {
  console.log("El 4to elemento existe:", cuartoElemento.nombre);
} else {
  console.log("El 4to elemento no existe");
}