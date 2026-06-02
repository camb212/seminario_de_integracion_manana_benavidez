print("Tuplas")

vacia = ()
unitaria = ("Toyota Corolla",)
reserva = ("Camila Benavidez", "Toyota Corolla", 5)
auto = ("Kia Rio", "Disponible", 35)

datos_alquiler = "Juan Pérez", "Hyundai Accent", 7
print(type(datos_alquiler))

print(reserva[0])
print(reserva[-1])
print(reserva[1:])

cliente, vehiculo, dias = reserva
print(cliente, vehiculo, dias)

primero, *resto = ("Toyota", "Kia", "Chevrolet", "Hyundai", "Mazda")
print(primero)
print(resto)

*inicio, ultimo = ("Toyota", "Kia", "Chevrolet", "Hyundai", "Mazda")
print(inicio)
print(ultimo)

def calcular_alquiler(costo_dia, dias):
    if dias <= 0:
        return None, "Número de días inválido"
    return costo_dia * dias, None

total, error = calcular_alquiler(35, 5)

if error:
    print(f"Error: {error}")
else:
    print(f"Total a pagar: ${total:.2f}")

ubicaciones = {
    ("Quito", "Centro"): "Sucursal Principal",
    ("Quito", "Norte"): "Sucursal Norte",
    ("Guayaquil", "Centro"): "Sucursal Guayaquil"
}

print(ubicaciones[("Quito", "Centro")])