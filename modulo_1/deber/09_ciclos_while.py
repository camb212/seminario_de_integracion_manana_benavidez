contador = 1

while contador <= 5:
    print(f"Día de alquiler: {contador}")
    contador += 1

print("Control del ciclo")
print("continue")

i = 0

while i < 5:
    i += 1
    if i == 3:
        continue
    print(f"Vehículo #{i}")

print("break")

i = 0

while i < 5:
    i += 1
    if i == 3:
        break
    print(f"Reserva #{i}")

dias = int(input("Ingrese días de alquiler (0 para salir): "))

while dias != 0:
    print("Días registrados:", dias)
    dias = int(input("Ingrese días de alquiler (0 para salir): "))

contador = 1

while contador <= 5:
    print(f"Cliente atendido: {contador}")
    contador += 1
else:
    print("Fin del ciclo")