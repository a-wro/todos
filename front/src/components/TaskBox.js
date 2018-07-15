import React from 'react'
import TaskForm from './forms/taskForm'
import { connect } from 'react-redux'
import { getTodos } from '../actions/getTodos'

export class TaskBox extends React.Component {

    componentDidMount() {
        this.props.getTodos()
    }

    render() {
        const { todos } = this.props
        return (
            <div>
                <TaskForm/>
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