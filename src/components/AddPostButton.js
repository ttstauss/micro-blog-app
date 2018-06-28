import React from 'react'
import { Link } from 'react-router-dom'

import { Button } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'

const styles = {
  'button-container': {
    display: 'flex',
    flexDirection: 'column',
    margin: '0 0 2rem 0'
  }
}

export const AddPostButton = ({ classes }) => {
  return (
    <div className={classes['button-container']}>
      <Link to="/create">
        <Button variant="contained" color="primary">
          Add Post
        </Button>
      </Link>
    </div>
  )
}

export default withStyles(styles)(AddPostButton)