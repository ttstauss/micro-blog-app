import React, { Component } from 'react'
import { connect } from 'react-redux'
import { startAddPost } from '../actions/posts'
import PostForm from './PostForm'

import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  'content-container': {
    margin: '0 auto',
    maxWidth: '80rem',
    padding: `0 ${theme.spacing.medium}`
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
        <PostForm onSubmit={this.onSubmit} />
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  startAddPost: post => dispatch(startAddPost(post))
})

export default connect(undefined, mapDispatchToProps)(withStyles(styles)(AddPostPage))