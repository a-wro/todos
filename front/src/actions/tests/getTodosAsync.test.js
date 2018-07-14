import configureMockStore from 'redux-mock-store'
import * as actions from '../getTodos'
import moxios from 'moxios'
import { getTodosMock } from '../../mocks/getTodosMock'
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
                status: 200,
                response: getTodosMock,
            })
        })
    
        const expectedActions = [
            { type: actions.GET_TODOS_START },
            { type: actions.GET_TODOS_SUCCESS, payload: getTodosMock },
        ]

        const store = mockStore({ todos: [] })
        return store.dispatch(actions.getTodos()).then(() => {
            //return of async actions
            expect(store.getActions()).toEqual(expectedActions)
    })
  })
})
