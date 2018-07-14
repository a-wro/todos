import React from 'react';
import TaskBox from '../TaskBox'
import TaskForm from '../forms/taskForm'
import { shallow } from 'enzyme'

describe('TaskBox', () => {
  const taskbox = shallow(<TaskBox />)
  
  describe('Rendering', () => {
    it('renders without crashing', () => {
        expect(taskbox).toMatchSnapshot()
      })
      
      it('correctly renders a `TaskForm` component', () => {
        expect(taskbox.find(TaskForm).exists()).toBe(true)
        
      })


  })
 

})
