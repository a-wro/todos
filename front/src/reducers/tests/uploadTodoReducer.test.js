import uploadTodoReducer, { initialState } from '../uploadTodoReducer'
import { MARK_TASK_START, MARK_TASK_SUCCESS, MARK_TASK_FAIL } from '../../actions/uploadTask';

describe('uploadTodoReducer test', () => {
    it('returns initial state', () => {
        expect(uploadTodoReducer(undefined, {})).toEqual(initialState)
    })

    it('handles markTaskStart action', () => {
        expect(uploadTodoReducer(undefined, { type: MARK_TASK_START}))
        .toEqual({
            uploading: true,
            method: 'PUT',
            error: null
        })
    })

    it('handles markTaskFail action', () => {
        expect(uploadTodoReducer(undefined, {
            type: MARK_TASK_FAIL,
            payload: 'ERROR'}))
            .toEqual({
                uploading: false,
                method: '',
                error: 'ERROR'
            })
        })

    it('handles markTaskSuccess action', () => {
        expect(uploadTodoReducer(undefined, { type: MARK_TASK_SUCCESS }))
        .toEqual(initialState)
    })


})