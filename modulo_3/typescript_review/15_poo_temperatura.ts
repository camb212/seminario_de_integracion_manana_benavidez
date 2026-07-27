class Temperatura {
  valorCelsius: number;
  valorFarenheit: number;

  constructor(celsius: number, farenheit: number) {
    this.valorCelsius = celsius;
    this.valorFarenheit = farenheit;
  }

  aCelsius(): number {
    return (this.valorFarenheit -32) /1.8
  }

  aFahrenheit(): number {
    return this.valorCelsius * 9 / 5 + 32;
  }

  aKelvin(): number {
    return this.valorCelsius + 273.15;
  }

  describir(): string {
    return (
      `${this.valorCelsius}°C = ` +
      `${this.aFahrenheit()}°F = ` +
      `${this.aKelvin()}K ` +
      `${this.aCelsius()}ºC`
    );
  }
}

const hervor = new Temperatura(100,20);
const congelacion = new Temperatura(0,60);

console.log(hervor.describir());     // 100°C = 212°F = 373.15K
console.log(congelacion.describir()); // 0°C = 32°F = 273.15K