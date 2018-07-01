const headerStyle = theme => ({
  header: {
    display: 'block',
    background: 'linear-gradient(to bottom right, #3f51b5, #606fc7)',
    margin: `0 0 ${theme.spacing.large} 0`
  },
  'content-container': {
    margin: '0 auto',
    maxWidth: '80rem',
    padding: `0 ${theme.spacing.medium}`
  },
  'header__content': {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%'
  },
  'header__title': {
    textDecoration: 'none',
    color: 'white'
  },
  'header__link': {
    color: 'white'
  }
})

export default headerStyle