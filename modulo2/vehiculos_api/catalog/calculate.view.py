from django.http import JsonResponse
from rest_framework.decorators import api_view

def calcular_area_triangulo(request):
    try:
        base = float(request.GET.get('base'))
        altura = float(request.GET.get('altura'))

        area = (base * altura) / 2

        return JsonResponse({
            'base': base,
            'altura': altura,
            'area': area
        })

    except (TypeError, ValueError):
        return JsonResponse({
            'error': 'Parámetros inválidos'
        }, status=400)
    

@api_view(['POST'])
def promedio_ventas(request):
    try:
        productos = request.data.get('productos')

        if not productos or not isinstance(productos, list):
            return JsonResponse({
                'error': 'Debe enviar un arreglo de productos'
            }, status=400)

        total_ventas = 0

        for producto in productos:
            ventas = float(producto.get('ventas', 0))
            total_ventas += ventas

        promedio = total_ventas / len(productos)

        return JsonResponse({
            'promedio_ventas': promedio
        })

    except Exception as e:
        return JsonResponse({
            'error': str(e)
        }, status=500)