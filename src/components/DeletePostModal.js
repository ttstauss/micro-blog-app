import React from 'react'

import { Modal, Typography, Button } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    left: '50%',
    padding: theme.spacing.unit * 4,
    position: 'absolute',
    textAlign: 'center',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    width: theme.spacing.unit * 50,
    maxWidth: '25rem'
  },
  'modal__title': {
    padding: '0',
    margin: `0 0 ${theme.spacing.medium} 0`
  },
  'modal__subheading': {
    margin: `0 0 ${theme.spacing.medium} 0`
  },
  'modal__button-group': {
    display: 'flex',
    flexDirection: 'column'
  },
  'modal__button': {
    marginBottom: theme.spacing.small
  }
})

export const DeletePostModal = ({ modalIsOpen, handleOnCancel, handleOnDelete, classes }) => (
  <Modal
    className={classes.modal}
    open={modalIsOpen}
  >
    <div className={classes.paper}>
      <Typography
        className={classes['modal__title']}
        variant="title"
      >
        Are you sure?
      </Typography>
      <Typography
        className={classes['modal__subheading']}
        variant="subheading"
      >
        You will not be able to recover this posts.
      </Typography>
      <div className={classes['modal__button-group']}>
        <Button
          className={classes['modal__button']}
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
  </Modal>
)

export default withStyles(styles)(DeletePostModal)
