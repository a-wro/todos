import React from 'react'
import { shallow } from 'enzyme'
import TaskForm from '../taskForm'

describe('TaskForm', () => {
    const taskForm = shallow(<TaskForm />)
    describe('rendering', () => {
        it('renders correctly', () => {
            expect(taskForm).toMatchSnapshot()
        })
    })

    describe('handling input', () => {
        it('when user types something', () => {
            
        })
    })

})