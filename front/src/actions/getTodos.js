import axios from 'axios';

export const GET_TODOS_START = 'GET_POSTS_START';
export const GET_TODOS_SUCCESS = 'GET_POSTS_SUCCESS';
export const GET_TODOS_FAIL = 'GET_POSTS_FAIL';

const getTodosStart = () => ({
  type: GET_TODOS_START,
});

const getTodosSuccess = todos => ({
  type: GET_TODOS_SUCCESS,
  payload: todos,
});

const getTodosFail = error => ({
  type: GET_TODOS_FAIL,
  error,
});

export const getTodos = () => (dispatch) => {
  dispatch(getTodosStart());

  return axios({
    url: 'http://127.0.0.1:8000/api/todos/',
    method: 'get',
  })
    .then(res => {
      dispatch(getTodosSuccess(res.data));
      return res;
    })
    .catch(error => {
      dispatch(getTodosFail(error));
      return error;
    });
};