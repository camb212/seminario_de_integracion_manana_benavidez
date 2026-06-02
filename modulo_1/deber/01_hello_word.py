print("Sistema de Alquiler de Autos")

cliente = "Camila Benavidez"
auto = "Toyota Corolla"
dias_alquiler = 5
costo_por_dia = 35.50

print(f"El cliente {cliente} alquiló un {auto} por {dias_alquiler} días.")

print("Cliente:", cliente, "Auto:", auto, "Días:", dias_alquiler)

print(cliente, auto, dias_alquiler, sep=", ")

print(cliente, end=" | ")
print(auto, end=" | ")
print(dias_alquiler, end=" | ")

costo_total = dias_alquiler * costo_por_dia
print(f"\nCosto total: ${costo_total:.2f}")