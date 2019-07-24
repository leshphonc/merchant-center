import React from 'react'
import { Route } from 'react-router-dom'
import StoreFront from './storeFront'
import AnimationBox from '@/styled'

export default () => (
  <AnimationBox>
    <Route path="/management/storefront" component={StoreFront} />
  </AnimationBox>
)
