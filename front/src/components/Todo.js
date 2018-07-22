import React from 'react'
import Checkbox from '@material-ui/core/Checkbox'
import Button from '@material-ui/core/Button'
import DeleteIcon from '@material-ui/icons/Delete'
import Icon from '@material-ui/core/Icon'
import { connect } from 'react-redux'
import { markTask} from '../actions/updateTask'
import './styles/Todo.css'

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
        const { task, id, openDeleteDialog, openEditForm } = this.props
        return (
            <div className="task">
                <Checkbox
                    onClick={this.handleClick}
                    className="task-checkbox"
                    checked={this.state.completed}
                />
                { task }

                <Button
                    className="todo-btn"
                    mini
                    onClick={() => openDeleteDialog(id)}
                    variant="fab"
                    color="secondary"
                    aria-label="Delete">
                    <DeleteIcon />
                </Button>
                <Button
                    className="todo-btn"
                    mini
                    onClick={() => openEditForm(task, id)}
                    variant="fab"
                    color="default"
                    aria-label="Edit">
                    <Icon>edit</Icon>
                </Button>

            </div>
        )
    }
}

export default connect(null, { markTask })(Todo)