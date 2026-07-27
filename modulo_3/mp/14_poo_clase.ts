class Carro {
  modelo: string;
  precioDiario: number;
  disponible: boolean;

  constructor(modelo: string, precioDiario: number, disponible: boolean) {
    this.modelo = modelo;
    this.precioDiario = precioDiario;
    this.disponible = disponible;
  }

  describir(): string {
    const estado = this.disponible ? "disponible" : "alquilado";
    return `${this.modelo} — $${this.precioDiario} por día (${estado})`;
  }
}

const toyota = new Carro("Toyota Corolla", 40, true);
const kia = new Carro("Kia Sportage", 65, false);

console.log(toyota.describir());
console.log(kia.describir());