from django.contrib import admin
from django.urls import path, include
from store.views import health_check

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('store.urls')),
]