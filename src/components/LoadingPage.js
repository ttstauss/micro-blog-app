import React from 'react'

import CircularProgress from '@material-ui/core/CircularProgress'
import { withStyles } from '@material-ui/core/styles'
import loadingPageStyle from '../assets/loadingPageStyle'

export const LoadingPage = ({ classes }) => {
  return (
    <div className={classes.loader}>
      <CircularProgress />
    </div>
  )
}

export default withStyles(loadingPageStyle)(LoadingPage)