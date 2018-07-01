const addPostPageStyle = theme => ({
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
    transition: 'color .3s ease',
    '&:hover': {
      color: 'rgba(63, 81, 181, 1)'
    }
  }
})

export default addPostPageStyle