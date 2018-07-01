import React, { Component } from 'react'
import { connect } from 'react-redux'
import { startGoogleLogin, startRegisterUser, startEmailLogin, sendResetLink } from '../actions/auth'
import Button from '@material-ui/core/Button'
import _ from 'lodash'

import { Typography, TextField, Collapse, Fade, Dialog, DialogContent, Backdrop } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'
import { faAt } from '@fortawesome/free-solid-svg-icons'

const styles = theme => ({
  root: {
    background: 'linear-gradient(to bottom right, #3f51b5, #606fc7)'
  },
  paperWidthSm: {
    maxWidth: '420px'
  },
  backdrop: {
    backgroundColor: 'transparent'
  },
  'login__title': {
    textAlign: 'center',
    padding: '0',
    margin: `0 0 ${theme.spacing.medium} 0`
  },
  'login__subheading': {
    textAlign: 'center',
    margin: `0 0 ${theme.spacing.medium} 0`
  },
  'login__textField': {
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
    textAlign: 'center',
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
  text: {
    textAlign: 'center',
    marginBottom: theme.spacing.medium
  },
  caption: {
    textAlign: 'center',
    marginBottom: theme.spacing.medium
  }
})

export class LoginPage extends Component {
  state = {
    email: '',
    password: '',
    typeOfSubmit: undefined,
    showReset: false,
    resetSent: false,
    windowWidth: undefined
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
      this.setState(() => ({
        emailError: !this.state.email && 'Please provide an email',
        passwordError: !this.state.password && 'Please provide a password'
      }))
    } else {
      this.setState(() => ({ error: '' }))
      if (this.state.typeOfSubmit === 'login') {
        this.props.startEmailLogin(this.state.email, this.state.password)
          .catch(error => {
            // console.log('signIn error: ', error.message)
            if (error.code === 'auth/invalid-email') {
              this.setState(() => ({
                emailError: 'Please provide a valid email address',
                passwordError: undefined
              }))
            }
            if (error.code === 'auth/user-not-found') {
              this.setState(() => ({
                userOrPasswordError: 'Email or password is incorrect',
                emailError: undefined,
                passwordError: undefined
              }))
            }
            if (error.code === 'auth/wrong-password') {
              this.setState(() => ({
                userOrPasswordError: 'Email or password is incorrect',
                emailError: undefined,
                passwordError: undefined
              }))
            }
          })
      }
      if (this.state.typeOfSubmit === 'register') {
        this.props.startRegisterUser(this.state.email, this.state.password)
          .catch(error => {
            // console.log('register error:', error)
            if (error.code === 'auth/invalid-email') {
              this.setState(() => ({
                emailError: 'Please provide a valid email address',
                passwordError: undefined
              }))
            }
            if (error.code === 'auth/weak-password') {
              this.setState(() => ({
                passwordError: 'Password should be at least 6 characters',
                emailError: undefined,
              }))
            }
          })
      }
    }
  }
  handleGetEmail = () => {
    this.setState(prevState => ({
      showReset: !prevState.showReset,
      resetSent: false
    }))
  }
  sendReset = () => {
    this.props.sendResetLink(this.state.email)
      .then(() => {
        this.setState(() => ({
          showReset: false,
          resetSent: true
        }))
      }).catch(error => {
        console.log(error.message)
      })
  }
  updateWindowWidth = _.throttle(() => {
    this.setState({
      windowWidth: window.innerWidth
    })
  }, 200)
  componentDidMount() {
    this.updateWindowWidth()
    window.addEventListener('resize', this.updateWindowWidth)
  }
  componentWillUnmount(prevState) {
    window.removeEventListener('resize', this.updateWindowWidth)
  }
  render() {
    const { startGoogleLogin, classes} = this.props
    return (
      <Dialog
        open={true}
        disableBackdropClick={true}
        disableEscapeKeyDown={true}
        fullScreen={this.state.windowWidth < 420}
        maxWidth="sm"
        BackdropProps={{
          classes: {
            root: classes.backdrop
          }
        }}
        classes={{
          paperWidthSm: classes.paperWidthSm
        }}
        className={classes.root}
      >
        <DialogContent
          className={classes.login}
        >
          <Typography className={classes['login__title']} variant="headline" component="h1">
            MICRO BLOG
          </Typography>
          <Typography className={classes['login__subheading']} variant="subheading">
            Blog your heart out
          </Typography>
          <Collapse
            in={!!this.state.userOrPasswordError}
          >
            <Typography
              variant="caption"
              className={classes.caption}
              color="secondary"
            >
              {this.state.userOrPasswordError}
            </Typography>
          </Collapse>
          <TextField
            error={!!this.state.emailError}
            className={classes['login__textField']}
            label="Email"
            onChange={this.onEmailChange}
            helperText={this.state.emailError}
          />
          <TextField
            error={!!this.state.passwordError}
            className={classes['login__textField']}
            type="password"
            label="Password"
            onChange={this.onPasswordChange}
            helperText={this.state.passwordError}
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
          <Typography
            className={classes.text}
            gutterBottom
          >
            - OR -
          </Typography>
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
          <Collapse
            in={this.state.showReset}
          >
            <form>
              <Typography
                variant="caption"
                className={classes.caption}
              >
                Please provide the email address you would like a password reset link sent to.
                  </Typography>
              <TextField
                className={classes['login__textField']}
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
          </Collapse>
          <Collapse
            in={this.state.resetSent}
          >
            <Fade
              in={this.state.resetSent}
              {...(this.state.resetSent ? { timeout: 1000 } : {})}
            >
              <Typography
                variant="caption"
                className={classes.caption}
              >
                A reset link has been sent to your email if it exists.
              </Typography>
            </Fade>
          </Collapse>
        </DialogContent>
      </Dialog>
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