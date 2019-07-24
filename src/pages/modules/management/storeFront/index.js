import React from 'react'
import { Route } from 'react-router-dom'
import StoreFrontList from './storeFrontList'
import Category from './category'
import Preferential from './category/preferential'
import CreatePreferential from './category/createPreferential'
import CreateCategory from './category/createCategory'
import StoreManagement from './storeFrontList/storeManagement'
import CommodityManagement from './storeFrontList/commodityManagement'
import CreateCommodity from './storeFrontList/createCommodity'

export default () => (
  <React.Fragment>
    <Route path="/management/storefront" exact component={StoreFrontList} />
    <Route path="/management/storefront/category" component={Category} />
    <Route path="/management/storefront/preferential" component={Preferential} />
    <Route path="/management/storefront/createPreferential" component={CreatePreferential} />
    <Route path="/management/storefront/createCategory" component={CreateCategory} />
    <Route path="/management/storefront/storeManagement" component={StoreManagement} />
    <Route path="/management/storefront/commodityManagement" component={CommodityManagement} />
    <Route path="/management/storefront/createCommodity" component={CreateCommodity} />
  </React.Fragment>
)
