import React, { Component } from 'react'
import Remarkable from 'remarkable'
import moment from 'moment'

import { withStyles } from '@material-ui/core/styles'
import { Typography, Card, CardContent, Fade } from '@material-ui/core'
import postStyle from '../assets/postStyle'

export class Post extends Component {
  getRawMarkup() {
    const md = new Remarkable
    return { __html: md.render(this.props.body)}
  }
  render() {
    const { classes, title, createdAt } = this.props
    return (
      <Fade in={true}>
        <div className={classes['content-container']}>
          <Card className={classes.post}>
            <CardContent>
              <Typography variant="title">{title}</Typography>
              <Typography className={classes['post__caption']} variant="caption">Last updated {moment(createdAt).format('MMMM Do, YYYY')}</Typography>
              <div className={classes['post__body']} dangerouslySetInnerHTML={this.getRawMarkup()}></div>
            </CardContent>
          </Card>
        </div>
      </Fade>
    )
  }
}

export default withStyles(postStyle)(Post)