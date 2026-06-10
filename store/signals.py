# store/signals.py  (agregar al final)
from store.models.order import Order


@receiver(post_save, sender=Order)
def order_post_save(sender, instance, created, **kwargs):
    if created:
        _send_order_confirmation(instance)


def _send_order_confirmation(order):
    """
    Envía correo de confirmación. Falla en silencio para no bloquear la transacción.

    Nota: la señal se dispara cuando la orden se crea. Si los ítems se agregan
    en una segunda request (add-item), el correo saldrá con la lista vacía.
    Para correos con ítems completos, considera disparar el envío desde la
    vista de 'confirmar pedido' en una etapa futura.
    """
    if not order.user.email:
        return
    try:
        from store.services.email import send_order_confirmation_email
        send_order_confirmation_email(order)
    except Exception:
        logger.exception('Error enviando confirmación de orden #%s', order.id)