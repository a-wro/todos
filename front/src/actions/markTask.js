import axios from 'axios'

export const MARK_TASK_START = 'MARK_TASK_START'
export const MARK_TASK_SUCCESS = 'MARK_TASK_START_SUCCESS'
export const MARK_TASK_FAIL = 'MARK_TASK_FAIL'

export const markTaskStart = () => {
    return {
        type: MARK_TASK_START
    }
}

export const markTaskFail = () => {
    return {
        type: MARK_TASK_FAIL
    }
}

export const markTaskSuccess = data => {
    return {
        type: MARK_TASK_SUCCESS,
        payload: data
    }
}

const markTask = todo => dispatch => {
    dispatch(markTaskStart())

    return axios({
        method: 'PUT',
        url: `http://127.0.0.1:8000/api/todo/update/${todo.id}/`,
        data: todo
    })
    .then(res => {
        dispatch(markTaskSuccess(res.data))
        return res
    })
    .then(err => {
        dispatch(markTaskFail(err))
        return err
    })
}

export default markTask