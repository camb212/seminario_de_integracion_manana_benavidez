class Vehiculo {
  nombre(): string {
    return "Vehículo";
  }

  calcularPrecio(dias: number): number {
    return 0;
  }
}

class CarroEconomico extends Vehiculo {
  constructor(private precioDiario: number) {
    super();
  }

  override nombre(): string {
    return "Carro económico";
  }

  override calcularPrecio(dias: number): number {
    return this.precioDiario * dias;
  }
}

class CarroSedan extends Vehiculo {
  constructor(private precioDiario: number) {
    super();
  }

  override nombre(): string {
    return "Carro sedan";
  }

  override calcularPrecio(dias: number): number {
    return this.precioDiario * dias;
  }
}

class CarroSUV extends Vehiculo {
  constructor(private precioDiario: number) {
    super();
  }

  override nombre(): string {
    return "Carro SUV";
  }

  override calcularPrecio(dias: number): number {
    return this.precioDiario * dias;
  }
}

const carros: Vehiculo[] = [
  new CarroEconomico(30),
  new CarroSedan(45),
  new CarroSUV(65),
];

for (const carro of carros) {
  console.log(
    `${carro.nombre()}: alquiler = $${carro.calcularPrecio(5).toFixed(2)}`
  );
}