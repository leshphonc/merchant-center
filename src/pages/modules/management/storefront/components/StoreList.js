import React from 'react'
import AddIcon from '@material-ui/icons/Add'
import FilterNoneIcon from '@material-ui/icons/FilterNone'
import { withRouter } from 'react-router-dom'
import {
  Box, Title, Status, Category, Toolbar,
} from './styled'

export default withRouter((props) => {
  const mapList = () => props.list.map((val, index) => (
    <Box key={index}>
      <div>
        <img src={val.img} alt="" />
      </div>
      <div>
        <Title>
          {val.title}
          <Status>{val.status}</Status>
        </Title>
        <div>
          <Category onClick={() => props.history.push('/storefront/category')}>分类管理</Category>
          <Category>店铺优惠</Category>
        </div>
        <div>
          <Toolbar>
            <FilterNoneIcon color="primary" style={{ width: 16, marginRight: 5 }} />
            <span>编辑店铺</span>
          </Toolbar>
          <Toolbar>
            <AddIcon color="primary" />
            <span>添加分类</span>
          </Toolbar>
        </div>
      </div>
    </Box>
  ))
  return <React.Fragment>{mapList()}</React.Fragment>
})
