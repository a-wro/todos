import checklistReducer, { initialState } from '../checklistReducer'
import { GET_CHECKLISTS_FAIL, GET_CHECKLISTS_START, GET_CHECKLISTS_SUCCESS } from '../../actions/getChecklists';
import getChecklistsMock from '../../mocks/getChecklistsMock';


describe('test checklistReducer cases', () => {
    it('handles GET_CHECKLISTS_START', () => {
        expect(checklistReducer(undefined, { type: GET_CHECKLISTS_START}))
            .toEqual({ items: [], loading: true, error: null })
    })

    it('handles GET_CHECKLISTS_FAIL', () => {
        expect(checklistReducer(undefined, { type: GET_CHECKLISTS_FAIL, payload: 'error'}))
            .toEqual({ items: [], loading: false, error: 'error' })
    })

    it('handles GET_CHECKLISTS_SUCCESS', () => {
        expect(checklistReducer(undefined, { type: GET_CHECKLISTS_SUCCESS, payload: getChecklistsMock }))
            .toEqual({ items: getChecklistsMock, loading: false, error: null })
    })
})