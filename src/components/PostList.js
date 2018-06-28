import React from 'react'
import { connect } from 'react-redux'
import PostListItem from './PostListItem'
import selectPosts from '../selectors/posts'

import { Card, CardContent, Typography } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  'list-item__body': {
    display: 'flex',
    justifyContent: 'center',
    '&:last-child': {
      paddingBottom: theme.spacing.medium
    }
  }
})

export const BlogList = ({ classes, posts }) => {
  return (
    <div>
      {
        posts.length === 0 ? (
          <Card>
            <CardContent className={classes['list-item__body']}>
              <Typography>You haven't created any posts yet!</Typography>
            </CardContent>
          </Card>
        ) : (
          posts.map(post => (
            <PostListItem key={post.id} {...post} />
          ))
        )
      }
    </div>
  )
}

const mapStateToProps = state => ({
  posts: selectPosts(state.posts, state.filters)
})

export default connect(mapStateToProps)(withStyles(styles)(BlogList))