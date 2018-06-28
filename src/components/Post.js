import React from 'react'
import keyIndex from 'react-key-index'
import moment from 'moment'

import { withStyles } from '@material-ui/core/styles'
import { Typography, Card, CardContent } from '@material-ui/core'

const styles = theme => ({
  'content-container': {
    margin: '0 auto',
    maxWidth: '80rem',
    padding: `0 ${theme.spacing.medium}`
  },
  post: {
    margin: `${theme.spacing.medium} 0`
  },
  'post__caption': {
    marginBottom: `${theme.spacing.large}`
  },
  'post__body': {
    marginBottom: `${theme.spacing.medium}`
  }
})

export const Post = ({ classes, body, title, createdAt }) => {
  let bodyArr = body.split('\n').filter(text => text !== '')
  bodyArr = keyIndex(bodyArr, 1)
  return (
    <div className={classes['content-container']}>
      <Card className={classes.post}>
        <CardContent>
          <Typography variant="title" component="h1">{title}</Typography>
          <Typography className={classes['post__caption']} variant="caption">Last updated {moment(createdAt).format('MMMM Do, YYYY')}</Typography>
          {bodyArr.map(arr => (
            <Typography className={classes['post__body']} key={arr.id}>{arr.value}</Typography>
          ))}
        </CardContent>
      </Card>
    </div> 
  )
}

export default withStyles(styles)(Post)