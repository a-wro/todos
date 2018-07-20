import React from 'react'

export class Todo extends React.Component {
    state = {
        completed: this.props.completed,
    }

    handleClick = e => {
        this.setState({ completed: !this.state.completed })
    }

    render() {
        const { task } = this.props
        return (
            <div>
                <input
                    onClick={this.handleClick}
                    className="task-checkbox"
                    type="checkbox"
                    value={this.state.completed}
                />
                { task }
            </div>
        )
    }
}

export default Todo