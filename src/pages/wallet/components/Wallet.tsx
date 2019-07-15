import React from 'react'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import InboxIcon from '@material-ui/icons/Inbox'
import DraftsIcon from '@material-ui/icons/Drafts'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'

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
  rightIcon: {
    position: 'absolute',
    right: 10,
  },
}))
export default (props: any) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" onClick={() => props.history.goBack()}>
            <ArrowBackIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            钱包
          </Typography>
          <Button
            color="inherit"
            className={classes.rightIcon}
            onClick={() => props.history.push('/wallet/detail')}
          >
            账户明细
          </Button>
        </Toolbar>
      </AppBar>
      <List component="nav" aria-label="Main mailbox folders">
        <ListItem button>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="充值" />
          <ListItemSecondaryAction>
            <IconButton>
              <ChevronRightIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <DraftsIcon />
          </ListItemIcon>
          <ListItemText primary="提现" />
          <ListItemSecondaryAction>
            <IconButton>
              <ChevronRightIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      </List>
    </div>
  )
}
