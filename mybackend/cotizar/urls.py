from django.urls import path, include
from rest_framework import routers
from cotizar import views 

router =  routers.DefaultRouter()
router.register( r'cotizar' , views.CotizacionView , 'cotizar')
router.register( r'products' , views.ProductsView , 'products')

urlpatterns = [
    path('api/', include(router.urls))
]