class AlquilerCarro {
  readonly id: string;
  public cliente: string;
  private precioTotal: number;
  protected moneda: string;

  constructor(
    id: string,
    cliente: string,
    precioTotal: number
  ) {
    this.id = id;
    this.cliente = cliente;
    this.precioTotal = precioTotal;
    this.moneda = "USD";
  }

  obtenerPrecioTotal(): number {
    return this.precioTotal;
  }

  agregarCargo(monto: number): void {
    if (monto <= 0) throw new Error("Monto inválido");
    this.precioTotal += monto;
  }
}

const alquiler = new AlquilerCarro(
  "ALQ-001",
  "Ana García",
  200
);

console.log(alquiler.cliente);
console.log(alquiler.id);
console.log(alquiler.obtenerPrecioTotal());

alquiler.agregarCargo(50);

console.log(alquiler.obtenerPrecioTotal());

// alquiler.precioTotal = 9999;
// Error: 'precioTotal' is private

// alquiler.id = "otro";
// Error: 'id' is readonly