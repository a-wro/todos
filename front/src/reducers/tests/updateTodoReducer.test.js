import updateTodoReducer, { initialState } from '../updateTodoReducer'
import { EDIT_TASK_START, EDIT_TASK_SUCCESS, EDIT_TASK_FAIL } from '../../actions/updateTask';

describe('updateTodoReducer test', () => {
    it('returns initial state', () => {
        expect(updateTodoReducer(undefined, {})).toEqual(initialState)
    })

    it('handles editTaskStart action', () => {
        expect(updateTodoReducer(undefined, { type: EDIT_TASK_START}))
        .toEqual({
            uploading: true,
            method: 'PATCH',
            error: null
        })
    })

    it('handles editTaskFail action', () => {
        expect(updateTodoReducer(undefined, {
            type: EDIT_TASK_FAIL,
            payload: 'ERROR'}))
            .toEqual({
                uploading: false,
                method: '',
                error: 'ERROR'
            })
        })

    it('handles editTaskSuccess action', () => {
        expect(updateTodoReducer(undefined, { type: EDIT_TASK_SUCCESS }))
        .toEqual(initialState)
    })

    it('handles editTaskStart action', () => {
        expect(updateTodoReducer(undefined, { type: EDIT_TASK_START}))
        .toEqual({
            uploading: true,
            method: 'PATCH',
            error: null
        })
    })

    it('handles editTaskFail action', () => {
        expect(updateTodoReducer(undefined, {
            type: EDIT_TASK_FAIL,
            payload: 'ERROR'}))
            .toEqual({
                uploading: false,
                method: '',
                error: 'ERROR'
            })
        })

    it('handles editTaskSuccess action', () => {
        expect(updateTodoReducer(undefined, { type: EDIT_TASK_SUCCESS }))
        .toEqual(initialState)
    })


})