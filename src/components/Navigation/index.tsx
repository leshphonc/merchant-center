import React from 'react'
import { withRouter } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import BottomNavigation from '@material-ui/core/BottomNavigation'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'
import HomeIcon from '@material-ui/icons/HomeOutlined'
import AssignmentIcon from '@material-ui/icons/AssignmentOutlined'
import StarBorderIcon from '@material-ui/icons/StarBorderRounded'
import PersonIcon from '@material-ui/icons/PersonOutline'

const useStyles = makeStyles({
  nav: {
    width: '100%',
    position: 'fixed',
    bottom: 0,
    zIndex: 9999999,
    boxShadow: '0px 0px 10px 1px #ccc',
  },
})
export default withRouter((props: any) => {
  const classes = useStyles()
  const [value, setValue] = React.useState(props.location.pathname.substr(1))
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
      <BottomNavigationAction label="marketing" value="marketing" icon={<StarBorderIcon />} />
      <BottomNavigationAction label="mine" value="mine" icon={<PersonIcon />} />
    </BottomNavigation>
  )
})
