import React from 'react'
import { Route } from 'react-router-dom'
import Navigation from '@/components/Navigation'
import Home from './home'
import Order from './order'
import Marketing from './marketing'
import Mine from './mine'

export default () => (
  <React.Fragment>
    <Route path="/" exact component={Home} />
    <Route path="/order" component={Order} />
    <Route path="/marketing" component={Marketing} />
    <Route path="/mine" component={Mine} />
    <Navigation />
  </React.Fragment>
)
