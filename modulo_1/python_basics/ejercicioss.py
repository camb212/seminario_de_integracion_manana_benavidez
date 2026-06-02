# Online Python - IDE, Editor, Compiler, Interpreter

print("Participacion")
tiempo_antiguedad= input("Indique sus años de antiguedad:")
calificacion_desempeño=input("Calificacion de desempeño laboral:")
salario=input("Ingrese su salario")
if(int(tiempo_antiguedad) > 1):
    if(int(calificacion_desempeño)>=8)                                                                                                                                                                                                                                                                                                                              :
        print("Puede optar a un bono")
        if(int(salario)<1000):
            print("BONO DE 200")
        else:
            print("bono de 100")
    else:
        print("No recibe bono")
else:
    print("No cumple el año")