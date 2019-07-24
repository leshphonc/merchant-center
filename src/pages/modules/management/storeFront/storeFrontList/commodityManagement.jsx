import React from 'react'
import NavBar from '@/components/NavBar'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import InputBase from '@material-ui/core/InputBase'
import IconButton from '@material-ui/core/IconButton'
import SearchIcon from '@material-ui/icons/Search'
import CreateOutlinedIcon from '@material-ui/icons/CreateOutlined'
import LockOutlinedcon from '@material-ui/icons/LockOutlined'
import DeleteOutlinedcon from '@material-ui/icons/DeleteOutline'
import { withRouter } from 'react-router-dom'
import { CommodityData } from '@/config/list'
import {
  CommodityItem,
  CommodityImg,
  CommodityContent,
  CommodityContentTitle,
  CommodityContentInline,
  CommodityContentToolbar,
} from '../styled'

const useStyles = makeStyles(
  createStyles({
    root: {
      padding: '2px 4px',
      display: 'flex',
      alignItems: 'center',
      width: '90%',
      margin: '10px auto',
    },
    input: {
      marginLeft: 8,
      flex: 1,
    },
    iconButton: {
      padding: 10,
    },
  }),
)

export default withRouter((props) => {
  const classes = useStyles()
  const mapCommodity = () => CommodityData.map((item, index) => (
    <CommodityItem key={index}>
      <CommodityImg>
        <img src={item.img} alt="" />
      </CommodityImg>
      <CommodityContent>
        <CommodityContentTitle>{item.title}</CommodityContentTitle>
        <CommodityContentInline>
            售价: <span className="bigger">{item.saler}</span> 元
        </CommodityContentInline>
        <CommodityContentInline>
            状态: <span className="bigger">{item.status}</span>
        </CommodityContentInline>
        <CommodityContentToolbar>
          <IconButton
            size="small"
            style={{ fontSize: 14, fontWeight: 600, color: '#727272' }}
          >
            <LockOutlinedcon
              color="primary"
              style={{ verticalAlign: 'bottom', width: 20, marginRight: 5 }}
            />
              下架
          </IconButton>
          <IconButton
            size="small"
            style={{ fontSize: 14, fontWeight: 600, color: '#727272' }}
          >
            <DeleteOutlinedcon
              color="primary"
              style={{ verticalAlign: 'bottom', width: 20, marginRight: 5 }}
            />
              删除
          </IconButton>
          <IconButton
            size="small"
            style={{ fontSize: 14, fontWeight: 600, color: '#727272' }}
            onClick={() => props.history.push('/management/storefront/createCommodity')}
          >
            <CreateOutlinedIcon
              color="primary"
              style={{ verticalAlign: 'bottom', width: 20, marginRight: 5 }}
            />
              编辑
          </IconButton>
        </CommodityContentToolbar>
      </CommodityContent>
    </CommodityItem>
  ))
  return (
    <React.Fragment>
      <NavBar
        title="商品管理"
        goBack
        rightBtn={{
          label: '添加商品',
          url: '/management/storefront/createCommodity',
        }}
      />
      <Paper className={classes.root}>
        <InputBase className={classes.input} placeholder="搜索商品名称" />
        <IconButton className={classes.iconButton} aria-label="Search">
          <SearchIcon />
        </IconButton>
      </Paper>
      {mapCommodity()}
    </React.Fragment>
  )
})
