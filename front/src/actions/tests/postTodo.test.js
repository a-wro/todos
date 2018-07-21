import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import moxios from 'moxios'
import * as actions from '../postTodo'
import postTodoMock from '../../mocks/postTodoMock'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('test postTodo actions', () => {
    beforeEach(() => {
        moxios.install()
    })

    afterEach(() => {
        moxios.uninstall()
    })

    it('dispatches `POST_TODO_SUCCESS` after successfully posting', () => {
       moxios.wait(() => {
           const request = moxios.requests.mostRecent()
           request.respondWith({
               status: 201,
               response: postTodoMock
           })
       })

        const expectedActions = [
            { type: actions.POST_TODO_START },
            { type: actions. POST_TODO_SUCCESS, payload: postTodoMock }
        ]

        const store = mockStore({})
        store.dispatch(actions.postTodo()).then(() => {
            expect(store.getActions()).toEqual(expectedActions)
        })
    })
})
