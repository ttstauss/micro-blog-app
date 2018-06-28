import React, { Component }from 'react'
import Remarkable from 'remarkable'
import moment from 'moment'

import { Card, CardContent, Typography } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  post: {
      margin: `${theme.spacing.medium} 0`
  },
  'post__caption': {
    marginBottom: `${theme.spacing.large}`
  },
  'post__body': {
    ...theme.typography,
    '& img': {
      maxWidth: '100%'
    }
  }
})

export class PreviewPost extends Component {
  getRawMarkup() {
    const md = new Remarkable
    const body = this.props.state.body
    if (body) {
      return { __html: md.render(this.props.state.body) }
    } else {
      return { __html: 'See your Remarkable syntax render here!'}
    }
  }
  render() {
    const { classes, state } = this.props
    const { title, body, createdAt } = state
    return (
      <Card className={classes.post}>
        <CardContent>
          <Typography variant="title">{title ? title : 'Preview Your Post Title Here!'}</Typography>
          <Typography className={classes['post__caption']} variant="caption">Last updated {moment(createdAt).format('MMMM Do, YYYY')}</Typography>
          <div className={classes['post__body']} dangerouslySetInnerHTML={this.getRawMarkup()}></div>
        </CardContent>
      </Card>
    )
  }
}

export default withStyles(styles)(PreviewPost)