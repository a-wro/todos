import React from 'react'
import Input from '@material-ui/core/Input'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'

const TaskForm = (props) => {
    const { onSubmit, onChange, value, handleClose, visible, type } = props
    return (
        <Dialog
            open={visible}
            onClose={handleClose}
            aria-labelledby="form-dialog-title"
        >
            <DialogTitle id="form-dialog-title">
                {type} a to-do
            </DialogTitle>
            <DialogContent>
            <form onSubmit={onSubmit} className="task-form">
                <Input
                    className="task-input"
                    value={value}
                    type="text"
                    onChange={onChange}
                    placeholder={type === 'Add' ? 'Enter a task' : 'Edit'}
                />
            </form>
            </DialogContent>
            <Button type="submit" onClick={onSubmit}>
                {type}
            </Button>
            <Button onClick={handleClose}>
                Cancel
            </Button>
        </Dialog>
    )
}

export default TaskForm