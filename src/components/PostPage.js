import React, { Component } from 'react'
import database from '../firebase/firebase'
import Post from './Post'

import CircularProgress from '@material-ui/core/CircularProgress'
import { withStyles } from '@material-ui/core/styles'

const styles = {
  loader: {
    alignItems: 'center',
    display: 'flex',
    height: '100vh',
    justifyContent: 'center',
    width: '100vw'
  }
}

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
        <Post title={title} body={body} createdAt={createdAt} />
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

export default withStyles(styles)(PostPage)