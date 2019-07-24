import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import NavBar from '@/components/NavBar'
import Select from '@material-ui/core/Select'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Badge from '@material-ui/core/Badge'
import SwipeableViews from 'react-swipeable-views'
import { Title } from '../styled'
import StoreList from '../components/StoreList'
import { StoreList as LLS } from '@/config/list'

const useStyle = makeStyles({
  badge: {
    right: '-20px',
  },
})
export default () => {
  const classes = useStyle()
  const [value, setValue] = React.useState(0)
  return (
    <React.Fragment>
      <NavBar title="店铺管理" goBack />
      <Title>
        请选择店铺类型
        <Select
          native
          value={1}
          inputProps={{
            name: 'dplx',
          }}
          style={{ marginLeft: 15 }}
        >
          <option value={1}>网店</option>
          <option value={2}>餐饮</option>
        </Select>
      </Title>
      <Tabs
        value={value}
        onChange={(e, val) => setValue(val)}
        indicatorColor="primary"
        textColor="primary"
        variant="fullWidth"
      >
        <Tab
          label={(
            <Badge badgeContent={4} color="primary" classes={{ badge: classes.badge }}>
              全部
            </Badge>
)}
        />
        <Tab
          label={(
            <Badge badgeContent={3} color="primary" classes={{ badge: classes.badge }}>
              正常
            </Badge>
)}
        />
        <Tab
          label={(
            <Badge badgeContent={2} color="primary" classes={{ badge: classes.badge }}>
              待审核
            </Badge>
)}
        />
      </Tabs>
      <SwipeableViews index={value}>
        <StoreList list={LLS} />
        <StoreList list={LLS} />
        <StoreList list={LLS} />
      </SwipeableViews>
    </React.Fragment>
  )
}
