import axios from 'axios'

export const MARK_TASK_START = 'MARK_TASK_START'
export const MARK_TASK_SUCCESS = 'MARK_TASK_START_SUCCESS'
export const MARK_TASK_FAIL = 'MARK_TASK_FAIL'

export const EDIT_TASK_START = 'EDIT_TASK_START'
export const EDIT_TASK_SUCCESS = 'EDIT_TASK_SUCCESS'
export const EDIT_TASK_FAIL = 'EDIT_TASK_FAIL'

export const markTaskStart = () => {
    return {
        type: MARK_TASK_START
    }
}

export const markTaskFail = err => {
    return {
        type: MARK_TASK_FAIL,
        payload: err
    }
}

export const markTaskSuccess = () => {
    return {
        type: MARK_TASK_SUCCESS,
    }
}

export const markTask = (id, newMark) => dispatch => {
    dispatch(markTaskStart())

    return axios({
        method: 'PATCH',
        url: `http://127.0.0.1:8000/api/todo/update/${id}/`,
        data: { completed: !newMark }
    })
    .then(res => {
        dispatch(markTaskSuccess())
        return res
    })
    .catch(err => {
        dispatch(markTaskFail(err))
        return err
    })
}

export const editTaskStart = () => {
    return {
        type: EDIT_TASK_START
    }
}

export const editTaskFail = err => {
    return {
        type: EDIT_TASK_FAIL,
        payload: err
    }
}

export const editTaskSuccess = () => {
    return {
        type: EDIT_TASK_SUCCESS,
    }
}

export const editTask = (id, newTask) => dispatch => {
    dispatch(editTaskStart())

    return axios({
        method: 'PATCH',
        url: `http://127.0.0.1:8000/api/todo/update/${id}/`,
        data: { task: newTask }
    })
    .then(res => {
        dispatch(editTaskSuccess())
        return res
    })
    .catch(err => {
        dispatch(editTaskFail(err))
        return err
    })
}