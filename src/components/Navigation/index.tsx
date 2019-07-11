import React from 'react'
import { withRouter } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import BottomNavigation from '@material-ui/core/BottomNavigation'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'
import HomeIcon from '@material-ui/icons/HomeOutlined'
import AssignmentIcon from '@material-ui/icons/AssignmentOutlined'
import StarBorderIcon from '@material-ui/icons/StarBorderRounded'
import PersonIcon from '@material-ui/icons/PersonOutline'
import Fab from '@material-ui/core/Fab'
import AddIcon from '@material-ui/icons/Add'

const useStyles = makeStyles({
  nav: {
    width: '100%',
    position: 'fixed',
    bottom: 0,
    zIndex: 9999999,
    boxShadow: '0px 0px 10px 1px #ccc',
    '&>button': {
      minWidth: 50,
    },
  },
  sp: {
    flex: 2,
    textAlign: 'center',
    position: 'relative',
    top: '-14px',
    fontSize: '0.75rem',
    '&>div': {
      marginTop: 5,
    },
  },
})
export default withRouter((props: any) => {
  const classes = useStyles()
  const [value, setValue] = React.useState(props.location.pathname.substr(1))
  const WrappedIcon = () => (
    <div className={classes.sp}>
      <Fab color="primary" size="small">
        <AddIcon />
      </Fab>
      <div>发布商品</div>
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
      <BottomNavigationAction label="home" value="" icon={<HomeIcon />} />
      <BottomNavigationAction label="order" value="order" icon={<AssignmentIcon />} />
      <WrappedIcon />
      <BottomNavigationAction label="marketing" value="marketing" icon={<StarBorderIcon />} />
      <BottomNavigationAction label="mine" value="mine" icon={<PersonIcon />} />
    </BottomNavigation>
  )
})
