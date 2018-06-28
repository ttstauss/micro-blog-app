import React from 'react'
import CircularProgress from '@material-ui/core/CircularProgress'

import { withStyles } from '@material-ui/core/styles'

const styles = {
  loader: {
    alignItems: 'center',
    display: 'flex',
    height: '100vh',
    justifyContent: 'center',
    width: '100vw'
  }
}

export const LoadingPage = ({ classes }) => {
  return (
    <div className={classes.loader}>
      <CircularProgress />
    </div>
  )
}

export default withStyles(styles)(LoadingPage)