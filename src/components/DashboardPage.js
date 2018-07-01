import React from 'react'
import PostListFilters from './PostListFilters'
import AddPostButton from './AddPostButton'
import PostList from './PostList'

import { withStyles } from '@material-ui/core/styles'
import { Fade } from '@material-ui/core'
import dashboardPageStyle from '../assets/dashboardPageStyle'

export const DashboardPage = ({ classes }) => {
  return (
    <Fade in={true}>
      <div className={classes['content-container']}>
        <div className={classes['actions-container']}>
          <PostListFilters />
          <AddPostButton />
        </div>
        <PostList />
      </div>
    </Fade>
  )
}

export default withStyles(dashboardPageStyle)(DashboardPage)