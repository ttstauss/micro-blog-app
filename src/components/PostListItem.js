import React from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'

import { Card, CardContent, Typography, Fade } from '@material-ui/core'
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
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    '&:last-child': {
      paddingBottom: theme.spacing.medium
    },
    [theme.breakpoints.up('sm')]: {
      flexDirection: 'row',
      alignItems: 'center'
    }
  }
})

export const PostListItem = ({ id, title, createdAt, classes, num }) => {
  return (
    <Fade in={true} {...({ timeout: 100 * num })}>
      <Card className={classes['list-item']}>
        <Link className={classes['list-item__link']} to={`/edit/${id}`}>
          <CardContent className={classes['list-item__body']}>
            <Typography variant="title">{title}</Typography>
            <Typography variant="caption">{`Published or Updated on: ${moment(createdAt).format('MMMM Do, YYYY')}`}</Typography>
          </CardContent>
        </Link>
      </Card>
    </Fade>
  )
}

export default withStyles(styles)(PostListItem)