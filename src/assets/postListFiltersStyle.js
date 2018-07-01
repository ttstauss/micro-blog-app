const postListFiltersStyle = theme => ({
  'input-group': {
    display: 'flex',
    flexDirection: 'column',
    margin: '0 0 2rem 0',
    [theme.breakpoints.up('sm')]: {
      flexDirection: 'row',
      margin: '0 0 2rem 0'
    }
  },
  'input-group__item': {
    margin: '0 0 0.75rem 0',
    [theme.breakpoints.up('sm')]: {
      margin: '0 0.75rem 0 0'
    }
  }
})

export default postListFiltersStyle