import React, { Component } from 'react'
import moment from 'moment'

import { TextField, Button, Typography } from '@material-ui/core'
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
    const { classes } = this.props
    return (
      <form className={classes.form} onSubmit={this.onSubmit}>
        {
          this.state.error
          &&
          <Typography
            variant="caption"
            align="center"
            color="secondary"
            gutterBottom
          >
            {this.state.error}
          </Typography>
        }
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
          rows={25}
          placeholder="Add the content for your post"
          value={this.state.body}
          onChange={this.onBodyChange}
        />
        <div>
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
    )
  }
}

export default withStyles(styles)(PostForm)