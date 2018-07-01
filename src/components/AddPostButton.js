import React from 'react'
import { Link } from 'react-router-dom'

import { Button } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import addPostButtonStyle from '../assets/addPostButtonStyle'

export const AddPostButton = ({ classes }) => {
  return (
    <div className={classes['button-container']}>
      <Link to="/create" style={{textDecoration: 'none'}}>
        <Button type="button" variant="contained" size="medium" color="primary">
          Add Post
        </Button>
      </Link>
    </div>
  )
}

export default withStyles(addPostButtonStyle)(AddPostButton)