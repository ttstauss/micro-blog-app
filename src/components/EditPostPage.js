import React, { Component }from 'react'
import { connect } from 'react-redux'
import PostForm from './PostForm'
import DeletePostModal from './DeletePostModal'
import { startEditPost, startDeletePost } from '../actions/posts'

import { Button } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  'content-container': {
    margin: '0 auto',
    maxWidth: '80rem',
    padding: `0 ${theme.spacing.medium}`
  },
  button: {
    margin: `0 0 ${theme.spacing.medium} 0`
  }
})

export class EditPostPage extends Component {
  state = {
    modalIsOpen: false,
    confirmDelete: false
  }
  onSubmit = updates => {
    this.props.startEditPost(this.props.post.id, updates)
    this.props.history.push('/dashboard')
  }
  onOpenModal = () => {
    this.setState(() => ({
      modalIsOpen: true
    }))
  }
  handleOnDelete = () => {
    this.setState(()=> ({
      modalIsOpen: false,
      confirmDelete: true
    }))
    this.props.startDeletePost(this.props.post.id)
    this.props.history.push('/dashboard')
  }
  handleOnCancel = () => {
    this.setState(() => ({ modalIsOpen: false }))
  }
  render() {
    const { classes } = this.props
    return (
      <div className={classes['content-container']}>
        <div>
          <PostForm
            post={this.props.post}
            onSubmit={this.onSubmit}
          />
          <Button
            className={classes.button}
            variant="contained"
            onClick={this.onOpenModal}
          >
            Delete Post
          </Button>
        </div>
        <DeletePostModal
          modalIsOpen={this.state.modalIsOpen}
          handleOnDelete={this.handleOnDelete}
          handleOnCancel={this.handleOnCancel}
        />
      </div>
    )
  }
}

const mapStateToProps = (state, props) => ({
  post: state.posts.find(post => post.id === props.match.params.id)
})

const mapDispatchToProps = dispatch => ({
  startEditPost: (id, updates) => dispatch(startEditPost(id, updates)),
  startDeletePost: id => dispatch(startDeletePost(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(EditPostPage))