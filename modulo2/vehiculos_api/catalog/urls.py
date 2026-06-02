from django.urls import path
from rest_framework.routers import DefaultRouter
from .views import MarcaViewSet, VehiculoViewSet
from .calculate_view import calcular_area_triangulo

router = DefaultRouter()
router.register(r"marcas", MarcaViewSet, basename="marcas")
router.register(r"vehiculos", VehiculoViewSet, basename="vehiculos")

urlpatterns = [
    path('triangle/area',
    calcular_area_triangulo,
    name='traiangle-area')
    path('products/promedio_ventas',
        promedio_ventas,
    name='promedio_ventas')
]
urlpatterns += router.urls