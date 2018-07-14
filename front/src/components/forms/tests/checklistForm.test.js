import React from 'react'
import { shallow } from 'enzyme'
import ChecklistForm from '../checklistForm'

describe('ChecklistForm', () => {
    const checklistForm = shallow(<ChecklistForm />)
    describe('rendering', () => {
        it('renders correctly', () => {
            expect(checklistForm).toMatchSnapshot()
        })
    })











})