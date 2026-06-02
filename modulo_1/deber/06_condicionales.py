print("Condicionales simples")
edad_conductor = input("Ingrese su edad: ")
if int(edad_conductor) >= 18:
    print("Puede alquilar un auto")

print("Condicionales dos caminos")
dias = input("Ingrese los días de alquiler: ")
if int(dias) >= 7:
    print("Aplica descuento")
else:
    print("No aplica descuento")

print("Condicionales múltiples")
categoria = input("Ingrese la categoría del auto (1-4): ")

if int(categoria) == 1:
    print("Auto económico")
elif int(categoria) == 2:
    print("Auto sedán")
elif int(categoria) == 3:
    print("SUV")
elif int(categoria) == 4:
    print("Auto de lujo")

print("Condicionales if anidados")
tiene_licencia = True
saldo = 300
auto = "SUV"

if tiene_licencia:
    if saldo >= 250:
        if auto == "SUV":
            print("Alquiler de SUV confirmado")
        else:
            print("Auto disponible")
    else:
        print("Saldo insuficiente")
else:
    print("No tiene licencia de conducir")