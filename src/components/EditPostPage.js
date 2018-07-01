import React, { Component }from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import PostForm from './PostForm'
import { startEditPost } from '../actions/posts'

import { Typography, Fade } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import editPostPageStyle from '../assets/editPostPageStyle'

export class EditPostPage extends Component {
  onSubmit = updates => {
    this.props.startEditPost(this.props.post.id, updates)
    this.props.history.push('/dashboard')
  }
  render() {
    const { classes } = this.props
    return (
      <Fade in={true}>
        <div className={classes['content-container']}>
          <div>
            <Link
              className={classes.link}
              to={`/read/${this.props.match.params.id}`}
            >
              <Typography
                className={classes['link__text']}
                gutterBottom
              >
                {`Post readable at ${window.location.origin}/read/${this.props.match.params.id}`}
              </Typography>
            </Link>
            <PostForm
              post={this.props.post}
              onSubmit={this.onSubmit}
              history={this.props.history}
            />
          </div>
        </div>
      </Fade>
    )
  }
}

const mapStateToProps = (state, props) => ({
  post: state.posts.find(post => post.id === props.match.params.id)
})

const mapDispatchToProps = dispatch => ({
  startEditPost: (id, updates) => dispatch(startEditPost(id, updates))
})

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(editPostPageStyle)(EditPostPage))