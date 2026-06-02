# Enteros, Cadena de caracteres, booleano, None
nombre = "Camila Benavidez"         #String
edad = 22                            #Entero
altura = 1.72                        #float
activo = True                        #booleano
nulo = None                          #NoneType


print(type(nombre))
print(type(edad))
print(type(altura))
print(type(activo))
print(type(nulo))

a,b,c =12,13,14
print(a)
print(b)
print(c)

#intercambiar valores
x,y = 10,20
print(x,y)
x,y=y,x
print(x,y)

nombre_completo = "Rafael Correa Mashi" #snake_case
nombreCompleto = "Rafael Correa Delgado" #NO USAR camelcase

MAX_REINTENTOS=3                         #Mayusculas SOSTENIDAS 
_variable_interna= "privada"             #Para uso interno


#Manejo de Enteros

pequeno= 42
negativo = -17
grande = 1_000_000_000
enorme= 2**100

print(pequeno)
print(negativo)
print(grande)
print(enorme)

#Bases Numericas
binario =0b1010
octal=0o17
hexadecimal=0xFF
print(binario,octal,hexadecimal)
#CONVERTIR DE DECIMAL A OTRAS BASES
print(bin(255))
print(oct(255))
print(hex(255))