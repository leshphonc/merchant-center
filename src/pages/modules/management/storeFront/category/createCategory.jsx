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
import Checkbox from '@material-ui/core/Checkbox'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import NativeSelect from '@material-ui/core/NativeSelect'
import FormGroup from '@material-ui/core/FormGroup'
import Tooltip from '@material-ui/core/Tooltip'
import HelpOutlineIcon from '@material-ui/icons/HelpOutline'

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
  checkboxLabel: {
    fontSize: 14,
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
    alignItems: 'center',
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
      <NavBar title="添加分类" goBack />
      <List>
        <Divider />
        <ListItem className={classes.listItem}>
          <ListItemText
            primary={(
              <div className={classes.listText}>
                <div>分类名称</div>
                <input placeholder="请填写分类名称" />
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
                <div>店铺排序</div>
                <input />
              </div>
)}
          />
          <ListItemSecondaryAction>
            <Tooltip
              placement="top"
              title="默认添加顺序排序！数值越大，排序越前"
              enterTouchDelay={100}
              leaveTouchDelay={500}
            >
              <HelpOutlineIcon className={classes.helpIcon} />
            </Tooltip>
          </ListItemSecondaryAction>
        </ListItem>
        <Divider />
        <ListItem className={classes.listItem}>
          <ListItemText
            primary={(
              <div className={classes.listText}>
                <div>是否开启星期几显示</div>
                <NativeSelect style={{ flex: 2 }}>
                  <option value={10}>关闭</option>
                  <option value={20}>开启</option>
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
                <FormGroup row style={{ flex: 5 }}>
                  <FormControlLabel
                    control={<Checkbox color="primary" value="checkedA" />}
                    label="星期一"
                    classes={{ label: classes.checkboxLabel }}
                  />
                  <FormControlLabel
                    control={<Checkbox color="primary" value="checkedA" />}
                    label="星期二"
                    classes={{ label: classes.checkboxLabel }}
                  />
                  <FormControlLabel
                    control={<Checkbox color="primary" value="checkedA" />}
                    label="星期三"
                    classes={{ label: classes.checkboxLabel }}
                  />
                  <FormControlLabel
                    control={<Checkbox color="primary" value="checkedA" />}
                    label="星期四"
                    classes={{ label: classes.checkboxLabel }}
                  />
                  <FormControlLabel
                    control={<Checkbox color="primary" value="checkedA" />}
                    label="星期五"
                    classes={{ label: classes.checkboxLabel }}
                  />
                  <FormControlLabel
                    control={<Checkbox color="primary" value="checkedA" />}
                    label="星期六"
                    classes={{ label: classes.checkboxLabel }}
                  />
                  <FormControlLabel
                    control={<Checkbox color="primary" value="checkedA" />}
                    label="星期日"
                    classes={{ label: classes.checkboxLabel }}
                  />
                </FormGroup>
              </div>
)}
          />
        </ListItem>
        <Divider />
        <ListItem className={classes.listItem}>
          <ListItemText
            primary={(
              <div className={classes.listText}>
                <div>分类下产品折扣率</div>
                <input />
              </div>
)}
          />
          <ListItemSecondaryAction>
            <Tooltip
              placement="top"
              title="0~10之间的数字，支持一位小数！8代表8折，8.5代表85折，0与10代表无折扣"
              enterTouchDelay={100}
              leaveTouchDelay={500}
            >
              <HelpOutlineIcon className={classes.helpIcon} />
            </Tooltip>
          </ListItemSecondaryAction>
        </ListItem>
        <Divider />
      </List>
      <div style={{ margin: '5px 10px 15px' }}>
        <Button color="primary" fullWidth variant="contained" style={{ color: '#fff' }}>
          提交
        </Button>
      </div>
    </React.Fragment>
  )
}
