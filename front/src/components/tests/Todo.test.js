import React from 'react'
import { Todo } from '../Todo'
import { shallow } from 'enzyme'


describe('Todo', () => {
    const mockClick = jest.fn()
    const mockMarkTask = jest.fn()
    const props = { task: 'Test', completed: false, handleClick: mockClick, markTask: mockMarkTask }
    const todo = shallow(<Todo {...props} />)

    describe('Rendering', () => {
        it('renders properly', () => {
            expect(todo).toMatchSnapshot()
        })

        it('renders a checkbox', () => {
            expect(todo.find('.task-checkbox').exists()).toBe(true)
        })

    })

    describe('Action related tests', () => {
        beforeEach(() => {
            todo.find('.task-checkbox').simulate('click')
        })

        it('Dispatches `markTask` after clicking on a checkbox', () => {
            expect(mockMarkTask).toHaveBeenCalled()
        })
    })

})
