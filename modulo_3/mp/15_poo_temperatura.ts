class PrecioAlquiler {
  valorDiario: number;
  valorSemanal: number;

  constructor(diario: number, semanal: number) {
    this.valorDiario = diario;
    this.valorSemanal = semanal;
  }

  aDiario(): number {
    return this.valorSemanal / 7;
  }

  aSemanal(): number {
    return this.valorDiario * 7;
  }

  aMensual(): number {
    return this.valorDiario * 30;
  }

  describir(): string {
    return (
      `$${this.valorDiario} por día = ` +
      `$${this.aSemanal()} por semana = ` +
      `$${this.aMensual()} por mes = ` +
      `$${this.aDiario().toFixed(2)} por día`
    );
  }
}

const toyota = new PrecioAlquiler(40, 280);
const kia = new PrecioAlquiler(65, 455);

console.log(toyota.describir());
console.log(kia.describir());