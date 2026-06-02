print("condicionales simples")
edad=input("Incluye edad ?")
if (int(edad)>=18):
    print(" Mayor edad")
    
print("condicionales dos caminos")
temperatura=input("Incluye temperatura ?")
if (int(temperatura)>=38):
    print("temperatura Alta")
else:
    print("temperatura normla")
    
    
print("condicionales multiples")
nota=input("Incluye nota")
if (int(nota)>=90):
    print("Excelente")
elif (int(nota)>=80):
    print("Bueno")
elif (int(nota)>=70):
    print("Aprobado")
elif (int(nota)>=60):
    print("Reprobar")
    

print("condicionales if anidados")
tiene_reserva=True
dinero=25
plato="pizza"
if(tiene_reserva):
    if(dinero>=20):
        if plato=="pizza":
            print("Tu pizza cuesta $20. Pedido confirmado")
        else:
            print("Plato disponible")
    else:
        print("Dinero insuficiente")
else:
    print("No tiene reserva")
