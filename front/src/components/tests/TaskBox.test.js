import React from 'react';
import { TaskBox } from '../TaskBox'
import { shallow } from 'enzyme'
import getTodosMock from '../../mocks/getTodosMock'

describe('TaskBox', () => {
  const props = { 
    todos: { tasks: getTodosMock },
  }

  

  const taskbox = shallow(<TaskBox {...props} />)
  
  describe('Rendering', () => {
    it('renders without crashing', () => {
        expect(taskbox).toMatchSnapshot()
      })
      
      it('correctly renders a `TaskForm` component', () => {
        expect(taskbox.find('TaskForm').exists()).toBe(true)    
      })

  describe('State related tests', () => {
    describe('Term changes after handleChange call', () => {
      taskbox.find('TaskForm').simulate('change', { target: { value: 'test' } })
      expect(taskbox.state().term).toEqual('test')

    })
  })

  })

 

})
