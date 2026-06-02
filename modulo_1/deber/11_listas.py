print("Listas")

print("Crear listas")

vacia = []

autos = ["Toyota Corolla", "Kia Rio", "Chevrolet Spark", "Hyundai Accent"]
print(autos)

mixta = ["Camila", 5, True, None, 175.50]
print(mixta)

anidada = [
    "Sucursal Quito",
    ["Toyota Corolla", "Kia Rio"],
    ["SUV", ["Hyundai Tucson", "Kia Sportage"]]
]
print(anidada)

print("Acceso a los elementos de una lista")

print(autos[0])
print(autos[-1])
print(autos[1:3])
print(autos[::-1])

print("CRUD de una lista")

autos_disponibles = ["Toyota Corolla", "Kia Rio", "Chevrolet Spark"]

autos_disponibles.append("Hyundai Accent")
print(autos_disponibles)

autos_disponibles.insert(1, "Nissan Versa")
print(autos_disponibles)

autos_disponibles.extend(["Mazda 2", "Suzuki Swift"])
print(autos_disponibles)

autos_disponibles[0] = "Toyota Yaris"
print(autos_disponibles)

autos_disponibles.remove("Kia Rio")
print(autos_disponibles)

eliminado = autos_disponibles.pop()
print(autos_disponibles)

eliminado = autos_disponibles.pop(0)
print(autos_disponibles)

del autos_disponibles[0]
print(autos_disponibles)

print("Buscar valores en los elementos de una lista")

print("Mazda 2" in autos_disponibles)
print(autos_disponibles.index("Mazda 2"))
print(autos_disponibles.count("Mazda 2"))

print("Ordenar una lista")

costos_alquiler = [35, 50, 25, 80, 45, 30]

print(costos_alquiler)

costos_alquiler.sort()
print(costos_alquiler)

costos_alquiler.sort(reverse=True)
print(costos_alquiler)

ordenada = sorted(costos_alquiler)

print(costos_alquiler)
print(ordenada)