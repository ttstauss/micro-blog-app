const postListStyle = theme => ({
  'list-item__body': {
    display: 'flex',
    justifyContent: 'center',
    '&:last-child': {
      paddingBottom: theme.spacing.medium
    }
  },
  message: {
    color: theme.palette.grey['600']
  }
})

export default postListStyle