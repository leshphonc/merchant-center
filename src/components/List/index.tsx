import React from 'react'
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import IconButton from '@material-ui/core/IconButton'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    width: '100%',
    padding: 0,
    backgroundColor: theme.palette.background.paper,
  },
}))

export default (props: any) => {
  const classes = useStyles()
  const mapList = () => props.list.map((item: any, index: number) => (
    <ListItem
      button
      divider={index !== props.list.length - 1}
      disabled={!item.enable}
      key={item.title}
    >
      <ListItemText primary={item.title} />
      {item.hasIcon ? (
        <ListItemSecondaryAction>
          <IconButton disabled={!item.enable}>
            <ChevronRightIcon />
          </IconButton>
        </ListItemSecondaryAction>
      ) : null}
    </ListItem>
  ))
  return (
    <List className={classes.root} aria-label="Mailbox folders">
      {mapList()}
    </List>
  )
}
