import React from 'react';
import { TaskBox } from '../TaskBox'
import TaskForm from '../forms/taskForm'
import { shallow } from 'enzyme'
import getTodosMock from '../../mocks/getTodosMock'

describe('TaskBox', () => {
  const props = { todos: { tasks: getTodosMock } }
  const taskbox = shallow(<TaskBox {...props} />)
  
  describe('Rendering', () => {
    it('renders without crashing', () => {
        expect(taskbox).toMatchSnapshot()
      })
      
      it('correctly renders a `TaskForm` component', () => {
        expect(taskbox.find(TaskForm).exists()).toBe(true)
        
      })


  })
 

})
