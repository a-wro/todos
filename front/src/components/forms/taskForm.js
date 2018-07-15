import React from 'react'

class TaskForm extends React.Component {
    render() {
        const { onSubmit, onChange, value} = this.props
        return (
            <form onSubmit={onSubmit} className="task-form">
                <input 
                    className="task-input"
                    value={value} 
                    type="text" 
                    onChange={onChange}          
                    placeholder="Enter a task"
                />
                <input type="submit" value="add task" />
            </form> 
        )
    }
}

export default TaskForm