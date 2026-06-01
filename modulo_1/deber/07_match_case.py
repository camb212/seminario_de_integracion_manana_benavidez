print("match-case")

opcion = input("Seleccione una opción: reservar/cancelar/devolver ")

match opcion:
    case "reservar":
        print("Reserva realizada")
    case "cancelar":
        print("Reserva cancelada")
    case "devolver":
        print("Auto devuelto correctamente")
    case _:
        print(f"Opción '{opcion}' no encontrada")

print("match condiciones")

dias = 7

match dias:
    case n if n <= 0:
        print(f"{n} días no son válidos")
    case n if n < 3:
        print(f"{n} días: alquiler corto")
    case n if n <= 7:
        print(f"{n} días: alquiler estándar")
    case n:
        print(f"{n} días: alquiler de larga duración")