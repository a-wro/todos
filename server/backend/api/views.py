from rest_framework import generics
from .serializers import TodoSerializer, ChecklistSerializer
from .models import Todo, Checklist

class TodoList(generics.ListAPIView):
    serializer_class = TodoSerializer
    queryset = Todo.objects.all()

class TodoView(generics.RetrieveAPIView):
    serializer_class = TodoSerializer
    queryset = Todo.objects.all()

class ChecklistList(generics.ListAPIView):
    serializer_class = ChecklistSerializer
    queryset = Checklist.objects.all()

class ChecklistView(generics.RetrieveAPIView):
    serializer_class = ChecklistSerializer
    queryset = Checklist.objects.all()

class TodoCreate(generics.CreateAPIView):
    serializer_class = TodoSerializer
    queryset = Todo.objects.all()

class TodoPut(generics.RetrieveUpdateAPIView):
    serializer_class = TodoSerializer
    queryset = Todo.objects.all()

class TodoDelete(generics.DestroyAPIView):
    serializer_class = TodoSerializer
    queryset = Todo.objects.all()

class ChecklistCreate(generics.CreateAPIView):
    serializer_class = ChecklistSerializer
    queryset = Checklist.objects.all()

