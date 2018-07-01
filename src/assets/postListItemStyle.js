const postListItemStyle = theme => ({
  'list-item': {
    transitionDuration: `${theme.transitions.duration.standard}ms`,
    transitionProperty: 'background',
    transitionTimingFunction: `${theme.transitions.easing.easeInOut}`,
    margin: `0 0 ${theme.spacing.small}`,
    '&:hover': {
      background: '#fafafa'
    }
  },
  'list-item__link': {
    textDecoration: 'none',
  },
  'list-item__title': {
    wordBreak: 'break-word'
  },
  'list-item__body': {
    flexDirection: 'column',
    '&:last-child': {
      paddingBottom: theme.spacing.medium
    }
  }
})

export default postListItemStyle