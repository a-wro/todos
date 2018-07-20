import React from 'react'
import { Todo } from '../Todo'
import { shallow } from 'enzyme'


describe('Todo', () => {
    const props = { task: 'Test', completed: false}
    const todo = shallow(<Todo {...props} />)

    describe('Rendering', () => {
        it('renders properly', () => {
            expect(todo).toMatchSnapshot()
        })

        it('renders a checkbox', () => {
            expect(todo.find('.task-checkbox').exists()).toBe(true)
        })

    })

    describe('State related tests', () => {
        beforeEach(() => {
            todo.find('.task-checkbox').simulate('click')
        })

        it('Changes `completed` to true from previously false on click', () => {
            expect(todo.state().completed).toBe(true)
        })
    })

})
