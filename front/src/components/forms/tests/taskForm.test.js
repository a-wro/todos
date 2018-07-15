import React from 'react'
import { shallow } from 'enzyme'
import TaskForm from '../taskForm'

describe('TaskForm', () => {
    const testData = 'test'
    const mockChange = jest.fn()
    const mockSubmit = jest.fn()

    const props = {
        handleChange: mockChange,
        handleSubmit: mockSubmit,
    }
    
    const taskForm = shallow(<TaskForm {...props} />)
    
    describe('rendering', () => {
        it('renders correctly', () => {
            expect(taskForm).toMatchSnapshot()
        })
    })

    describe('handling input', () => {
        const event = { target: { value: testData }}
        beforeEach(() => {
            taskForm.find('.task-input').simulate('change', event)
        })

        it('onChange handler called', () => {
            expect(mockChange).toHaveBeenCalledWith(event)
        })

        it('local state updates', () => {
            expect(taskForm.state().term).toEqual(testData)
        })
    })

    describe('submitting input', () => {
        beforeEach(() => {
            taskForm.find('.task-form').simulate('submit', {
                preventDefault: () => {},
            })
        })

        it('submits properly', () => {
            expect(mockSubmit).toHaveBeenCalled()
        })
    
    
    })
       
    
    

    

})