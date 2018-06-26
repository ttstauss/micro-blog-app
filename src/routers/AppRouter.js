import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import createHistory from 'history/createBrowserHistory'
import LoginPage from '../components/LoginPage'
import DashboardPage from '../components/DashboardPage'
import AddPostPage from '../components/AddPostPage'
import EditPostPage from '../components/EditPostPage'
import NotFoundPage from '../components/NotFoundPage'
import PublicRoute from './PublicRoute'
import PrivateRoute from './PrivateRoute'

export const history = createHistory()

export const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <PublicRoute path="/" component={LoginPage} exact />
        <PrivateRoute path="/dashboard" component={DashboardPage} />
        <PrivateRoute path="/create" component={AddPostPage} />
        <PrivateRoute path="/edit/:id" component={EditPostPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
)

export default AppRouter