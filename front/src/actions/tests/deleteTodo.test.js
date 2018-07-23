import configureMockStore from 'redux-mock-store'
import moxios from 'moxios'
import  getTodosMock from '../../mocks/getTodosMock'
import thunk from 'redux-thunk'
import * as actions from '../deleteTodo'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares);

const id = 1

describe('test deleteTodo actions', () => {
    beforeEach(() => {
        moxios.install()
    })

    afterEach(() => {
        moxios.uninstall()
    })

    it('dispatches `DELETE_TODO_SUCCESS` after successfully fetching', () => {
        moxios.wait(() => {
            const request = moxios.requests.mostRecent()
            request.respondWith({
                status: 204,
            })
        })

        const expectedActions = [
            { type: actions.DELETE_TODO_START },
            { type: actions.DELETE_TODO_SUCCESS },
        ]

        const store = mockStore({ todos: [] })
        return store.dispatch(actions.deleteTodo(id)).then(() => {
            //return of async actions
            expect(store.getActions()).toEqual(expectedActions)
    })
  })
})
