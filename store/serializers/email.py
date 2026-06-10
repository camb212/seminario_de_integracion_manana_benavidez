# store/services/email.py  (agregar al final)

def send_password_reset_email(user, uid: str, token: str) -> None:
    """
    Envía correo con enlace de recuperación de contraseña.
    El enlace apunta al frontend, que luego llamará al endpoint de confirmación de la API.
    """
    reset_url = f"{settings.FRONTEND_URL}/password-reset/confirm/?uid={uid}&token={token}"

    _send(
        subject='Recuperación de contraseña — ShopAPI',
        to=user.email,
        txt_template='emails/password_reset.txt',
        html_template='emails/password_reset.html',
        context={
            'username':  user.username,
            'reset_url': reset_url,
        },
    )