import React from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'

import { Card, CardContent, Typography, Fade } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import postListItemStyle from '../assets/postListItemStyle'

export const PostListItem = ({ id, title, createdAt, classes, num }) => {
  return (
    <Fade in={true} {...({ timeout: 100 * num })}>
      <Card className={classes['list-item']}>
        <Link className={classes['list-item__link']} to={`/edit/${id}`}>
          <CardContent className={classes['list-item__body']}>
            <Typography className={classes['list-item__title']} variant="title">{title}</Typography>
            <Typography variant="caption">{`Published or Updated on: ${moment(createdAt).format('MMMM Do, YYYY')}`}</Typography>
          </CardContent>
        </Link>
      </Card>
    </Fade>
  )
}

export default withStyles(postListItemStyle)(PostListItem)