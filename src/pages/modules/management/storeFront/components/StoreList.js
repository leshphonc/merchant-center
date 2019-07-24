import React from 'react'
import AddIcon from '@material-ui/icons/Add'
import FilterNoneIcon from '@material-ui/icons/FilterNone'
import { withRouter } from 'react-router-dom'
import {
  Box, Title1, Status, Category, Toolbar,
} from '../styled'

export default withRouter((props) => {
  const mapList = () => props.list.map((val, index) => (
    <Box key={index}>
      <div>
        <img src={val.img} alt="" />
      </div>
      <div>
        <Title1>
          {val.title}
          <Status>{val.status}</Status>
        </Title1>
        <div>
          <Category onClick={() => props.history.push('/management/storefront/category')}>分类管理</Category>
          <Category onClick={() => props.history.push('/management/storefront/preferential')}>店铺优惠</Category>
        </div>
        <div>
          <Toolbar onClick={() => props.history.push('/management/storefront/storeManagement')}>
            <FilterNoneIcon color="primary" style={{ width: 16, marginRight: 5 }} />
            <span>编辑店铺</span>
          </Toolbar>
          <Toolbar onClick={() => props.history.push('/management/storefront/createCategory')}>
            <AddIcon color="primary" />
            <span>添加分类</span>
          </Toolbar>
        </div>
      </div>
    </Box>
  ))
  return <React.Fragment>{mapList()}</React.Fragment>
})
