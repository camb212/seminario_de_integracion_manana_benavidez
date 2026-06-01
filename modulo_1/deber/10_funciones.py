print("Funciones de Python")

print("Funciones básicas")

def mostrar_empresa():
    print("Bienvenido a RentAuto")

mostrar_empresa()

print("Funciones con parámetros")

def saludar_cliente(nombre):
    print(f"Hola {nombre}, gracias por elegir RentAuto")

saludar_cliente("Camila")

print("Funciones que devuelven valor con return")

def calcular_total(costo_dia, dias):
    return costo_dia * dias

print(calcular_total(35, 5))

print("Funciones con parámetros por posición")

def presentar_reserva(cliente, auto, dias):
    print(f"{cliente}, {auto}, {dias} días")

presentar_reserva("Pedro", "Toyota Corolla", 5)
presentar_reserva(auto="Kia Rio", cliente="Juan", dias=3)

print("Funciones con parámetros por defecto")

def confirmar_reserva(cliente, mensaje="Reserva confirmada", simbolo="!"):
    print(f"{mensaje} para {cliente} {simbolo}")

confirmar_reserva("Pedro", "Reserva aprobada", "✓")
confirmar_reserva("Juan", simbolo="✓")
confirmar_reserva("Carlos", "Reserva pendiente")

print("Funciones con parámetros posicionales")

def sumar_alquileres(*args):
    print(f"Valores recibidos {args}")
    return sum(args)

print(sumar_alquileres(100, 200, 300))
print(sumar_alquileres(50, 75, 125, 150))
print(sumar_alquileres(400, 250))

print("Funciones con parámetros variables")

def mostrar_autos(titulo, *autos):
    print(f"Argumentos recibidos {titulo} {autos}")
    print(titulo)
    for auto in autos:
        print(f" - {auto}")

mostrar_autos("Autos disponibles", "Toyota", "Kia", "Chevrolet", "Hyundai")

print("Funciones con parámetros clave-valor")

def crear_cliente(**kwargs):
    print(f"Argumentos recibidos {kwargs}")
    for clave, valor in kwargs.items():
        print(f"{clave}: {valor}")

crear_cliente(nombre="Ana", apellido="Pérez", edad=26, ciudad="Quito")

print("Combinación de todos los tipos de parámetros")

def configurar_sistema(sucursal, *autos, disponible=True, **opciones):
    print(f"Sucursal: {sucursal}")
    print(f"Autos: {autos}")
    print(f"Disponible: {disponible}")
    print(f"Opciones: {opciones}")

configurar_sistema(
    "Quito",
    "Toyota",
    "Kia",
    "Chevrolet",
    disponible=True,
    horario="24 horas",
    seguro=True
)

print("Devolver diccionario")

def analizar_ingresos(ingresos):
    total = sum(ingresos)
    n = len(ingresos)

    return {
        "total": total,
        "media": total / n if n > 0 else 0,
        "minimo": min(ingresos) if ingresos else None,
        "maximo": max(ingresos) if ingresos else None,
        "count": n
    }

datos = [120, 250, 300, 180, 220]
stats = analizar_ingresos(datos)

print(f"Total: {stats['total']}")
print(f"Media: {stats['media']:.2f}")
print(f"Rango: {stats['minimo']} - {stats['maximo']}")

print("Funciones Lambda")

def doble_precio(x):
    return x * 2

doble_lambda = lambda x: x * 2

print(doble_precio(35))
print(doble_lambda(35))

suma = lambda a, b: a + b
print(suma(100, 250))