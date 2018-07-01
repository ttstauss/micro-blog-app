const postPageStyle = theme => ({
  loader: {
    alignItems: 'center',
    display: 'flex',
    height: '100vh',
    justifyContent: 'center',
    width: '100vw'
  },
  'content-container': {
    margin: '0 auto',
    maxWidth: '80rem',
    padding: `0 ${theme.spacing.medium}`
  },
  link: {
    transition: 'color .3s ease',
    '&:hover': {
      color: 'rgba(63, 81, 181, 1)'
    }
  },
  'link__text': {
    marginTop: `${theme.spacing.medium}`,
    transition: 'color .3s ease',
    '&:hover': {
      color: 'rgba(63, 81, 181, 1)'
    }
  }
})

export default postPageStyle