import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'
import AppRouter, { history } from './routers/AppRouter'
import LoadingPage from './components/LoadingPage'
import { startFetchPosts } from './actions/posts'
import { login, logout } from './actions/auth'
import { firebase } from './firebase/firebase'

import CSSBaseline from '@material-ui/core/CssBaseline'
import 'typeface-roboto'
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core'

const theme = createMuiTheme({
  typography: {
    htmlFontSize: 10,
    fontSize: 16
  },
  spacing: {
    small: '1.2rem',
    medium: '1.6rem',
    large: '3.2rem',
    xLarge: '4.8rem',
    desktopBreakpoing: '45rem'
  }
})

const store = configureStore()

const wrapper = (
  <MuiThemeProvider theme={theme}>
    <CSSBaseline />
    <Provider store={store}>
      <AppRouter />
    </Provider>
  </MuiThemeProvider>
)

let hasRendered = false
const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(wrapper, document.querySelector('#root'))
    hasRendered = true
  }
}

ReactDOM.render(<LoadingPage />, document.querySelector('#root'))

firebase.auth().onAuthStateChanged(user => {
  if (user) {
    store.dispatch(login(user.uid))
    store.dispatch(startFetchPosts()).then(() => {
      renderApp()
      if(history.location.pathname === '/') {
        history.push('/dashboard')
      }
    })
  } else {
    store.dispatch(logout())
    renderApp()
    history.push('/')
  }
})