print("funciones de python")
print("funciones basicas")
def saludar():
    print("hola desde la Ute")
    
saludar()
print("funciones con parametros")
def saludarConNobre(nombre):
    print(f"hola:  {nombre}, desde la Ute")
saludarConNobre("Juan ")

print("funciones que devuelve valor con return")
def sumar(a, b):
    return a+b
print(sumar(5,6))


print("funciones parameto por posicion")
def presentar(nombre,edad,ciudad):
    print(f"{nombre},{edad},{ciudad}")
presentar("Pedro",60, " Quito")
presentar(ciudad="Guayaqui",nombre="Juan", edad=40)



print("funciones parameto por defecto")
def saludoParametroPorDefecto(nombre,saludo="Hola",puntuacion="!"):
    print(f"{saludo} {nombre} {puntuacion}")
saludoParametroPorDefecto("Pedro","Buenos Dias", "....")
saludoParametroPorDefecto("Juan", puntuacion="....")
saludoParametroPorDefecto("Carlos","Buenas tardes")


print("funciones parameto posicionales")
def suma_todos(*args):
    print(f"Argumentos recibidos {args}")
    return sum(args)
print(suma_todos(1,2,3))
print(suma_todos(1,2,3,4,5,6,7))
print(suma_todos(10,20,22))

print("funciones parameto posicionales")
def mostrar_info(titulo, *datos):
    print(f"Argumentos recibidos {titulo} {datos}")
    print(titulo)
    for dato in datos:
        print(f" - {dato}")
mostrar_info("Frutas","naranja","piña","melon","manzana")

print("funciones parameto clave valor variables")
def crear_perfil(**kwargs):
    print(f"Argumentos recibidos {kwargs}")
    for clave, valor in kwargs.items:
        print(f"{clave}: {valor}")
crear_perfil(nombre="Ana",apellido="Paris", edad=26, ciudad="Quito")


print("funcion parametros combinacion de todos los tipos")
def configurar(host, *puertos, debug=False, **opciones):
    print(f"Host: {host}")
    print(f"Puertos:{puertos}")
    print(f"Debug: {debug}")
    print(f"Opciones: {opciones}")
    
    
configurar("localhost", 80,443,8080, debug=True, timeout=30, ssl=True)

print("Devolver diccionario en el caso de muchos valores")
def analizar(numeros):
    total = sum(numeros)
    n=len(numeros)
    
    return {
        "total": total,
        "media": total/n if n > 0 else 0,
        "minimo": min(numeros) if numeros else None,
        "maximo": max(numeros) if numeros else None,
        "count": n
    }
datos = [12,88,44,55,23,45]
stats = analizar(datos)
print(f"Total: {stats['total']}")
print(f"Media: {stats['media']:2f}")
print(f"Rango: {stats['minimo']}-{stats['maximo']}")

print("funciones Lambdas")
def doble(x):
    return x*2
doble_lambda=lambda x: x*2
print(doble(2))
print(doble_lambda(2))


print("funciones Lambdas")
def doble(x):
    return x*2
doble_lambda=lambda x: x*2
print(doble(2))
print(doble_lambda(2))
suma=lambda a,b: a+b
print(suma(5,4))
