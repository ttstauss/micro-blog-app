import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { startLogout } from '../actions/auth'

import { AppBar, Toolbar, Typography, Button } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import headerStyle from '../assets/headerStyle'

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

export default connect(undefined, mapDispatchToProps)(withStyles(headerStyle)(Header))