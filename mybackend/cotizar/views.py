from django.shortcuts import render
from django.http import HttpResponse
from rest_framework import viewsets
from .serializer import ProductSerializer, CotizacionSerializer
from .models import Cotizacion, Products 
# Create your views here.

class ProductsView (viewsets.ModelViewSet):
     serializer_class = ProductSerializer
     queryset = Products.objects.all()

class CotizacionView (viewsets.ModelViewSet):
     serializer_class = CotizacionSerializer
     queryset = Cotizacion.objects.all()


def auth(request):
     return HttpResponse()

