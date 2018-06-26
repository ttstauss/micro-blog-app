import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'
import AppRouter, { history } from './routers/AppRouter'
import LoadingPage from './components/LoadingPage'
import { startFetchPosts } from './actions/posts'
import { login, logout } from './actions/auth'
import { firebase } from './firebase/firebase'

const store = configureStore()

const providerWrapper = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
)

let hasRendered = false
const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(providerWrapper, document.querySelector('#root'))
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