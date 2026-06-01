print("Ciclo for")

autos = ["Toyota", "Chevrolet", "Kia"]

for auto in autos:
    print(auto)

print("Recorrer palabras")

for letra in "alquiler":
    print(letra)

print("Recorrer rango")

for i in range(1, 6):
    print(i)

print("Recorrer rango configurar paso")

for i in range(1, 10, 2):
    print(i)

print("Enumerar lista")

for i, auto in enumerate(autos):
    print(i, auto)

print("Dos listas a la vez")

clientes = ["Ana", "Luis"]
dias = [3, 5]

for cliente, dia in zip(clientes, dias):
    print(cliente, dia)

print("Control del ciclo")
print("break")

for i in range(5):
    if i == 3:
        break
    print(i)

print("for anidado")

for i in range(3):
    for j in range(2):
        print(i, j)

print("Lista comprehension forma corta")

costos = [x * 35 for x in range(5)]
print(costos)

ingresos = [120, 80, 200, 50, 300]

print("Ingresos diarios")

for ingreso in ingresos:
    if ingreso >= 250:
        break
    print(ingreso)

print("Autos y días de alquiler")

for i in range(5):
    for j in range(3):
        print(i, j)

print("Lista comprehension")

descuentos = [x * 5 for x in range(5)]
print(descuentos)