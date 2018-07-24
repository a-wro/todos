import React from 'react'
import TaskForm from './forms/taskForm'
import Todo from './Todo'
import DeleteDialog from './DeleteDialog'
import { connect } from 'react-redux'
import { getTodos } from '../actions/getTodos'
import { postTodo } from '../actions/postTodo'
import { deleteTodo } from '../actions/deleteTodo'
import { editTask } from '../actions/updateTask'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'
import AddIcon from '@material-ui/icons/Add'
import CircularProgress from '@material-ui/core/CircularProgress'
import './styles/TaskBox.css'

export class TaskBox extends React.Component {

    componentDidMount() {
        this.props.getTodos()
    }

    state = {
        term: '',
        id: '', // active task in form
        dialogVisible: false,
        deleteDialogVisible: false,
        dialogType: null, // 'Add', 'Edit', 'Delete'
    }

    handleChange = e => {
        this.setState({ term: e.target.value })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        if (this.state.dialogType === 'Add') {
            this.props.postTodo(this.state.term)
        }
        else {
            this.props.editTask(this.state.id, this.state.term)
        }

        this.setState({ dialogVisible: false })
    }

    openTaskForm = () => {
        this.setState({ dialogVisible: true, dialogType: 'Add', term: '' })
    }

    openEditForm = (task, id) => {
        this.setState({ dialogVisible: true, dialogType: 'Edit', term: task, id: id })
    }

    openDeleteDialog = (id) => {
        this.setState({ deleteDialogVisible: true, id: id})
    }

    closeTaskForm = () => {
        this.setState({ dialogVisible: false })
    }

    closeDeleteDialog = () => {
        this.setState({ deleteDialogVisible: false })
    }

    confirmDelete = () => {
        console.log(this.state.id)
        this.props.deleteTodo(this.state.id)
        this.setState({ deleteDialogVisible: false })
    }

    render() {
        const { todos, deleteTodo } = this.props
        if (todos.loading) {
            return (
                <div className="center">
                   <CircularProgress size={100}/>
                </div>
            )
        }

        return (
            <div className="task-box">
                <TaskForm
                    visible={this.state.dialogVisible}
                    type={this.state.dialogType}
                    handleClose={this.closeTaskForm}
                    onChange={this.handleChange}
                    value={this.state.term}
                    onSubmit={this.handleSubmit}
                />

                <DeleteDialog
                    visible={this.state.deleteDialogVisible}
                    handleClose={this.closeDeleteDialog}
                    confirmDelete={this.confirmDelete}
                />


                  {todos.tasks.map(task => {
                      return (
                        <Paper key={task.id} className="todo-paper">
                            <Todo
                                className="task"
                                id={task.id}
                                task={task.task}
                                completed={task.completed}
                                openEditForm={this.openEditForm}
                                openDeleteDialog={this.openDeleteDialog}
                            />
                        </Paper>
                      )
                  })}

                <div className="add-button">
                    <Button
                        onClick={this.openTaskForm}
                        variant="fab"
                        color="primary"
                        aria-label="Add">
                        <AddIcon />
                    </Button>
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

export default connect(mapStateToProps, { getTodos, postTodo, editTask, deleteTodo })(TaskBox)