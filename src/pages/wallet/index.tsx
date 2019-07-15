import React from 'react'
import { Route } from 'react-router-dom'
import Wallet from './components/Wallet'
import WalletDetail from './components/Detail'

export default (props: any) => (
  <React.Fragment>
    <Route path="/wallet" exact component={Wallet} />
    <Route path="/wallet/detail" component={WalletDetail} />
  </React.Fragment>
)
