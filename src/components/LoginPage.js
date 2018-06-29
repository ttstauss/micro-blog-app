import React, { Component } from 'react'
import { connect } from 'react-redux'
import { startGoogleLogin, startRegisterUser, startEmailLogin, sendResetLink } from '../actions/auth'
import Button from '@material-ui/core/Button'

import { Card, CardContent, Typography, CardActions, TextField } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'
import { faAt } from '@fortawesome/free-solid-svg-icons'

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
    width: theme.spacing.unit * 50,
    maxWidth: '25rem',
    [theme.breakpoints.up('340')]: {
      maxWidth: '32rem',
    }
  },
  'box-layout__title': {
    padding: '0',
    margin: `0 0 ${theme.spacing.medium} 0`
  },
  'box-layout__subheading': {
    margin: `0 0 ${theme.spacing.medium} 0`
  },
  textField: {
    width: '100%',
    marginBottom: theme.spacing.medium
  },
  button: {
    width: '100%'
  },
  'button--email': {
    marginBottom: theme.spacing.medium
  },
  'button--google': {
    background: 'rgb(219, 50, 54)',
    color: 'white',
    marginBottom: theme.spacing.medium,
    '&:hover': {
      background: 'rgba(219, 50, 54, 0.8)'
    }
  },
  'icon-social': {
    marginRight: theme.spacing.small
  },
  link: {
    transition: 'color .3s ease',
    marginBottom: theme.spacing.medium,
    '&:hover': {
      color: 'rgba(63, 81, 181, 1)',
      cursor: 'pointer'
    }
  },
  'link__text': {
    transition: 'color .3s ease',
    '&:hover': {
      color: 'rgba(63, 81, 181, 1)'
    }
  },
  caption: {
    marginBottom: theme.spacing.medium
  }
})

export class LoginPage extends Component {
  state = {
    email: '',
    password: '',
    typeOfSubmit: undefined,
    showReset: false,
    resetSent: false
  }
  onEmailChange = e => {
    const email = e.target.value
    this.setState(() => ({ email }))
  }
  onPasswordChange = e => {
    const password = e.target.value
    this.setState(() => ({ password }))
  }
  onLogin = () => {
    this.setState(() => ({
      typeOfSubmit: 'login'
    }),
    () => this.onSubmit())
  }
  onRegister = () => {
    this.setState(() => ({
      typeOfSubmit: 'register'
    }),
    () => this.onSubmit())
  }
  onSubmit = () => {
    if (!this.state.email || !this.state.password) {
      this.setState(() => ({ error: 'Please provide an email and password' }))
    } else {
      this.setState(() => ({ error: '' }))
      if (this.state.typeOfSubmit === 'login') {
        this.props.startEmailLogin(this.state.email, this.state.password)
          .catch(error => {
            console.log(error.message)
          })
      }
      if (this.state.typeOfSubmit === 'register') {
        this.props.startRegisterUser(this.state.email, this.state.password)
          .catch(error => {
            console.log(error.message)
          })
      }
    }
  }
  handleGetEmail = () => {
    this.setState(prevState => ({
      reset: !prevState.showReset
    }))
  }
  sendReset = () => {
    this.props.sendResetLink(this.state.email)
      .then(() => {
        this.setState(() => ({
          reset: false,
          resetSent: true
        }))
      }).catch(error => {
        console.log(error.message)
      })
  }
  render() {
    const { startGoogleLogin, classes} = this.props
    return (
      <div className={classes['box-layout']}>
        <Card className={classes['box-layout__box']}>
          <CardContent style={{padding: '0'}}>
            <Typography className={classes['box-layout__title']} variant="headline" component="h1">
              MY MICRO BLOG
            </Typography>
            <Typography className={classes['box-layout__subheading']} variant="subheading">
              Blog to your hearts content
            </Typography>
          </CardContent>
          <CardActions style={{justifyContent: 'center', flexDirection: 'column'}}>
            <form>
              <TextField
                className={classes.textField}
                label="Email"
                onChange={this.onEmailChange}
              />
              <TextField
                className={classes.textField}
                type="password"
                label="Password"
                onChange={this.onPasswordChange}
              />
              <Button
                className={[classes.button, classes['button--email']].join(' ')}
                variant="contained"
                color="primary"
                size="medium"
                onClick={this.onLogin}
              >
                <FontAwesomeIcon
                  className={classes['icon-social']}
                  icon={faAt}
                />
                Login with Email
              </Button>
              <Button
                className={[classes.button, classes['button--email']].join(' ')}
                variant="contained"
                size="medium"
                onClick={this.onRegister}
              >
                <FontAwesomeIcon
                  className={classes['icon-social']}
                  icon={faAt}
                />
                Register with Email
              </Button>
              <Typography gutterBottom>- OR -</Typography>
              <Button
                className={[classes['button--google'], classes['button']].join(' ')}
                variant="contained"
                size="medium"
                type="button"
                onClick={startGoogleLogin}
              >
                <FontAwesomeIcon
                  className={classes['icon-social']}
                  icon={faGoogle}
                />
                Login with Google
              </Button>
            </form>
            <a
              className={classes.link}
              type="button"
              onClick={this.handleGetEmail}
            >
              <Typography
                className={classes['link__text']}
              >
                Forgot password?
              </Typography>
            </a>
            {this.state.reset &&
              <form>
                <Typography
                  variant="caption"
                  className={classes.caption}
                >
                  Please provide the email address you would like a password reset link sent to.
                </Typography>
                <TextField
                  className={classes.textField}
                  label="Email"
                  onChange={this.onEmailChange}
                />
                <Button
                  className={[classes.button, classes['button--email']].join(' ')}
                  variant="contained"
                  size="light"
                  size="medium"
                  onClick={this.sendReset}
                >
                  Send Reset
                </Button>
              </form>
            }
            {this.state.resetSent &&
              <Typography
                variant="caption"
                className={classes.caption}
              >
                A reset link has been sent to your email.
              </Typography>
            }
          </CardActions>
        </Card>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  startRegisterUser: (email, password) => dispatch(startRegisterUser(email, password)),
  startEmailLogin: (email, password) => dispatch(startEmailLogin(email, password)),
  startGoogleLogin: () => dispatch(startGoogleLogin()),
  sendResetLink: email => dispatch(sendResetLink(email))
})

export default connect(undefined, mapDispatchToProps)(withStyles(styles)(LoginPage))