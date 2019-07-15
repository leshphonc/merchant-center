import React from 'react'
import { createStyles, makeStyles, useTheme } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import SwipeableViews from 'react-swipeable-views'

const useStyles = makeStyles(() => createStyles({
  root: {
    height: '100vh',
    background: '#fff',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  title: {
    position: 'absolute',
    left: 0,
    right: 0,
    textAlign: 'center',
    width: 100,
    margin: '0 auto',
  },
}))
export default (props: any) => {
  const classes = useStyles()
  const theme = useTheme()
  const [value, setValue] = React.useState(0)
  function handleChange(event: React.ChangeEvent<{}>, newValue: number) {
    setValue(newValue)
  }

  function handleChangeIndex(index: number) {
    setValue(index)
  }
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" onClick={() => props.history.goBack()}>
            <ArrowBackIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            账户明细
          </Typography>
        </Toolbar>
      </AppBar>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        variant="fullWidth"
      >
        <Tab label="充值记录" />
        <Tab label="提现记录" />
      </Tabs>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <div>充值记录</div>
        <div>提现记录</div>
      </SwipeableViews>
    </div>
  )
}
