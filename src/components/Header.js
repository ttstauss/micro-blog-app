import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { startLogout } from '../actions/auth'

export const Header = ({ startLogout }) => (
      <div>
        <Link to="/dashboard">
          <h1>My Blog</h1>
        </Link>
    <button onClick={startLogout}>Logout</button>
      </div>
    )

const mapDispatchToProps = dispatch => ({
  startLogout: () => dispatch(startLogout())
})

export default connect(undefined, mapDispatchToProps)(Header)