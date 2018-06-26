import React, { Component } from 'react'
import moment from 'moment'

export class PostForm extends Component {
  state = {
    title: this.props.post ? this.props.post.title : '',
    body: this.props.post ? this.props.post.body : '',
    createdAt: this.props.post ? this.props.post.createdAt : moment().valueOf(),
    error: ''
  }
  onTitleChange = e => {
    const title = e.target.value
    this.setState(() => ({ title }))
  }
  onBodyChange = e => {
    const body = e.target.value
    this.setState(() => ({ body }))
  }
  onSubmit = e => {
    e.preventDefault()
    if (!this.state.title || !this.state.body) {
      this.setState(() => ({ error: 'Please provide title and body '}))
    } else {
      this.setState(() => ({ error: '' }))
      this.props.onSubmit({
        title: this.state.title,
        body: this.state.body,
        createdAt: this.state.createdAt
      })
    }
  }
  render() {
    return (
      <form onSubmit={this.onSubmit}>
        {this.state.error && <p>{this.state.error}</p>}
        <input
          type="text"
          placeholder="Post Title"
          autoFocus
          value={this.state.title}
          onChange={this.onTitleChange}
        />
        <textarea
          placeholder="Add the content for your post"
          value={this.state.body}
          onChange={this.onBodyChange}
        />
        <button>Save Post</button>
      </form>
    )
  }
}

export default PostForm