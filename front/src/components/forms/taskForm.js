import React from 'react'

class TaskForm extends React.Component {
    render() {
        const { value, handleChange, handleSubmit } = this.props
        return (
            <form onSubmit={handleSubmit}>
                <input 
                    value={value} 
                    type="text" 
                    onChange={handleChange}          
                    placeholder="Enter a task"
                />
                <input type="submit" value="add task" />
            </form> 
        )
    }
}

export default TaskForm