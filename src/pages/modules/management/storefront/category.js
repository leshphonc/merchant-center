import React from 'react'
import NavBar from '@/components/NavBar'
import AnimationBox from '@/styled'
import CategoryList from './components/StoreCategory/CategoryList'
import { StoreCategoryData } from '@/config/list'

export default () => (
  <AnimationBox>
    <NavBar title="商品分类" goBack />
    <CategoryList list={StoreCategoryData} />
  </AnimationBox>
)
