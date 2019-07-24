import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import NavBar from '@/components/NavBar'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import Divider from '@material-ui/core/Divider'
import IconButton from '@material-ui/core/IconButton'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import Button from '@material-ui/core/Button'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import NativeSelect from '@material-ui/core/NativeSelect'

const useStyles = makeStyles({
  root: {
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
  listItem: {
    background: '#fff',
    '&>span': {
      fontSize: '0.9rem',
    },
  },
  listText: {
    fontSize: '0.9rem',
    display: 'flex',
    '&>div:nth-child(1)': {
      flex: 2,
    },
    '&> input': {
      flex: 3,
      opacity: 0.6,
      border: 'none',
      outline: 'none',
    },
    '& > .MuiFormGroup-root': {
      flex: 3,
    },
    '& > .MuiInputBase-root': {
      flex: 3,
    },
  },
  chip: {
    height: 26,
    marginLeft: 5,
  },
  helpIcon: {
    color: '#bbb',
    verticalAlign: 'sub',
    marginLeft: 5,
    fontSize: '1rem',
  },
  paper: {
    width: '80%',
    maxHeight: 435,
  },
})

export default () => {
  const classes = useStyles()
  return (
    <React.Fragment>
      <NavBar title="店铺优惠" goBack />
      <List>
        <Divider />
        <ListItem className={classes.listItem}>
          <ListItemText
            primary={(
              <div className={classes.listText}>
                <div>优惠条件</div>
                <input value="10000.00" />
              </div>
)}
          />
          <ListItemSecondaryAction hidden>
            <IconButton>
              <ChevronRightIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
        <Divider />
        <ListItem className={classes.listItem}>
          <ListItemText
            primary={(
              <div className={classes.listText}>
                <div>优惠的金额</div>
                <input value="100.20" />
              </div>
)}
          />
          <ListItemSecondaryAction hidden>
            <IconButton>
              <ChevronRightIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
        <Divider />
        <ListItem className={classes.listItem}>
          <ListItemText
            primary={(
              <div className={classes.listText}>
                <div>优惠类型</div>
                <NativeSelect>
                  <option value="" />
                  <option value={10}>Ten</option>
                  <option value={20}>Twenty</option>
                  <option value={30}>Thirty</option>
                </NativeSelect>
              </div>
)}
          />
          <ListItemSecondaryAction hidden>
            <IconButton>
              <ChevronRightIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
        <Divider />
        <ListItem className={classes.listItem}>
          <ListItemText
            primary={(
              <div className={classes.listText}>
                <div>使用状态</div>
                <RadioGroup aria-label="position" name="position" row>
                  <FormControlLabel
                    value="disable"
                    control={<Radio fontSize="small" color="primary" />}
                    label="停用"
                    labelPlacement="end"
                  />
                  <FormControlLabel
                    value="enable"
                    control={<Radio fontSize="small" color="primary" />}
                    label="启用"
                    labelPlacement="end"
                  />
                </RadioGroup>
              </div>
)}
          />
          <ListItemSecondaryAction hidden>
            <IconButton>
              <ChevronRightIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      </List>
      <div style={{ margin: '5px 10px' }}>
        <Button color="primary" fullWidth variant="contained" style={{ color: '#fff' }}>
          提交
        </Button>
      </div>
    </React.Fragment>
  )
}
