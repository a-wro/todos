import axios from 'axios'
export const POST_TODO_START = 'POST_TODO_START'
export const POST_TODO_FAIL = 'POST_TODO_FAIL'
export const POST_TODO_SUCCESS = 'POST_TODO_SUCCESS'

export const postTodoStart = () => {
    return {
        type: POST_TODO_START
    }
}

export const postTodoFail = err => {
    return {
        type: POST_TODO_FAIL
    }
}

export const postTodoSuccess = data => {
    return {
        type: POST_TODO_SUCCESS,
        payload: data
    }
}

export const postTodo = task => dispatch => {
    dispatch(postTodoStart)
    return axios({
        method: 'post',
        url: 'http://127.0.0.1:8000/api/todo/create',
        data: task
    })
    .then(res => {
        dispatch(postTodoSuccess(res.data))
        return res
    })
    .catch(err => {
        dispatch(postTodoFail(err))
        return err
    })
}