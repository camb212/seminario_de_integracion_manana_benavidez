# Operadores Matemáticos

costo_dia = 35
dias = 5

print("Costo Total")
print(costo_dia, "*", dias, "=", costo_dia * dias)

print("Costo con recargo de $20")
print((costo_dia * dias), "+", 20, "=", (costo_dia * dias) + 20)

print("Costo con descuento de $15")
print((costo_dia * dias), "-", 15, "=", (costo_dia * dias) - 15)

print("Costo promedio por día")
print((costo_dia * dias), "/", dias, "=", (costo_dia * dias) / dias)

print("Potencia (ejemplo)")
print(costo_dia, "**", 2, "=", costo_dia ** 2)

print("División entera")
print((costo_dia * dias), "//", dias, "=", (costo_dia * dias) // dias)

print("Módulo")
print((costo_dia * dias), "%", dias, "=", (costo_dia * dias) % dias)

print("Operadores de Asignación")
print("=========================")

total = 100

total += 50
print("total += 50 =", total)

total -= 20
print("total -= 20 =", total)

total *= 2
print("total *= 2 =", total)

total //= 3
print("total //= 3 =", total)

total **= 2
print("total **= 2 =", total)