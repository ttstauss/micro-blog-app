import React, { Fragment } from 'react'
import DeletePostDialog from './DeletePostDialog'

import { Button } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import deletePostButtonStyle from '../assets/deletePostButtonStyle'

export const DeletePostButton = props => {
  const { classes } = props
  return (
    <Fragment>
      <Button
        className={classes.button}
        size="medium"
        variant="contained"
        onClick={props.onClick}
      >
        Delete Post
      </Button>
      <DeletePostDialog
        dialogIsOpen={props.dialogIsOpen}
        handleOnDelete={props.handleOnDelete}
        handleOnCancel={props.handleOnCancel}
      />
    </Fragment>
  )
}

export default withStyles(deletePostButtonStyle)(DeletePostButton)