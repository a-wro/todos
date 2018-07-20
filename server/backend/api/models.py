from django.db import models

# Create your models here.
class Todo(models.Model):
    task = models.CharField(max_length=50)
    added = models.DateField(auto_now_add=True)
    completed = models.BooleanField(default=False)

class Checklist(models.Model):
    todos = models.ForeignKey(Todo, on_delete=models.CASCADE)
    added = models.DateField(auto_now_add=True)


