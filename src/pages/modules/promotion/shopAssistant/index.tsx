import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Route } from 'react-router-dom'
import Statistics from '../shopAssistant/statistics'
import ShopList from './shopList'
import ScanNumber from './scanNumber'
import FansNumber from './fansNumber'
import SaleList from './saleList'

const useStyles = makeStyles({
  root: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
})

export default () => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      {/* <Route path="/promotion/shopAssistant" component={ShopAssistant} /> */}
      <Route path="/promotion/shopAssistant" component={Statistics} />
      <Route path="/promotion/shopAssistant/shopList" component={ShopList} />
      <Route path="/promotion/shopAssistant/scanNumber" component={ScanNumber} />
      <Route path="/promotion/shopAssistant/fansNumber" component={FansNumber} />
      <Route path="/promotion/shopAssistant/saleList" component={SaleList} />
    </div>
  )
}
