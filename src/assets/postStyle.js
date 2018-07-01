const postStyle = theme => {
  return ({
    'content-container': {
      margin: '0 auto',
      maxWidth: '80rem',
      padding: `0 ${theme.spacing.medium}`
    },
    post: {
      margin: `${theme.spacing.medium} 0`
    },
    'post__caption': {
      marginBottom: `${theme.spacing.large}`
    },
    'post__body': {
      ...theme.typography,
      '& img': {
        maxWidth: '100%'
      }
    }
  })
}

export default postStyle