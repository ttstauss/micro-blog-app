import React from 'react'
import { connect } from 'react-redux'
import { startGoogleLogin } from '../actions/auth'

export const LoginPage = ({ startGoogleLogin }) => (
  <div>
    <button onClick={startGoogleLogin}>Login with Google</button>
  </div>
)

const mapDispatchToProps = dispatch => ({
  startGoogleLogin: () => dispatch(startGoogleLogin())
})

export default connect(undefined, mapDispatchToProps)(LoginPage)