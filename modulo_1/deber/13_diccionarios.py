print("Diccionarios")

cliente = {
    "nombre": "Camila",
    "edad": 22,
    "licencia": True
}

auto = dict(modelo="Toyota Corolla", precio_dia=35, disponible=True)

print(cliente["nombre"])
print(cliente.get("telefono"))
print(cliente.get("telefono", "No registrado"))

cliente["telefono"] = "0999999999"
cliente["edad"] = 23

del cliente["licencia"]

valor = cliente.pop("telefono")

print(cliente)

print("nombre" in cliente)
print("licencia" in cliente)

print(cliente.keys())
print(cliente.values())
print(cliente.items())

for clave, valor in cliente.items():
    print(f"{clave}: {valor}")

cliente.update({
    "ciudad": "Quito",
    "correo": "camila@email.com"
})

print(cliente)

extra = {
    "cliente_frecuente": True,
    "descuento": 10
}

completo = cliente | extra

print(completo)

empresa = {
    "nombre": "RentAuto",
    "autos": {
        1: {"modelo": "Toyota Corolla", "estado": "Disponible"},
        2: {"modelo": "Kia Rio", "estado": "Alquilado"}
    },
    "sucursales": ["Quito", "Guayaquil"]
}

print(empresa["autos"][1]["modelo"])

empresa["autos"][3] = {
    "modelo": "Hyundai Accent",
    "estado": "Disponible"
}

cliente.setdefault("pais", "Ecuador")
cliente.setdefault("nombre", "Otro Cliente")

print(cliente)