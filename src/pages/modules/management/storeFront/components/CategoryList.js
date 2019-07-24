import React from 'react'
import LockOutlinedcon from '@material-ui/icons/LockOutlined'
import DeleteOutlinedcon from '@material-ui/icons/DeleteOutline'
import CreateOutlinedcon from '@material-ui/icons/CreateOutlined'
import IconButton from '@material-ui/core/IconButton'
import { withRouter } from 'react-router-dom'
import {
  CategoryBox, CategoryTitle, Day, ToolBar,
} from '../styled'

export default withRouter((props) => {
  const mapStoreCategoryList = () => props.list.map((item, index) => (
    <CategoryBox key={index}>
      <CategoryTitle>
        <span>分类名称</span>
        <span>{item.title}</span>
      </CategoryTitle>
      <Day>
        <span>星期几显示</span>
        <span>{item.day.map(val => `${val} `)}</span>
      </Day>
      <ToolBar>
        <IconButton
          size="small"
          style={{ fontSize: 14, fontWeight: 600, color: '#727272' }}
          onClick={() => props.history.push({
            pathname: '/management/storefront/commodityManagement',
          })
            }
        >
          <LockOutlinedcon color="primary" style={{ width: 20, marginRight: 5 }} />
          <span>商品管理</span>
        </IconButton>
        <IconButton size="small" style={{ fontSize: 14, fontWeight: 600, color: '#727272' }}>
          <DeleteOutlinedcon color="primary" style={{ width: 20, marginRight: 5 }} />
          <span>删除</span>
        </IconButton>
        <IconButton
          size="small"
          style={{ fontSize: 14, fontWeight: 600, color: '#727272' }}
          onClick={() => props.history.push({
            pathname: '/management/storefront/createCategory',
          })
            }
        >
          <CreateOutlinedcon color="primary" style={{ width: 20, marginRight: 5 }} />
          <span>编辑</span>
        </IconButton>
      </ToolBar>
    </CategoryBox>
  ))
  return <React.Fragment>{mapStoreCategoryList()}</React.Fragment>
})
