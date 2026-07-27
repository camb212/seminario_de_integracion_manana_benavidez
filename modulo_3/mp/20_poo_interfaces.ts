interface Reservable {
  reservar(): string;
}

interface Validable {
  esValido(): boolean;
}

class Alquiler implements Reservable, Validable {
  constructor(
    public id: string,
    public modelo: string,
    public dias: number,
    public total: number
  ) {}

  reservar(): string {
    return `${this.modelo} ha sido reservado por ${this.dias} día(s).`;
  }

  esValido(): boolean {
    return this.dias > 0 && this.total > 0;
  }
}

const alquiler = new Alquiler(
  "ALQ-001",
  "Toyota Corolla",
  5,
  200
);

console.log(alquiler.esValido());
console.log(alquiler.reservar());