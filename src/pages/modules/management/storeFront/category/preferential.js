import React from 'react'
import NavBar from '@/components/NavBar'
import CreateOutlinedIcon from '@material-ui/icons/CreateOutlined'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import { PreferentialData } from '@/config/list'
import { withRouter } from 'react-router-dom'
import { PreferentialItem, PreferentialInLine } from '../styled'

export default withRouter((props) => {
  const mapPreferential = () => PreferentialData.map((val, index) => (
    <PreferentialItem key={index}>
      <PreferentialInLine>
        <div>类别：{val.type}</div>
        <div>满足金额：{val.amount}</div>
      </PreferentialInLine>
      <PreferentialInLine>
        <div>优惠金额：{val.preferential}</div>
        <div>
            状态：
          <Typography color="primary" component="span" variant="body2">
            {val.status}
          </Typography>
        </div>
      </PreferentialInLine>
      <PreferentialInLine>
        <IconButton
          size="small"
          style={{ fontSize: 14, fontWeight: 600, color: '#727272' }}
          onClick={() => props.history.push('/management/storefront/createPreferential')}
        >
          <CreateOutlinedIcon
            color="primary"
            style={{ verticalAlign: 'bottom', width: 20, marginRight: 5 }}
          />
            编辑
        </IconButton>
      </PreferentialInLine>
    </PreferentialItem>
  ))
  return (
    <React.Fragment>
      <NavBar
        title="店铺优惠"
        goBack
        rightBtn={{
          label: '新建优惠',
          url: '/management/storefront/createPreferential',
        }}
      />
      {mapPreferential()}
    </React.Fragment>
  )
})
