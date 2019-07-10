import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Login from '../pages/login'
import User from '../pages/user'

const BasicRoute = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Login} />
      <Route path="/user" component={User} />
    </Switch>
  </BrowserRouter>
)

export default BasicRoute
