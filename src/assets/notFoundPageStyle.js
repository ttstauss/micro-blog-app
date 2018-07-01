const notFoundPageStyle = theme => ({
  'box-layout': {
    alignItems: 'center',
    background: 'linear-gradient(to bottom right, #3f51b5, #606fc7)',
    display: 'flex',
    height: '100vh',
    justifyContent: 'center',
    width: '100vw',
  },
  'box-layout__box': {
    borderRadius: '3px',
    padding: `${theme.spacing.large} ${theme.spacing.medium}`,
    textAlign: 'center',
    maxWidth: '25rem',
    [theme.breakpoints.up('440')]: {
      maxWidth: '40rem',
    }
  },
  'box-layout__title': {
    padding: '0',
    margin: `0 0 ${theme.spacing.medium} 0`
  },
  'box-layout__subheading': {
    margin: `0 0 ${theme.spacing.medium} 0`
  }
})

export default notFoundPageStyle