import axios from "axios";

export const DELETE_TODO_START = 'DELETE_TODO_START'
export const DELETE_TODO_FAIL = 'DELETE_TODO_FAIL'
export const DELETE_TODO_SUCCESS = 'DELETE_TODO_SUCCESS'

export const deleteTodoStart = () => {
    return {
        type: DELETE_TODO_START
    }
}

export const deleteTodoFail = (err) => {
    return {
        type: DELETE_TODO_FAIL
    }
}

export const deleteTodoSuccess = () => {
    return {
        type: DELETE_TODO_SUCCESS
    }
}

export const deleteTodo = (id) => (dispatch) => {
    dispatch(deleteTodoStart())

    return axios({
        method: 'delete',
        url: `http://localhost:8000/api/todo/delete/${id}/`,
        data: { pk: id }
    })
    .then(res => {
        dispatch(deleteTodoSuccess())
        return res
    })
    .catch(err => {
        dispatch(deleteTodoFail(err))
        return err
    })
}