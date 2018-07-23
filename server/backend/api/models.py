from django.db import models

# Create your models here.


class Checklist(models.Model):
    name = models.CharField(max_length=50)
    added = models.DateField(auto_now_add=True)

class Todo(models.Model):
    task = models.CharField(max_length=50)
    added = models.DateField(auto_now_add=True)
    completed = models.BooleanField(default=False)
    checklist = models.ForeignKey(Checklist, on_delete=models.CASCADE)


