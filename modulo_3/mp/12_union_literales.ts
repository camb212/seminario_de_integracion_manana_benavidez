type PrioridadAlquiler = "baja" | "media" | "alta" | "critica";

interface Alquiler {
  id: number;
  modelo: string;
  prioridad: PrioridadAlquiler;
  finalizado: boolean;
}

function etiquetarAlquiler(a: Alquiler): string {
  const prefijos: Record<PrioridadAlquiler, string> = {
    baja: "⚪",
    media: "🟡",
    alta: "🟠",
    critica: "🔴",
  };

  const estado = a.finalizado ? "✅" : "⏳";
  return `${estado} ${prefijos[a.prioridad]} [#${a.id}] ${a.modelo}`;
}

const alquileres: Alquiler[] = [
  { id: 1, modelo: "Toyota Corolla", prioridad: "baja", finalizado: true },
  { id: 2, modelo: "Toyota RAV4", prioridad: "critica", finalizado: false },
  { id: 3, modelo: "Kia Rio", prioridad: "media", finalizado: false },
];

for (const a of alquileres) {
  console.log(etiquetarAlquiler(a));
}