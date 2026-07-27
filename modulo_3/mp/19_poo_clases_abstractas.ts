abstract class VehiculoAlquiler {
  abstract calcularCosto(dias: number): number;
  abstract calcularDeposito(): number;

  describir(): string {
    return (
      `Alquiler: $${this.calcularCosto(5).toFixed(2)} | ` +
      `Depósito: $${this.calcularDeposito().toFixed(2)}`
    );
  }
}

class CarroEconomico extends VehiculoAlquiler {
  constructor(private precioDiario: number) {
    super();
  }

  override calcularCosto(dias: number): number {
    return this.precioDiario * dias;
  }

  override calcularDeposito(): number {
    return this.precioDiario * 2;
  }
}

class CarroSUV extends VehiculoAlquiler {
  constructor(private precioDiario: number) {
    super();
  }

  override calcularCosto(dias: number): number {
    return this.precioDiario * dias;
  }

  override calcularDeposito(): number {
    return this.precioDiario * 3;
  }
}

const economico = new CarroEconomico(30);
const suv = new CarroSUV(65);

console.log(economico.describir());
console.log(suv.describir());