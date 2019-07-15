import React from 'react'
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import IconButton from '@material-ui/core/IconButton'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import Collapse from '@material-ui/core/Collapse'
import ExpandLess from '@material-ui/icons/ExpandLess'
import ExpandMore from '@material-ui/icons/ExpandMore'
import DraftsIcon from '@material-ui/icons/Drafts'

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
    marginBottom: 4,
  },
}))
export default (props: any) => {
  const classes = useStyles()
  const [expanded, setExpanded] = React.useState<string | false>(false)
  const handleClick = (name: any) => {
    if (name === expanded) {
      setExpanded(false)
    } else {
      setExpanded(name)
    }
  }
  console.log(expanded)
  const mapList = () => props.list.map((item: any, index: number) => {
    if (item.menu_list) {
      const arr: any = []
      Object.keys(item.menu_list).forEach(item1 => arr.push(item.menu_list[item1]))
      return (
        <div key={item.name}>
          <ListItem button divider onClick={handleClick.bind(null, item.name)}>
            <ListItemText primary={item.name} />
            {expanded === item.name ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse key={item.name} timeout={500} in={expanded === item.name}>
            <List disablePadding>
              {arr.map((v: any) => (
                <ListItem
                  button
                  divider={index !== props.list.length - 1}
                  disabled={v.status !== '1'}
                  key={v.name}
                  style={{ paddingLeft: 36 }}
                >
                  <ListItemText primary={v.name} />
                  {v.status ? (
                    <ListItemSecondaryAction>
                      <IconButton disabled={v.status !== '1'}>
                          <ChevronRightIcon />
                        </IconButton>
                    </ListItemSecondaryAction>
                  ) : null}
                </ListItem>
              ))}
            </List>
          </Collapse>
        </div>
      )
    }
    return (
      <List className={classes.root} disablePadding key={item.name}>
        <ListItem button divider={index !== props.list.length - 1} disabled={item.status !== '1'}>
          <ListItemIcon>
            <DraftsIcon />
          </ListItemIcon>
          <ListItemText primary={item.name} />
          {item.status === '1' ? (
            <ListItemSecondaryAction>
              <IconButton disabled={item.status !== '1'}>
                <ChevronRightIcon />
              </IconButton>
            </ListItemSecondaryAction>
          ) : null}
        </ListItem>
      </List>
    )
  })
  return <React.Fragment>{mapList()}</React.Fragment>
}
