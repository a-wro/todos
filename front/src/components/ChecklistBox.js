import React from 'react'
import { connect } from 'react-redux'
import CircularProgress from '@material-ui/core/CircularProgress'
import { getChecklists } from '../actions/getChecklists';

export class ChecklistBox extends React.Component {
    componentDidMount() {
        this.props.getChecklists()
    }

    render() {
        console.log(this.props)
        const { checklists } = this.props
        if (checklists.loading) {
            return (
                <div className="center">
                    <CircularProgress size={100}/>
                </div>
            )
        }

        if (checklists.items.length === 0)
            return <div> No checklists yet, start by adding a new one! </div>

        else {
            return <div> work in progress</div>
        }

    }
}


const mapStateToProps = state => {
    return {
        checklists: state.checklists
    }
}

export default connect(mapStateToProps, { getChecklists })(ChecklistBox)