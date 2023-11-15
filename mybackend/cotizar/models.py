from django.db import models
import datetime

class Cotizacion(models.Model):
    name = models.CharField(unique='true', max_length=30, blank=False, default='nonspecified')
    lastName = models.CharField(max_length=30, blank=False, default='nonspecified')
    date = models.DateField(auto_now_add=True)
    address = models.CharField(unique='true', max_length=100, blank=False, default='nonspecified')
    code = models.CharField(max_length=20, blank=False, default='nonspecified')

class Products(models.Model):
    product_id = models.UUIDField(primary_key='true')
    product_code = models.CharField(max_length=20, default='nonspecified')
    product_name = models.CharField(max_length=30, blank=False, default='nonspecified', unique=True, null=False)
    product_price = models.FloatField(blank=False, default=0, null=False)
    product_image = models.TextField(blank=True)
    product_active = models.BooleanField(default=1)
    product_delete = models.BooleanField(default=False)
    product_created_by = models.IntegerField(default=0)
    product_modified_by = models.IntegerField(blank=True, null=True)
    product_modified_at = models.TimeField(blank=True,auto_now_add=True, null=True)
    product_created_at = models.TimeField(blank=False,auto_now_add=True, null=False)