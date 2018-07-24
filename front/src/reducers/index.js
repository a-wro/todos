import { combineReducers } from 'redux'
import todoReducer from './todoReducer';
import checklistReducer from './checklistReducer'

const rootReducer = combineReducers({
    todos: todoReducer,
    checklists: checklistReducer,
})

export default rootReducer