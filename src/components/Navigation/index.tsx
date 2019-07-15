import React from 'react'
import { withRouter } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import BottomNavigation from '@material-ui/core/BottomNavigation'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'
import Fab from '@material-ui/core/Fab'
import AddIcon from '@material-ui/icons/Add'
import HomeIcon from '@/assets/image/home.png'
import HomeIconGray from '@/assets/image/home_gray.png'
import OrderIcon from '@/assets/image/order.png'
import OrderIconGray from '@/assets/image/order_gray.png'
import MarketingIcon from '@/assets/image/marketing.png'
import MarketingIconGray from '@/assets/image/marketing_gray.png'
import MineIcon from '@/assets/image/mine.png'
import MineIconGray from '@/assets/image/mine_gray.png'

const useStyles = makeStyles({
  nav: {
    width: '100%',
    position: 'fixed',
    bottom: 0,
    zIndex: 9,
    boxShadow: '0px 0px 10px 1px #ccc',
    '&>button': {
      minWidth: 50,
    },
  },
  sp: {
    flex: 2,
    textAlign: 'center',
    position: 'relative',
    top: 0,
    fontSize: '0.75rem',
    '&>div': {
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis',
      position: 'relative',
      zIndex: 2,
      top: '-8px',
    },
  },
  spIcon: {
    background: '#ffb000',
    color: '#fff',
    zIndex: 2,
    position: 'relative',
    top: '-15px',
    boxShadow: 'none',
    '&:hover': {
      backgroundColor: 'rgba(255, 176, 0, 0.8)',
    },
  },
  spPadding: {
    position: 'absolute',
    top: '-24px',
    left: '50%',
    transform: 'translateX(-50%)',
    width: 58,
    height: 58,
    background: '#fff',
    borderRadius: 58,
    boxShadow: '0 0 5px 2px #ccc',
  },
  spMask: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    background: '#fff',
    zIndex: 1,
  },
  action: {
    color: '#ffb000',
    fontSize: '0.75rem !important',
  },
  wrapper: {
    whiteSpace: 'nowrap',
  },
  navIcon: {
    width: '1.5rem',
    height: '1.5rem',
  },
})
export default withRouter((props: any) => {
  const classes = useStyles()
  const [value, setValue] = React.useState(props.location.pathname.substr(1))
  const WrappedIcon = () => (
    <div className={classes.sp}>
      <Fab size="small" className={classes.spIcon}>
        <AddIcon />
      </Fab>
      <div>发布商品</div>
      <span className={classes.spPadding} />
      <span className={classes.spMask} />
    </div>
  )
  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue: string) => {
        setValue(newValue)
        props.history.push(`/${newValue}`)
      }}
      showLabels
      className={classes.nav}
    >
      <BottomNavigationAction
        classes={{ selected: classes.action }}
        label="首页"
        value=""
        icon={
          <img src={value === '' ? HomeIcon : HomeIconGray} alt="" className={classes.navIcon} />
        }
      />
      <BottomNavigationAction
        classes={{ selected: classes.action }}
        label="订单"
        value="order"
        icon={(
          <img
            src={value === 'order' ? OrderIcon : OrderIconGray}
            alt=""
            className={classes.navIcon}
          />)}
      />
      <WrappedIcon />
      <BottomNavigationAction
        classes={{ selected: classes.action, root: classes.wrapper }}
        label="营销活动"
        value="marketing"
        icon={(
          <img
            src={value === 'marketing' ? MarketingIcon : MarketingIconGray}
            alt=""
            className={classes.navIcon}
          />)}
      />
      <BottomNavigationAction
        classes={{ selected: classes.action }}
        label="我的"
        value="mine"
        icon={(
          <img
            src={value === 'mine' ? MineIcon : MineIconGray}
            alt=""
            className={classes.navIcon}
          />)}
      />
    </BottomNavigation>
  )
})
