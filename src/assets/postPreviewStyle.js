const postPreviewStyle = theme => ({
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

export default postPreviewStyle