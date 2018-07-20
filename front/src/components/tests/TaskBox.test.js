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

      it('correctly renders a `Todo` component', () => {
        expect(taskbox.find('Todo').exists()).toBe(true)
      })
  })

  describe('State related tests', () => {
    const event = {
      target: {
        value: 'test'
      }
    }

    it('Term changes after child calls onChange callback', () => {
      taskbox.find('TaskForm').simulate('change', event)
      expect(taskbox.state().term).toEqual(event.target.value)

    })



  })





})
