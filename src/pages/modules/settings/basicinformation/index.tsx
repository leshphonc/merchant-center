import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import ListSubheader from '@material-ui/core/ListSubheader'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Divider from '@material-ui/core/Divider'
import InboxIcon from '@material-ui/icons/Inbox'
import { BasicInformation } from '@/config/list'

const useStyles = makeStyles({
  root: {
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
})
export default (props: any) => {
  const classes = useStyles()
  const mapList = () => BasicInformation.map(item => (
    <List key={item.label} subheader={<ListSubheader>{item.label}</ListSubheader>}>
      {item.children.map(child => (
        <div key={child.label}>
          <ListItem button>
            <ListItemText primary={child.label} />
          </ListItem>
          <Divider />
        </div>
      ))}
    </List>
  ))

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" onClick={() => props.history.goBack()}>
            <ArrowBackIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            基本信息
          </Typography>
        </Toolbar>
      </AppBar>
      {mapList()}
    </div>
  )
}
