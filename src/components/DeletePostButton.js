import React, { Fragment } from 'react'
import DeletePostModal from './DeletePostModal'

import { Button } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  button: {
    margin: `0 0 ${theme.spacing.medium} 0`
  }
})

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
      <DeletePostModal
        modalIsOpen={props.modalIsOpen}
        handleOnDelete={props.handleOnDelete}
        handleOnCancel={props.handleOnCancel}
      />
    </Fragment>
  )
}

export default withStyles(styles)(DeletePostButton)