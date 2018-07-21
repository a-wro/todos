import updateTodoReducer, { initialState } from '../updateTodoReducer'
import { MARK_TASK_START, MARK_TASK_SUCCESS, MARK_TASK_FAIL } from '../../actions/updateTask';

describe('updateTodoReducer test', () => {
    it('returns initial state', () => {
        expect(updateTodoReducer(undefined, {})).toEqual(initialState)
    })

    it('handles markTaskStart action', () => {
        expect(updateTodoReducer(undefined, { type: MARK_TASK_START}))
        .toEqual({
            uploading: true,
            method: 'PATCH',
            error: null
        })
    })

    it('handles markTaskFail action', () => {
        expect(updateTodoReducer(undefined, {
            type: MARK_TASK_FAIL,
            payload: 'ERROR'}))
            .toEqual({
                uploading: false,
                method: '',
                error: 'ERROR'
            })
        })

    it('handles markTaskSuccess action', () => {
        expect(updateTodoReducer(undefined, { type: MARK_TASK_SUCCESS }))
        .toEqual(initialState)
    })


})