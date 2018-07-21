import axios from 'axios'

export const MARK_TASK_START = 'MARK_TASK_START'
export const MARK_TASK_SUCCESS = 'MARK_TASK_START_SUCCESS'
export const MARK_TASK_FAIL = 'MARK_TASK_FAIL'

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