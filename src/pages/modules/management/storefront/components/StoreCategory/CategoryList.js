import React from 'react'
import {
  CategoryBox, CategoryTitle, Day, ToolBar,
} from './styled'

export default (props) => {
  const mapStoreCategoryList = () => props.list.map(item => (
    <CategoryBox>
      <CategoryTitle>
        <span>分类名称</span>
        <span>{item.title}</span>
      </CategoryTitle>
      <Day>
        <span>星期几显示</span>
        <span>{item.day.map(val => `${val} `)}</span>
      </Day>
      <ToolBar>
        <span>商品管理</span>
        <span>删除</span>
        <span>编辑</span>
      </ToolBar>
    </CategoryBox>
  ))
  return <div>{mapStoreCategoryList()}</div>
}
