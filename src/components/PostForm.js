import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import DeletePostButton from './DeletePostButton'
import PostPreview from './PostPreview'
import { startDeletePost } from '../actions/posts'
import moment from 'moment'

import { TextField, Button, Typography, Grow } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  form: {
    display: 'flex',
    flexDirection: 'column'
  },
  'form__text-field': {
    margin: `0 0 ${theme.spacing.medium} 0`
  },
  'form__button': {
    margin: `0 0 ${theme.spacing.medium} 0`
  }
})

export class PostForm extends Component {
  state = {
    title: this.props.post ? this.props.post.title : '',
    body: this.props.post ? this.props.post.body : '',
    createdAt: this.props.post ? this.props.post.createdAt : moment().valueOf(),
    error: '',
    dialogIsOpen: false,
    confirmDelete: false
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
      this.setState(() => ({ error: 'Please provide title and body'}))
    } else {
      this.setState(() => ({ error: '' }))
      this.props.onSubmit({
        title: this.state.title,
        body: this.state.body,
        createdAt: this.state.createdAt
      })
    }
  }
  onOpenDialog = () => {
    this.setState(() => ({
      dialogIsOpen: true
    }))
  }
  handleOnDelete = () => {
    this.setState(() => ({
      dialogIsOpen: false,
      confirmDelete: true
    }))
    this.props.startDeletePost(this.props.post.id)
    this.props.history.push('/dashboard')
  }
  handleOnCancel = () => {
    this.setState(() => ({ dialogIsOpen: false }))
  }
  render() {
    const { classes, history } = this.props
    return (
      <Fragment>
        <form className={classes.form} onSubmit={this.onSubmit}>
          <TextField
            className={classes['form__text-field']}
            placeholder="Post Title"
            autoFocus
            value={this.state.title}
            onChange={this.onTitleChange}
          />
          <TextField
            className={classes['form__text-field']}
            multiline
            rows={15}
            placeholder="Add the content for your post"
            value={this.state.body}
            onChange={this.onBodyChange}
          />
          <div>
            {
              this.state.error &&
              <Grow in={true}>
                <Typography
                  variant="caption"
                  align="center"
                  color="secondary"
                  gutterBottom
                >
                  {this.state.error}
                </Typography>
              </Grow>
            }
            <Button
              className={classes['form__button']}
              size="medium"
              type="submit"
              variant="contained"
              color="primary"
            >
              Save Post
            </Button>
          </div>
        </form>
        {history &&
          <DeletePostButton
            onClick={this.onOpenDialog}
            dialogIsOpen={this.state.dialogIsOpen}
            handleOnDelete={this.handleOnDelete}
            handleOnCancel={this.handleOnCancel}
          />
        }
        <PostPreview state={this.state} />
      </Fragment>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  startDeletePost: id => dispatch(startDeletePost(id))
})

export default connect(undefined, mapDispatchToProps)(withStyles(styles)(PostForm))