let cualquierDato: any = "Toyota Corolla";

cualquierDato = 40;
cualquierDato = true;

// cualquierDato.metodoFalso();

let datoCarro: unknown = "Toyota Corolla";
datoCarro = 40;

if (typeof datoCarro === "string") {
  console.log(datoCarro.toUpperCase());
}

function cancelarAlquiler(mensaje: string): never {
  throw new Error(mensaje);
}

function verificarEstadoCarro(valor: never): never {
  throw new Error(`Estado no manejado: ${String(valor)}`);
}