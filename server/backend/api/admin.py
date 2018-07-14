from django.contrib import admin
from .models import Todo, Checklist

# Register your models here.
admin.site.register(Todo)
admin.site.register(Checklist)