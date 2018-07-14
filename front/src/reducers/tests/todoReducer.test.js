import todoReducer, { initialState } from '../todoReducer'
import { GET_TODOS_START, GET_TODOS_FAIL, GET_TODOS_SUCCESS } from '../../actions/getTodos';
import getTodosMock from '../../mocks/getTodosMock'

describe('todoReducer', () => {
    it('returns the initial state', () => {
        expect(todoReducer(undefined, {})).toEqual(initialState)
    })

    it('handles GET_TODOS_START', () => {
        expect(todoReducer(undefined, { type: GET_TODOS_START})).toEqual({...initialState, loading: true })
    })

    it('handles GET_TODOS_FAIL', () => {
        expect(todoReducer(undefined, { type: GET_TODOS_FAIL})).toEqual({...initialState, error: true })
    })

    it('handles GET_TODOS_SUCCESS', ()  => {
        expect(todoReducer(undefined, { 
            type: GET_TODOS_SUCCESS, 
            payload: getTodosMock}))
            .toEqual({...initialState, todos: getTodosMock })
    })

})