import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { startAddPost } from '../actions/posts'
import PostForm from './PostForm'

import { withStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'

const styles = theme => ({
  'content-container': {
    margin: '0 auto',
    maxWidth: '80rem',
    padding: `0 ${theme.spacing.medium}`
  },
  link: {
    transition: 'color .3s ease',
    '&:hover': {
      color: 'rgba(63, 81, 181, 1)'
    }
  },
  'link__text': {
    transition: 'color .3s ease',
    '&:hover': {
      color: 'rgba(63, 81, 181, 1)'
    }
  }
})

export class AddPostPage extends Component {
  onSubmit = post => {
    this.props.startAddPost(post)
    this.props.history.push('/dashboard')
  }
  render() {
    const { classes } = this.props
    return (
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
    )
  }
}

const mapDispatchToProps = dispatch => ({
  startAddPost: post => dispatch(startAddPost(post))
})

export default connect(undefined, mapDispatchToProps)(withStyles(styles)(AddPostPage))