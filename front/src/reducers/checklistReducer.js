import { GET_CHECKLISTS_FAIL, GET_CHECKLISTS_START, GET_CHECKLISTS_SUCCESS } from "../actions/getChecklists";


const initialState = {
    items: [],
    loading: false,
    error: null,
}

const checklistReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_CHECKLISTS_START:
            return {
                ...state,
                loading: true
            }
        case GET_CHECKLISTS_FAIL:
            return {
                ...state,
                error: action.payload
            }
        case GET_CHECKLISTS_SUCCESS:
            return {
                ...initialState,
                items: action.payload
            }
        default:
            return state
    }
}

export default checklistReducer