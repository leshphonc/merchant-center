import React from 'react'
import { Route } from 'react-router-dom'
import StoreFront from './storeFront'
import Member from './member'
import AnimationBox from '@/styled'

export default () => (
  <AnimationBox>
    <Route path="/management/storefront" component={StoreFront} />
    <Route path="/management/member" component={Member} />
  </AnimationBox>
)
