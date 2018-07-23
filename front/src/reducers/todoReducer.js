import { GET_TODOS_SUCCESS, GET_TODOS_START, GET_TODOS_FAIL } from "../actions/getTodos";

//export for testing
export const initialState = {
    tasks: [],
    loading: false,
    error: null,
}

const todoReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_TODOS_START:
            return {
                ...state,
                loading: true,
                error: null
            }

        case GET_TODOS_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                tasks: action.payload
            }

        case GET_TODOS_FAIL:
            return {
                ...state,
                loading: true, // tymczasowo
                error: true,
            }

        default:
            return state
    }
}

export default todoReducer