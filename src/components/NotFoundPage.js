import React from 'react'
import { Link } from 'react-router-dom'

import { Card, CardContent, Typography, CardActions, Button } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import notFoundPageStyle from '../assets/notFoundPageStyle'

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

export default withStyles(notFoundPageStyle)(NotFoundPage)