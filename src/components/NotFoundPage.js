import React from 'react'
import { Link } from 'react-router-dom'

import { Card, CardContent, Typography, CardActions, Button } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  'box-layout': {
    alignItems: 'center',
    background: 'linear-gradient(to bottom right, #3f51b5, #606fc7)',
    display: 'flex',
    height: '100vh',
    justifyContent: 'center',
    width: '100vw',
  },
  'box-layout__box': {
    borderRadius: '3px',
    padding: `${theme.spacing.large} ${theme.spacing.medium}`,
    textAlign: 'center',
    maxWidth: '25rem',
    [theme.breakpoints.up('440')]: {
      maxWidth: '40rem',
    }
  },
  'box-layout__title': {
    padding: '0',
    margin: `0 0 ${theme.spacing.medium} 0`
  },
  'box-layout__subheading': {
    margin: `0 0 ${theme.spacing.medium} 0`
  }
})

export const NotFoundPage = ({ classes }) => (
  <div className={classes['box-layout']}>
    <Card className={classes['box-layout__box']}>
      <CardContent>
        <Typography
          className={classes['box-layout__title']}
          variant="headline"
          component="h1"
          color="primary"
        >
          404 - Oops!
        </Typography>
        <Typography
          className={classes['box-layout__subheading']}
          variant="subheading"
        >
          This is awkward...You are looking for something that doesn't actually exist
        </Typography>
      </CardContent>
      <CardActions style={{justifyContent: 'center'}}>
        <Link to="/">
          <Button
            size="medium"
            variant="contained"
            color="primary"
          >
            Maybe you can find it here
          </Button>
        </Link>
      </CardActions>
    </Card>
  </div>
)

export default withStyles(styles)(NotFoundPage)