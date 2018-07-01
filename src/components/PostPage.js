import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import database from '../firebase/firebase'
import Post from './Post'

import CircularProgress from '@material-ui/core/CircularProgress'
import { withStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core';
import postPageStyle from '../assets/postPageStyle'

export class PostPage extends Component {
  state = {}
  componentDidMount() {
    const id = this.props.match.params.id
    database.ref(`posts/${id}`)
      .once('value')
      .then(snapshot => {
        this.setState({
          post: snapshot.val()
        })
        if(this.state.post === null) {
          this.props.history.push('/')
        }
      })
  }
  render() {
    const classes = this.props.classes
    if (this.state.post) {
      const { title, body, createdAt } = this.state.post
      return (
        <Fragment>
          {
            this.props.state.auth.uid &&
            <div className={classes['content-container']}>
              <Link
                className={classes.link}
                to={`/edit/${this.props.match.params.id}`}
              >
                <Typography
                  className={classes['link__text']}
                  gutterBottom
                >
                  Back
                </Typography>
              </Link>
            </div>
          }
          <Post title={title} body={body} createdAt={createdAt} />
        </Fragment>
      )
    } else {
      return (
        <div className={classes.loader}>
          <CircularProgress />
        </div>
      )
    }
  }
}

const mapStateToProps = state => ({
  state
})

export default connect(mapStateToProps)(withStyles(postPageStyle)(PostPage))