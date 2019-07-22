import React from 'react'
import { Switch, Route } from 'react-router-dom'
import StoreFront from './storeFront'
import Category from './category'

export default () => (
  <Switch>
    <Route path="/storefront" exact component={StoreFront} />
    <Route path="/storefront/category" component={Category} />
  </Switch>
)
