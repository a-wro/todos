import React from 'react';
import App from '../App';
import TaskBox from '../TaskBox'
import { shallow } from 'enzyme'

describe('App', () => {
  const app = shallow(<App />)
  describe('Rendering', () => {
    it('renders without crashing', () => {
      expect(app).toMatchSnapshot()
    })
    
    it('correctly renders a `TaskBox` component', () => {
      expect(app.find(TaskBox).exists()).toBe(true)
      
    })
  
  
  
  })
})
