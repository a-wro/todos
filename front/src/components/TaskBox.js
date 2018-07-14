import React from 'react'
import TaskForm from './forms/taskForm'

class TaskBox extends React.Component {
    state = {
        term: 'l0lZ',

    }

    handleSubmit = e => {
        e.preventDefault()
        console.log('submitted')
    }

    handleChange = e => {
        this.setState({ term: e.target.value })
    }

    render() {
        return (
            <div>
                <TaskForm 
                    value={this.state.term} 
                    handleSubmit={this.handleSubmit} 
                    handleChange={this.handleChange}
                />
            </div>
        )
    }
}

export default TaskBox