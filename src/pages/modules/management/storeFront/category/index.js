import React from 'react'
import NavBar from '@/components/NavBar'
import CategoryList from '../components/CategoryList'
import { StoreCategoryData } from '@/config/list'

export default () => (
  <React.Fragment>
    <NavBar
      title="商品分类"
      goBack
      rightBtn={{
        label: '添加分类',
        url: '/management/storefront/createCategory',
      }}
    />
    <CategoryList list={StoreCategoryData} />
  </React.Fragment>
)
