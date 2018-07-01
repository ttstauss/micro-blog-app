import React, { Component } from 'react'
import { connect } from 'react-redux'
import { startAddPost } from '../actions/posts'
import PostForm from './PostForm'

import { withStyles } from '@material-ui/core/styles'
import { Typography, Fade } from '@material-ui/core'
import addPostPageStyle from '../assets/addPostPageStyle'

export class AddPostPage extends Component {
  onSubmit = post => {
    this.props.startAddPost(post)
    this.props.history.push('/dashboard')
  }
  render() {
    const { classes } = this.props
    return (
      <Fade in={true}>
        <div className={classes['content-container']}>
          <a
            className={classes.link}
            href={'https://jonschlinkert.github.io/remarkable/demo/'}
            target={'_blank'}
            rel={'noopener'}
          >
            <Typography
              className={classes['link__text']}
              gutterBottom
            >
              Use Remarkable syntax to style your post.
            </Typography>
          </a>
          <PostForm onSubmit={this.onSubmit} />
        </div>
      </Fade>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  startAddPost: post => dispatch(startAddPost(post))
})

export default connect(undefined, mapDispatchToProps)(withStyles(addPostPageStyle)(AddPostPage))