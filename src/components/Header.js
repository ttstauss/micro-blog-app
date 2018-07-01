import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { startLogout } from '../actions/auth'

import { AppBar, Toolbar, Typography, Button } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
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

export const Header = ({ startLogout, classes }) => {
  return (
    <AppBar position="static" className={classes.header}>
      <Toolbar className={classes['content-container']}>
        <div className={classes['header__content']}>
          <Link to="/dashboard" className={classes['header__title']}>
            <Typography variant="title" color="inherit">
              MICRO BLOG
            </Typography>
          </Link>
          <Button
            size="medium"
            onClick={startLogout}
            className={classes['header__link']}
          >
            Logout
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  )
}

const mapDispatchToProps = dispatch => ({
  startLogout: () => dispatch(startLogout())
})

export default connect(undefined, mapDispatchToProps)(withStyles(styles)(Header))