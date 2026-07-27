class Vehiculo {
  constructor(public modelo: string) {}

  describir(): string {
    return `${this.modelo} es un vehículo de alquiler.`;
  }
}

class Carro extends Vehiculo {
  constructor(modelo: string, public categoria: string) {
    super(modelo);
  }

  override describir(): string {
    return `${this.modelo} está disponible para alquiler.`;
  }

  reservar(dias: number): string {
    return `${this.modelo} ha sido reservado por ${dias} día(s).`;
  }
}

const v = new Vehiculo("Vehículo");
const c = new Carro("Toyota Corolla", "Sedan");

console.log(v.describir());
console.log(c.describir());
console.log(c.reservar(5));
console.log(c.categoria);