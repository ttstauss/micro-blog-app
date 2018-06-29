import React from 'react'
import PostListFilters from './PostListFilters'
import AddPostButton from './AddPostButton'
import PostList from './PostList'

import { withStyles } from '@material-ui/core/styles'
import { Fade } from '@material-ui/core'

const styles = theme => ({
  'content-container': {
    margin: '0 auto',
    maxWidth: '80rem',
    padding: `0 ${theme.spacing.medium}`
  },
  'actions-container': {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      flexDirection: 'row',
      justifyContent: 'space-between'
    }
  }
})

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

export default withStyles(styles)(DashboardPage)