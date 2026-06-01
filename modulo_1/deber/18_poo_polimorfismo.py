class NotificacionReserva:

    def __init__(self, cliente, mensaje):
        self.cliente = cliente
        self.mensaje = mensaje

    def enviar(self):
        raise NotImplementedError(
            "Las subclases deben implementar enviar()"
        )

    def __str__(self):
        return f"{self.__class__.__name__} -> {self.cliente}"


class NotificacionEmail(NotificacionReserva):

    def __init__(self, cliente, mensaje, asunto="Reserva"):
        super().__init__(cliente, mensaje)
        self.asunto = asunto

    def enviar(self):
        return (
            f"Email a {self.cliente}: "
            f"[{self.asunto}] {self.mensaje}"
        )


class NotificacionSMS(NotificacionReserva):

    def enviar(self):
        return f"SMS a {self.cliente}: {self.mensaje}"


class NotificacionWhatsApp(NotificacionReserva):

    def enviar(self):
        return f"WhatsApp a {self.cliente}: {self.mensaje}"


class NotificacionApp(NotificacionReserva):

    def enviar(self):
        return f"Notificación App a {self.cliente}: {self.mensaje}"


def notificar_clientes(notificaciones):
    for notificacion in notificaciones:
        print(notificacion.enviar())


mensajes = [
    NotificacionEmail(
        "Camila Benavidez",
        "Su reserva ha sido confirmada",
        "Confirmación"
    ),
    NotificacionSMS(
        "Juan Pérez",
        "Su vehículo está listo para recoger"
    ),
    NotificacionWhatsApp(
        "Ana López",
        "Recuerde devolver el auto mañana"
    ),
    NotificacionApp(
        "Carlos Ruiz",
        "Tiene un descuento disponible"
    )
]

print("Enviando notificaciones")
notificar_clientes(mensajes)


class ArchivoReservas:

    def leer(self):
        return "reservas locales"

    def escribir(self, datos):
        print(f"Guardando reservas: {datos}")


class ArchivoClientes:

    def leer(self):
        return "clientes registrados"

    def escribir(self, datos):
        print(f"Guardando clientes: {datos}")


class ArchivoVehiculos:

    def leer(self):
        return "vehículos disponibles"

    def escribir(self, datos):
        print(f"Guardando vehículos: {datos}")


def procesar_archivo(archivo):
    contenido = archivo.leer()
    print(f"Procesando: {contenido}")
    archivo.escribir(f"Resultado de {contenido}")


for archivo in [
    ArchivoReservas(),
    ArchivoClientes(),
    ArchivoVehiculos()
]:
    procesar_archivo(archivo)