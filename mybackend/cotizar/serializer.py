from rest_framework import serializers
from .models import Products,Cotizacion

class CotizacionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cotizacion
        #fields = ('id','name','password','email')
        fields = ('__all__')

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Products
        #fields = ('id','name','password','email')
        fields = ('__all__')