import configureMockStore from 'redux-mock-store'
import * as actions from '../postTodo'
import moxios from 'moxios'
import  postTodoMock from '../../mocks/postTodoMock'
import thunk from 'redux-thunk';

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares);
describe('test getTodos actions', () => {
    beforeEach(() => {
        moxios.install()
    })

    afterEach(() => {
        moxios.uninstall()
    })

    it('dispatches `GET_TODOS_SUCCESS` after successfully fetching', () => {
        moxios.wait(() => {
            const request = moxios.requests.mostRecent()
            request.respondWith({
                status: 201,
                response: postTodoMock,
            })
        })
    
        const expectedActions = [
            { type: actions.POST_TODO_START },
            { type: actions.POST_TODO_SUCCESS, payload: postTodoMock },
        ]

        const store = mockStore({ todos: [] })
        return store.dispatch(actions.postTodo('task')).then(() => {
            //return of async actions
            expect(store.getActions()).toEqual(expectedActions)
    })
  })
})
