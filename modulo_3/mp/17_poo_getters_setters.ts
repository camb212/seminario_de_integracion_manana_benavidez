class Carro {
  private _precioDiario: number;

  constructor(precioDiario: number) {
    this._precioDiario = precioDiario;
  }

  get precioDiario(): number {
    return this._precioDiario;
  }

  set precioDiario(valor: number) {
    if (valor <= 0) throw new Error("El precio diario debe ser positivo");
    this._precioDiario = valor;
  }

  get precioMensual(): number {
    return this._precioDiario * 30;
  }
}

const carro = new Carro(40);

console.log(carro.precioDiario);
console.log(carro.precioMensual.toFixed(2));

carro.precioDiario = 50;

console.log(carro.precioMensual.toFixed(2));

// carro.precioDiario = -3;