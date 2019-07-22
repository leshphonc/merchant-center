import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Route } from 'react-router-dom'
import ShopAssistant from './shopAssistant'
// import ShopList from './shopAssistant/shopList'
// import ScanNumber from './shopAssistant/scanNumber'
// import FansNumber from './shopAssistant/fansNumber'
// import SaleList from './shopAssistant/saleList'


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
      <Route path="/promotion/shopAssistant" component={ShopAssistant} />
    </div>
  )
}
