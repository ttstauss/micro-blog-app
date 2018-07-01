import React from 'react'

import { Dialog, Typography, Button } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import deletePostDialogStyle from '../assets/deletePostDialogStyle'

export const DeletePostDialog = ({ dialogIsOpen, handleOnCancel, handleOnDelete, classes }) => (
  <Dialog
    open={dialogIsOpen}
    onClose={handleOnCancel}
  >
    <div className={classes['dialog__paper']}>
      <Typography
        className={classes['dialog__title']}
        variant="title"
      >
        Are you sure?
      </Typography>
      <Typography
        className={classes['dialog__subheading']}
        variant="subheading"
      >
        You will not be able to recover this post.
      </Typography>
      <div className={classes['dialog__button-group']}>
        <Button
          className={classes['dialog__button']}
          variant="contained"
          size="medium"
          onClick={handleOnCancel}
        >
          Cancel
        </Button>
        <Button
          variant="contained"
          size="medium"
          color="secondary"
          onClick={handleOnDelete}
        >
          Yes, delete it!
        </Button>
      </div>
    </div>
  </Dialog>
)

export default withStyles(deletePostDialogStyle)(DeletePostDialog)
