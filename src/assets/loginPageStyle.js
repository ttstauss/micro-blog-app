const loginPageStyle = theme => ({
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

export default loginPageStyle