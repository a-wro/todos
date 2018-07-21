import React from 'react'
import Input from '@material-ui/core/Input'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import TextField from '@material-ui/core/TextField'

class TaskForm extends React.Component {

    render() {
        const { onSubmit, onChange, value} = this.props
        return (
            <Dialog
                open={this.props.visible}
                onClose={this.props.handleClose}
                aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title"> Add task </DialogTitle>
                <DialogContent>
                <form onSubmit={onSubmit} className="task-form">
                <Input
                    className="task-input"
                    value={value}
                    type="text"
                    onChange={onChange}
                    placeholder="Enter a task"
                />
                <Button variant="contained" color="primary" type="submit"> Add Task </Button>
                </form>
                </DialogContent>
                <Button onClick={this.props.handleClose}>
                  Cancel
                </Button>
                <Button type="submit" onClick={this.onSubmit}>
                  Add
                </Button>
            </Dialog>
        )
    }
}

export default TaskForm