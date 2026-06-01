# Cadena de caracteres, Entero, Decimal, Booleano, None
cliente = "Camila Benavidez"     
dias_alquiler = 5                 
costo_dia = 35.50               
disponible = True               
devolucion = None                

print(type(cliente))
print(type(dias_alquiler))
print(type(costo_dia))
print(type(disponible))
print(type(devolucion))

# Asignación múltiple
auto1, auto2, auto3 = "Toyota", "Chevrolet", "Kia"
print(auto1)
print(auto2)
print(auto3)

# Intercambiar valores
auto_actual, auto_nuevo = "Toyota Corolla", "Kia Rio"
print(auto_actual, auto_nuevo)
auto_actual, auto_nuevo = auto_nuevo, auto_actual
print(auto_actual, auto_nuevo)

# Convenciones de nombres
nombre_cliente = "Camila Benavidez"      # snake_case
nombreCliente = "Camila Benavidez"       # No recomendado en Python

MAX_AUTOS = 50                           # Constante
_variable_interna = "Uso interno"

# Manejo de enteros
autos_disponibles = 42
autos_en_mantenimiento = -3
total_ingresos = 1_000_000
registro_alquileres = 2**20

print(autos_disponibles)
print(autos_en_mantenimiento)
print(total_ingresos)
print(registro_alquileres)

# Bases numéricas
codigo_binario = 0b1010
codigo_octal = 0o17
codigo_hexadecimal = 0xFF

print(codigo_binario, codigo_octal, codigo_hexadecimal)

# Convertir de decimal a otras bases
numero_auto = 255
print(bin(numero_auto))
print(oct(numero_auto))
print(hex(numero_auto))