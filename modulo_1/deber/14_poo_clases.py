class Cliente:

    empresa = "RentAuto"

    def __init__(self, nombre, dias_alquiler):
        self.nombre = nombre
        self.dias_alquiler = dias_alquiler

    def mostrar_reserva(self):
        return f"Cliente: {self.nombre}, Días de alquiler: {self.dias_alquiler}"

    def extender_alquiler(self):
        self.dias_alquiler += 1
        print(f"Alquiler extendido para {self.nombre}. Ahora tiene {self.dias_alquiler} días.")

    def __str__(self):
        return f"Cliente({self.nombre}, {self.dias_alquiler} días)"

    def __repr__(self):
        return f"Cliente(nombre='{self.nombre}', dias_alquiler={self.dias_alquiler})"


camila = Cliente("Camila Benavidez", 5)
juan = Cliente("Juan Pérez", 3)

print(camila.mostrar_reserva())
print(juan.mostrar_reserva())

camila.extender_alquiler()

print(str(camila))
print(repr(camila))

print(Cliente.empresa)