import React from 'react'
import { Link } from 'react-router-dom'

import { Card, CardContent, Typography } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  'list-item': {
    transitionDuration: `${theme.transitions.duration.standard}ms`,
    transitionProperty: 'background',
    transitionTimingFunction: `${theme.transitions.easing.easeInOut}`,
    margin: `0 0 ${theme.spacing.small}`,
    '&:hover': {
      background: '#fafafa'
    }
  },
  'list-item__link': {
    textDecoration: 'none',
  },
  'list-item__body': {
    '&:last-child': {
      paddingBottom: theme.spacing.medium
    }
  }
})

export const PostListItem = ({ id, title, classes }) => {
  return (
    <Card className={classes['list-item']}>
      <Link className={classes['list-item__link']} to={`/edit/${id}`}>
        <CardContent className={classes['list-item__body']}>
          <Typography variant="title">{title}</Typography>
        </CardContent>
      </Link>
    </Card>
  )
}

export default withStyles(styles)(PostListItem)