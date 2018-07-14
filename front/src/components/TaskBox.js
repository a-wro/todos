import React from 'react'
import TaskForm from './forms/taskForm'
import { connect } from 'react-redux'
import { getTodos } from '../actions/getTodos'

export class TaskBox extends React.Component {

    componentDidMount() {
        this.props.getTodos()
    }

    state = {
        term: '',

    }

    handleSubmit = e => {
        e.preventDefault()
        console.log('submitted')
    }

    handleChange = e => {
        this.setState({ term: e.target.value })
    }

    render() {
        const { todos } = this.props
        console.log(todos.todos)
        return (
            <div>
                <TaskForm 
                    value={this.state.term} 
                    handleSubmit={this.handleSubmit} 
                    handleChange={this.handleChange}
                />

                <div>
                  {todos.todos.map(elem => {
                      return (
                        <div key={elem.id}>
                            {elem.task}
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