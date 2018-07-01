import React from 'react'
import { connect } from 'react-redux'
import PostListItem from './PostListItem'
import selectPosts from '../selectors/posts'
import FlipMove from 'react-flip-move'

import { Card, CardContent, Typography, Fade } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import postListStyle from '../assets/postListStyle'

export const BlogList = ({ classes, posts }) => {
  return (
    <div>
      <Typography variant="title" gutterBottom>
        Posts
      </Typography>
      {
        posts.length === 0 ? (
          <Card>
            <CardContent className={classes['list-item__body']}>
              <Typography className={classes.message} variant="title">Couldn't find any posts</Typography>
            </CardContent>
          </Card>
        ) : (
          <FlipMove>
            {posts.map((post, index) => (
              <PostListItem key={post.id} num={index} {...post} />
            ))}
          </FlipMove>
        )
      }
    </div>
  )
}

const mapStateToProps = state => ({
  posts: selectPosts(state.posts, state.filters)
})

export default connect(mapStateToProps)(withStyles(postListStyle)(BlogList))