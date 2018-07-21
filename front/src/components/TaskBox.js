import React from 'react'
import TaskForm from './forms/taskForm'
import Todo from './Todo'
import { connect } from 'react-redux'
import { getTodos } from '../actions/getTodos'
import { postTodo } from '../actions/postTodo'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import Button from '@material-ui/core/Button'
import AddIcon from '@material-ui/icons/Add'

export class TaskBox extends React.Component {

    componentDidMount() {
        this.props.getTodos()
    }

    state = {
        term: '',
        showTaskDialog: false
    }

    handleChange = e => {
        this.setState({ term: e.target.value })
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.postTodo(this.state.term)
    }

    openTaskForm = () => {
        this.setState({ showTaskDialog: true })
    }

    closeTaskForm = () => {
        this.setState({ showTaskDialog: false })
    }

    render() {
        const { todos } = this.props

        if (todos.loading) return <div> LOADING </div>

        return (
            <div>
                <TaskForm
                    visible={this.state.showTaskDialog}
                    handleClose={this.closeTaskForm}
                    onChange={this.handleChange}
                    value={this.state.term}
                    onSubmit={this.handleSubmit}
                />

                <List>
                  {todos.tasks.map(task => {
                      return (
                        <ListItem key={task.id}>
                            <Todo
                                id={task.id}
                                task={task.task}
                                completed={task.completed}
                            />
                        </ListItem>
                      )
                  })}
                </List>

            <Button onClick={this.openTaskForm} variant="fab" color="primary" aria-label="Add">
                <AddIcon />
            </Button>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        todos: state.todos

    }
}

export default connect(mapStateToProps, { getTodos, postTodo })(TaskBox)