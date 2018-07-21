import { MARK_TASK_SUCCESS, MARK_TASK_START, MARK_TASK_FAIL } from '../actions/uploadTask.js'

export const initialState = {
    uploading: false,
    method: '',
    error: null
}

const uploadTodoReducer = (state = initialState, action) => {
    switch(action.type) {
        case MARK_TASK_START:
            return {
                uploading: true,
                method: 'PUT',
                error: null
            }
        case MARK_TASK_FAIL:
            return {
                uploading: false,
                method: '',
                error: action.payload
            }
        case MARK_TASK_SUCCESS:
            return initialState
        default:
            return state
        }
}

export default uploadTodoReducer