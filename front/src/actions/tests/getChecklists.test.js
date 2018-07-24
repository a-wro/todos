import configureMockStore from 'redux-mock-store'
import * as actions from '../getChecklists'
import moxios from 'moxios'
import  getChecklistsMock from '../../mocks/getChecklistsMock'
import thunk from 'redux-thunk';

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares);
describe('test getChecklists actions', () => {
    beforeEach(() => {
        moxios.install()
    })

    afterEach(() => {
        moxios.uninstall()
    })

    it('dispatches `GET_Checklists_SUCCESS` after successfully fetching', () => {
        moxios.wait(() => {
            const request = moxios.requests.mostRecent()
            request.respondWith({
                status: 200,
                response: getChecklistsMock,
            })
        })

        const expectedActions = [
            { type: actions.GET_CHECKLISTS_START },
            { type: actions.GET_CHECKLISTS_SUCCESS, payload: getChecklistsMock },
        ]

        const store = mockStore({ checklists: [] })
        return store.dispatch(actions.getChecklists()).then(() => {
            //return of async actions
            expect(store.getActions()).toEqual(expectedActions)
    })
  })
})
