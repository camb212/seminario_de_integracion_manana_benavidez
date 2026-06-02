print("ciclo for")
frutas=["manzana","banana","pera"]
for fruta in frutas:
    print (fruta)
print("Recorrer palabras")
for letra in "frutas":
    print(letra)
print("Recorrer rango")
for i in range(1,6):
    print(i)
print("Recorrer rango configurar paso")
for i in range(1,10,2):
    print(i)
print("Enumera lista")
for i in enumerate(frutas):
    print(i, fruta)
print("Dos Lista a las ves")
nombres=["Ana","Luis"]
edades=[20,25]
for nombre, edad in zip(nombres,edades):
    print(nombre,edad)

print("control del ciclo")
print("break")
for i in range(5):
    if i==3:
        break
    print(i)
print("for anidado")    
for i in range(3):
    for j in range(2):
        print(i,j)
print("Lista comprehension forma corta")
cuadrados =[x**2 for x in range(5)]
print(cuadrados)

ventas=[120, 80, 200, 50, 300]
print("ventas de los empleados")
for i in range(300):
    if i>=100:
        break
    print(i)
print("si es mayor a 220")    
for i in range(300):
    for j in range(220):
        print(i,j)
print("Lista comprehension forma corta")
cuadrados =[x**2 for x in range(5)]
print(cuadrados)