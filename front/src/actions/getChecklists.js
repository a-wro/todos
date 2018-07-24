import axios from "axios";

export const GET_CHECKLISTS_START = 'GET_CHECKLISTS_START'
export const GET_CHECKLISTS_FAIL = 'GET_CHECKLISTS_FAIL'
export const GET_CHECKLISTS_SUCCESS = 'GET_CHECKLISTS_SUCCESS'

export const getChecklistsStart = () => {
    return {
        type: GET_CHECKLISTS_START
    }
}

export const getChecklistsFail = (err) => {
    return {
        type: GET_CHECKLISTS_FAIL,
        payload: err
    }
}

export const getChecklistsSuccess = (data) => {
    return {
        type: GET_CHECKLISTS_SUCCESS,
        payload: data
    }
}

export const getChecklists = () => (dispatch) => {
    dispatch(getChecklistsStart())
    console.log('called')

    return axios({
        url: 'http://127.0.0.1:8000/api/checklists/',
        method: 'get',
      })
    .then((res) => {
        dispatch(getChecklistsSuccess(res.data))
        return res
    })
    .catch((err) => {
        dispatch(getChecklistsFail(err.toString()))
        return err
    })
}