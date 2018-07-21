import React from 'react'
import Checkbox from '@material-ui/core/Checkbox'
import { connect } from 'react-redux'
import { markTask } from '../actions/updateTask'

export class Todo extends React.Component {
    state = {
        completed: this.props.completed
    }

    handleClick = e => {
        this.props.markTask(this.props.id, this.state.completed)

        this.setState((prevState) => ({
            completed: !prevState.completed
        }))

        if (this.props.handleClick) { this.props.handleClick() } // for unit test
    }

    render() {
        const { task, completed } = this.props
        return (
            <div className="task">
                <Checkbox
                    onClick={this.handleClick}
                    className="task-checkbox"
                    checked={this.state.completed}
                />
                { task }
            </div>
        )
    }
}

export default connect(null, { markTask })(Todo)