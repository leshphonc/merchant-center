import React from 'react'
import { Route } from 'react-router-dom'
import Navigation from '../components/Navigation'
import Home from '../components/Home'
import Order from '../components/Order'
import Marketing from '../components/Marketing'
import Mine from '../components/Mine'

const SimpleBottomNavigation = () => (
  <React.Fragment>
    <Route path="/" exact component={Home} />
    <Route path="/order" component={Order} />
    <Route path="/marketing" component={Marketing} />
    <Route path="/mine" component={Mine} />
    <Navigation />
  </React.Fragment>
)

export default SimpleBottomNavigation
