from abc import ABC, abstractmethod

class Vehiculo(ABC):

    def __init__(self, modelo, precio_dia):
        self.modelo = modelo
        self.precio_dia = precio_dia

    @abstractmethod
    def calcular_alquiler(self, dias):
        pass

    def describir(self):
        return f"{self.__class__.__name__}: {self.modelo} - ${self.precio_dia}/día"


class AutoEconomico(Vehiculo):

    def calcular_alquiler(self, dias):
        return self.precio_dia * dias


class SUV(Vehiculo):

    def calcular_alquiler(self, dias):
        return self.precio_dia * dias * 1.10


class AutoLujo(Vehiculo):

    def calcular_alquiler(self, dias):
        return self.precio_dia * dias * 1.25


vehiculos = [
    AutoEconomico("Kia Rio", 30),
    SUV("Hyundai Tucson", 50),
    AutoLujo("BMW Serie 3", 80)
]

dias = 5

for vehiculo in vehiculos:
    print(vehiculo.describir())
    print(f"Costo por {dias} días: ${vehiculo.calcular_alquiler(dias):.2f}")

total = sum(v.calcular_alquiler(dias) for v in vehiculos)

print(f"Total de todos los alquileres: ${total:.2f}")