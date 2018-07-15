import React from 'react'
import TaskForm from './forms/taskForm'
import { connect } from 'react-redux'
import { getTodos } from '../actions/getTodos'

export class TaskBox extends React.Component {

    componentDidMount() {
        this.props.getTodos()
    }

    state = { 
        term: ''
    }

    handleChange = e => { 
        this.setState({ term: e.target.value })
    }

    handleSubmit = e => {
        if(this.props.handleSubmit) { this.props.handleSubmit(e)}
        e.preventDefault()
        console.log('submitted')
    }

    render() {
        const { todos } = this.props
        return (
            <div>
                
                <TaskForm 
                    onChange={this.handleChange}
                    value={this.state.term} 
                    onSubmit={this.handleSubmit}
                />
                
                <div>
                  {todos.tasks.map(todo => {
                      return (
                        <div key={todo.id}>
                            {todo.task}
                        </div>
                      )
                  })}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        todos: state.todos
    }
}

export default connect(mapStateToProps, { getTodos })(TaskBox)