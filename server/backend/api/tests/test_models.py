from rest_framework.test import APITestCase
from ..models import Todo, Checklist

class TestModel:
    '''test if created object is a proper instance of the model'''
    def test_instance(self):
        self.assertIsInstance(self._obj, self.model)


class TestTodos(APITestCase, TestModel):
    def setUp(self):
        self.model = Todo
        self.data = { 'task': 'Clean the kitchen'}
        self._obj = self.model.objects.create(**self.data)

    '''test if `task` field has a proper value'''
    def test_task(self):
        self.assertEqual(self._obj.task, 'Clean the kitchen')

    '''test is `completed` field defaults to false'''
    def test_completion(self):
        self.assertFalse(self._obj.completed)

class TestChecklist(APITestCase, TestModel):
    def setUp(self):
        self.model = Checklist
        self.todo = Todo.objects.create(task='Clean the kitchen')
        self._obj = self.model.objects.create(todos=self.todo)

    '''check if two-sided relationship was established'''
    def test_relationship(self):
        self.assertIn(self._obj, self.todo.checklist_set.all())
        self.assertEqual(self._obj.todos, self.todo)



