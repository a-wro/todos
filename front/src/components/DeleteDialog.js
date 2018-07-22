import React from 'react'
import Dialog from '@material-ui/core/Dialog'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import Button from '@material-ui/core/Button'
import { connect } from 'react-redux'

export class DeleteDialog extends React.Component {

    render() {
        const { visible, handleClose } = this.props
        return (
            <div className="delete-dialog">
                <Dialog
                    open={visible}
                    onClose={handleClose}
                    aria-labelledby="delete-dialog-title"
                >
                    <DialogTitle id="form-dialog-title">
                            Delete
                    </DialogTitle>
                    <DialogContent>
                        Are you sure you want to remove the task?
                    </DialogContent>
                    <Button type="submit">
                    Delete
                    </Button>
                    <Button onClick={handleClose}>
                        Cancel
                    </Button>
               </Dialog>
            </div>
        )
    }
}


export default connect(null, null)(DeleteDialog)
