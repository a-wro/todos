import React from 'react'
import Checkbox from '@material-ui/core/Checkbox';
import { connect } from 'react-redux'
import { markTask } from '../actions/uploadTask'

export class Todo extends React.Component {
    handleClick = e => {
        this.props.markTask(this.props.id, this.props.completed)
        if (this.props.handleClick) { this.props.handleClick() } // for unit test
    }

    render() {
        const { task, completed } = this.props
        return (
            <div>
                <Checkbox
                    onClick={this.handleClick}
                    className="task-checkbox"
                    checked={completed}
                />
                { task }
            </div>
        )
    }
}

export default connect(null, { markTask })(Todo)