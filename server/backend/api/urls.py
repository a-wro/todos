from django.urls import path, re_path
from .views import TodoList, TodoView, TodoCreate, ChecklistList, ChecklistView, ChecklistCreate, TodoPut

urlpatterns = [
    path('todos/', TodoList.as_view(), name='todos'),
    path('todo/<int:pk>/', TodoView.as_view(), name='todo'),
    path('checklists/', ChecklistList.as_view(), name='checklists'),
    path('checklist/<int:pk>/', ChecklistView.as_view(), name='checklist'),
    path('checklist/create/', ChecklistCreate.as_view(), name='checklist_create'),
    path('todo/create/', TodoCreate.as_view(), name='todo_create'),
    path('todo/update/<int:pk>/', TodoPut.as_view(), name='todo_put'),
]