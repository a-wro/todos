from rest_framework.test import APIClient, APITestCase
from rest_framework import status
from ..models import Todo, Checklist
from ..serializers import TodoSerializer, ChecklistSerializer
from django.urls import reverse

client = APIClient()

class TestREQUESTS:
    def test_get(self):
        self.assertEqual(client.get(self.single_url).status_code, status.HTTP_200_OK)

    def test_get_collection(self):
        response = client.get(self.collection_url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_post(self):
        serialized = self.serializer(self.mock_obj)
        response = client.post(self.post_url, serialized.data)
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)

    def test_put(self):
        serialized = self.serializer(self.mock_obj)
        response = client.put(self.put_url, serialized.data)
        self.assertEqual(response.status_code, status.HTTP_200_OK)

class TestTodo(APITestCase, TestREQUESTS):
    def setUp(self):
        self.mock_obj = Todo.objects.create(task='Test task')
        self.collection_url = reverse('todos')
        self.single_url = reverse('todo', kwargs={'pk': 1})
        self.post_url = reverse('todo_create')
        self.serializer = TodoSerializer
        self.put_url = reverse('todo_put', kwargs={'pk': 1})

class TestChecklist(APITestCase, TestREQUESTS):
    def setUp(self):
        mock_todo = Todo.objects.create(task='Test task')
        self.mock_obj = Checklist.objects.create(todos=mock_todo)
        self.collection_url = reverse('checklists')
        self.single_url = reverse('checklist', kwargs={ 'pk': 1})
        self.post_url = reverse('checklist_create')
        self.serializer = ChecklistSerializer
        self.put_url = None
