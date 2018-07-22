import moxios from 'moxios'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { markTask, MARK_TASK_SUCCESS, MARK_TASK_START, editTask, EDIT_TASK_SUCCESS, EDIT_TASK_START } from '../updateTask'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('test markTask actions', () => {
    const id = 1
    beforeEach(() => {
        moxios.install()
    })
    afterEach(() => {
        moxios.uninstall()
    })

    it('Dispatches  `MARK_TODO_SUCCESS` after a successful PUT request', () => {
        const expectedActions = [
            { type: MARK_TASK_START },
            { type: MARK_TASK_SUCCESS }
        ]
        moxios.wait(() => {
            const request = moxios.requests.mostRecent()
            request.respondWith({
                status: 200
            })
        })

            const store = mockStore()

            return store.dispatch(markTask(id))
            .then(() => {
               //return of async actions
               expect(store.getActions()).toEqual(expectedActions)
            })
    })
})

describe('test editTask actions', () => {
    const id = 1
    const prevTask = 'test'
    const newTask = 'test2'
    beforeEach(() => {
        moxios.install()
    })

    afterEach(() => {
        moxios.uninstall()
    })

    it('Dispatches `EDIT_TASK_SUCCESS` after successfully editing', () => {
        const expectedActions = [
            { type: EDIT_TASK_START },
            { type: EDIT_TASK_SUCCESS },
        ]

        moxios.wait(() => {
            const request = moxios.requests.mostRecent()
            request.respondWith({
                status: 200
            })
        })

        const store = mockStore()
        return store.dispatch(editTask(id, newTask))
        .then(() => {
            expect(store.getActions()).toEqual(expectedActions)
        })
    })
})
