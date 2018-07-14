from rest_framework.test import APIClient, APITestCase
from rest_framework import status
from ..models import Todo, Checklist
from django.urls import reverse

client = APIClient()

class TestREQUESTS:
    def test_get(self):
        self.assertEqual(client.get(self.single_url).status_code, status.HTTP_200_OK)

    def test_get_collection(self):
        response = client.get(self.collection_url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_post(self):
        '''
        response = client.post(self.post_url, self.mock_obj)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        '''
    def test_put(self):
        pass
        
class TestTodo(APITestCase, TestREQUESTS):
    def setUp(self):
        self.mock_obj = Todo.objects.create(task='Test task')
        self.collection_url = reverse('todos')
        self.single_url = reverse('todo', kwargs={ 'pk': 1})
        self.post_url = reverse('todo_create')

class TestChecklist(APITestCase, TestREQUESTS):
    def setUp(self):
        mock_todo = Todo.objects.create(task='Test task')
        self.mock_obj = Checklist.objects.create(todos=mock_todo)
        self.collection_url = reverse('checklists')
        self.single_url = reverse('checklist', kwargs={ 'pk': 1})
        self.post_url = reverse('checklist_create')
