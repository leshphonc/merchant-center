import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import CssBaseline from '@material-ui/core/CssBaseline'
import Index from '../pages'
import Login from '../pages/login'
import User from '../pages/user'

const BasicRoute = () => (
  <BrowserRouter>
    <CssBaseline />
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/user" component={User} />
      <Route path="/" component={Index} />
    </Switch>
  </BrowserRouter>
)

export default BasicRoute
