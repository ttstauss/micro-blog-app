import React from 'react'
import { connect } from 'react-redux'
import { startGoogleLogin } from '../actions/auth'
import Button from '@material-ui/core/Button'

import { Card, CardContent, Typography, CardActions } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'

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
    minWidth: '25rem'
  },
  'box-layout__title': {
    padding: '0',
    margin: `0 0 ${theme.spacing.medium} 0`
  },
  'box-layout__subheading': {
    margin: `0 0 ${theme.spacing.medium} 0`
  },
  'button--google': {
    background: 'rgb(219, 50, 54)',
    color: 'white',
    '&:hover': {
      background: 'rgba(219, 50, 54, 0.8)'
    }
  },
  'icon-social': {
    marginRight: theme.spacing.small
  }
})

export const LoginPage = ({ startGoogleLogin, classes }) => {
  return (
    <div className={classes['box-layout']}>
      <Card className={classes['box-layout__box']}>
        <CardContent style={{padding: '0'}}>
          <Typography className={classes['box-layout__title']} variant="headline" component="h1">
            BLOG DEMO
          </Typography>
          <Typography className={classes['box-layout__subheading']} variant="subheading">
            Blog to your hearts content
          </Typography>
        </CardContent>
        <CardActions style={{justifyContent: 'center'}}>
          <Button
            className={classes['button--google']}
            variant="contained"
            size="large"
            onClick={startGoogleLogin}
          >
            <FontAwesomeIcon
              className={classes['icon-social']}
              icon={faGoogle}
            />
            Login with Google
          </Button>
        </CardActions>
      </Card>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  startGoogleLogin: () => dispatch(startGoogleLogin())
})

export default connect(undefined, mapDispatchToProps)(withStyles(styles)(LoginPage))