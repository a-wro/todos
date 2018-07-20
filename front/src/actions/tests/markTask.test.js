import moxios from 'moxios'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import  postTodoMock from '../../mocks/postTodoMock'
import markTask, { MARK_TASK_SUCCESS, MARK_TASK_START } from '../markTask'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('test markTask actions', () => {
    beforeEach(() => {
        moxios.install()
    })
    afterEach(() => {
        moxios.uninstall()
    })

    it('Dispatches  `MARK_TODO_SUCCESS` after a successful PUT request', () => {
        const expectedActions = [
            { type: MARK_TASK_START },
            { type: MARK_TASK_SUCCESS, payload: postTodoMock }
        ]
        moxios.wait(() => {
            const request = moxios.requests.mostRecent()
            request.respondWith({
                status: 200,
                response: postTodoMock
            })
        })

            const store = mockStore({ todos: [] })

            return store.dispatch(markTask())
            .then(() => {
             //return of async actions
             expect(store.getActions()).toEqual(expectedActions)
            })
    })
})
