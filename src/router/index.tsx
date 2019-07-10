import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import CssBaseline from '@material-ui/core/CssBaseline'
import Index from '../pages'

import Login from '../pages/login'
import User from '../pages/user'

const BasicRoute = () => (
  <BrowserRouter>
    <CssBaseline />
    <Route path="/" component={Index} />
    <Route path="/login" component={Login} />
    <Route path="/user" component={User} />
  </BrowserRouter>
)

export default BasicRoute
