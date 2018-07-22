import { MARK_TASK_SUCCESS, MARK_TASK_START, MARK_TASK_FAIL, EDIT_TASK_START, EDIT_TASK_FAIL, EDIT_TASK_SUCCESS } from '../actions/updateTask.js'

export const initialState = {
    uploading: false,
    method: '',
    error: null
}

const updateTodoReducer = (state = initialState, action) => {
    switch(action.type) {
        case MARK_TASK_START:
        case EDIT_TASK_START:
            return {
                uploading: true,
                method: 'PATCH',
                error: null
            }
        case MARK_TASK_FAIL:
        case EDIT_TASK_FAIL:
            return {
                uploading: false,
                method: '',
                error: action.payload
            }
        case MARK_TASK_SUCCESS:
        case EDIT_TASK_SUCCESS:
            return initialState
        default:
            return state
        }
}

export default updateTodoReducer