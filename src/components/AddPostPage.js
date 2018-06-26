import React, { Component } from 'react'
import { connect } from 'react-redux'
import { startAddPost } from '../actions/posts'
import PostForm from './PostForm'

export class AddPostPage extends Component {
  onSubmit = post => {
    this.props.startAddPost(post)
    this.props.history.push('/dashboard')
  }
  render() {
    return (
      <div>
        <PostForm onSubmit={this.onSubmit} />
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  startAddPost: post => dispatch(startAddPost(post))
})

export default connect(undefined, mapDispatchToProps)(AddPostPage)