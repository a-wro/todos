import React from 'react'

class TaskForm extends React.Component {
    
    state = { 
        term: ''
    }

    handleChange = e => {
        
        this.setState({ term: e.target.value })
        if (this.props.handleChange) { this.props.handleChange(e) } //for test
    }

    handleSubmit = e => {
        e.preventDefault()
        console.log('submitted')
        if (this.props.handleSubmit) { this.props.handleSubmit() } //for test
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} className="task-form">
                <input 
                    className="task-input"
                    value={this.state.term} 
                    type="text" 
                    onChange={this.handleChange}          
                    placeholder="Enter a task"
                />
                <input type="submit" value="add task" />
            </form> 
        )
    }
}

export default TaskForm