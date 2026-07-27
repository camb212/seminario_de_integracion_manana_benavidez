type Carro = {
  id: number;
  modelo: string;
  precioDiario: number;
  disponible: boolean;
  kilometraje: number;
};

const catalogo: Carro[] = [
  { id: 1, modelo: "Toyota Corolla", precioDiario: 40, disponible: true, kilometraje: 15000 },
  { id: 2, modelo: "Kia Rio", precioDiario: 30, disponible: true, kilometraje: 22000 },
  { id: 3, modelo: "Toyota RAV4", precioDiario: 65, disponible: false, kilometraje: 35000 },
  { id: 4, modelo: "Hyundai Tucson", precioDiario: 70, disponible: true, kilometraje: 18000 },
  { id: 5, modelo: "Chevrolet Spark", precioDiario: 25, disponible: false, kilometraje: 42000 },
];

const disponibles: Carro[] = catalogo.filter((c) => c.disponible);
const modelos: string[] = catalogo.map((c) => c.modelo);
const masBarato: Carro | undefined = catalogo.reduce((min, c) =>
  c.precioDiario < min.precioDiario ? c : min
);

console.log(modelos);
console.log(masBarato?.modelo);
console.log(disponibles.length);
console.log(catalogo[4].kilometraje);