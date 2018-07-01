const deletePostDialogStyle = theme => ({
  dialog__paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
    textAlign: 'center'
  },
  'dialog__title': {
    padding: '0',
    margin: `0 0 ${theme.spacing.medium} 0`
  },
  'dialog__subheading': {
    margin: `0 0 ${theme.spacing.medium} 0`
  },
  'dialog__button-group': {
    display: 'flex',
    flexDirection: 'column'
  },
  'dialog__button': {
    marginBottom: theme.spacing.small
  }
})

export default deletePostDialogStyle