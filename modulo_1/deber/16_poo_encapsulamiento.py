class ReservaAuto:

    def __init__(self, cliente, saldo_inicial=0):
        self.cliente = cliente
        self.__saldo = saldo_inicial
        self.__historial = []
        self.__activa = True
        self.__registrar(f"Cuenta creada con ${saldo_inicial}")

    @property
    def saldo(self):
        return self.__saldo

    @property
    def activa(self):
        return self.__activa

    @property
    def historial(self):
        return list(self.__historial)

    def depositar(self, cantidad):
        if cantidad <= 0:
            raise ValueError("La cantidad debe ser positiva")

        self.__saldo += cantidad
        self.__registrar(f"Depósito: +${cantidad}")
        return self

    def pagar_alquiler(self, cantidad):
        if cantidad <= 0:
            raise ValueError("La cantidad debe ser positiva")

        if cantidad > self.__saldo:
            raise ValueError(f"Saldo insuficiente (${self.__saldo})")

        self.__saldo -= cantidad
        self.__registrar(f"Pago alquiler: -${cantidad}")
        return self

    def transferir(self, destino, cantidad):
        self.pagar_alquiler(cantidad)
        destino.depositar(cantidad)
        self.__registrar(
            f"Transferencia a {destino.cliente}: -${cantidad}"
        )
        return self

    def __registrar(self, operacion):
        from datetime import datetime

        hora = datetime.now().strftime("%H:%M:%S")
        self.__historial.append(f"[{hora}] {operacion}")

    def __str__(self):
        return f"ReservaAuto({self.cliente}: ${self.__saldo})"


c1 = ReservaAuto("Camila Benavidez", 1000)
c2 = ReservaAuto("Juan Pérez", 500)

c1.depositar(300).pagar_alquiler(200)
c1.transferir(c2, 250)

print(c1)
print(c2)

print(f"Saldo de Camila: ${c1.saldo}")

for entrada in c1.historial:
    print(entrada)