type CategoriaCarro = "economico" | "sedan" | "suv";

interface Carro {
  modelo: string;
  precioDiario: number;
  valorVehiculo: number;
  categoria: CategoriaCarro;
}

const TARIFAS: Record<CategoriaCarro, number> = {
  economico: 25.00,
  sedan: 40.00,
  suv: 65.00,
};

const SEGURO_PCT = 0.005;

function cotizarAlquiler(carro: Carro, dias: number): string {
  const tarifaBase = TARIFAS[carro.categoria];
  const costoAlquiler = tarifaBase * dias;
  const costoSeguro = carro.valorVehiculo * SEGURO_PCT;
  const total = costoAlquiler + costoSeguro;

  return `
🚗 Cotización de alquiler
   Modelo       : ${carro.modelo}
   Categoría    : ${carro.categoria}
   Días         : ${dias}
   Alquiler     : $${costoAlquiler.toFixed(2)}
   Seguro       : $${costoSeguro.toFixed(2)}
   ─────────────────────────
   TOTAL        : $${total.toFixed(2)}
  `.trim();
}

const carro1: Carro = {
  modelo: "Toyota Corolla",
  precioDiario: 40,
  valorVehiculo: 25000,
  categoria: "sedan",
};

const carro2: Carro = {
  modelo: "Toyota RAV4",
  precioDiario: 65,
  valorVehiculo: 35000,
  categoria: "suv",
};

console.log(cotizarAlquiler(carro1, 5));
console.log("---");
console.log(cotizarAlquiler(carro2, 3));