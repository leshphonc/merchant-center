import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import NavBar from '@/components/NavBar'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import Divider from '@material-ui/core/Divider'
import Button from '@material-ui/core/Button'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import NativeSelect from '@material-ui/core/NativeSelect'
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
  radioLabel: {
    fontSize: 14,
  },
})

export default () => {
  const classes = useStyles()
  return (
    <React.Fragment>
      <NavBar title="店铺管理" goBack />
      <List>
        <Divider />
        <ListItem className={classes.listItem}>
          <ListItemText
            primary={(
              <div className={classes.listText}>
                <div>店铺名称</div>
                <input />
              </div>
)}
          />
          <ListItemSecondaryAction hidden />
        </ListItem>
        <Divider />
        <ListItem className={classes.listItem}>
          <ListItemText
            primary={(
              <div className={classes.listText}>
                <div>是否设置成主店</div>
                <RadioGroup aria-label="position" name="position" row defaultValue="disable">
                  <FormControlLabel
                    value="disable"
                    control={<Radio color="primary" style={{ padding: '0 8px' }} />}
                    label="否"
                    labelPlacement="end"
                    classes={{ label: classes.radioLabel }}
                  />
                  <FormControlLabel
                    value="enable"
                    control={<Radio color="primary" style={{ padding: '0 8px' }} />}
                    label="是"
                    labelPlacement="end"
                    classes={{ label: classes.radioLabel }}
                  />
                </RadioGroup>
              </div>
)}
          />
          <ListItemSecondaryAction>
            <Tooltip
              placement="top"
              title="如果将此店铺设置成主店，系统将自动取消其他已设置的主店"
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
                <div>联系电话</div>
                <input />
              </div>
)}
          />
          <ListItemSecondaryAction hidden />
        </ListItem>
        <Divider />
        <ListItem className={classes.listItem}>
          <ListItemText
            primary={(
              <div className={classes.listText}>
                <div>联系微信</div>
                <input />
              </div>
)}
          />
          <ListItemSecondaryAction hidden />
        </ListItem>
        <Divider />
        <ListItem className={classes.listItem}>
          <ListItemText
            primary={(
              <div className={classes.listText}>
                <div>联系QQ</div>
                <input />
              </div>
)}
          />
          <ListItemSecondaryAction hidden />
        </ListItem>
        <Divider />
        <ListItem className={classes.listItem}>
          <ListItemText
            primary={(
              <div className={classes.listText}>
                <div>关键词</div>
                <input />
              </div>
)}
          />
          <ListItemSecondaryAction hidden />
        </ListItem>
        <Divider />
        <ListItem className={classes.listItem}>
          <ListItemText
            primary={(
              <div className={classes.listText}>
                <div>人均消费</div>
                <input />
              </div>
)}
          />
          <ListItemSecondaryAction hidden />
        </ListItem>
        <Divider />
        <ListItem className={classes.listItem}>
          <ListItemText
            primary={(
              <div className={classes.listText}>
                <div>店铺特色</div>
                <input />
              </div>
)}
          />
          <ListItemSecondaryAction hidden />
        </ListItem>
        <Divider />
        <ListItem className={classes.listItem}>
          <ListItemText
            primary={(
              <div className={classes.listText}>
                <div>店铺所在地</div>
                <input />
              </div>
)}
          />
          <ListItemSecondaryAction hidden />
        </ListItem>
        <Divider />
        <ListItem className={classes.listItem}>
          <ListItemText
            primary={(
              <div className={classes.listText}>
                <div>详细地址</div>
                <input />
              </div>
)}
          />
          <ListItemSecondaryAction hidden />
        </ListItem>
        <Divider />
        <ListItem className={classes.listItem}>
          <ListItemText
            primary={(
              <div className={classes.listText}>
                <div>交通路线</div>
                <input />
              </div>
)}
          />
          <ListItemSecondaryAction hidden />
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
              title="默认添加顺序排序！手动调值，数值越大，排序越前"
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
                <div>餐饮</div>
                <NativeSelect value={20}>
                  <option value={10}>开启</option>
                  <option value={20}>关闭</option>
                </NativeSelect>
              </div>
)}
          />
          <ListItemSecondaryAction hidden />
        </ListItem>
        <Divider />
        <ListItem className={classes.listItem}>
          <ListItemText
            primary={(
              <div className={classes.listText}>
                <div>团购</div>
                <NativeSelect value={20}>
                  <option value={10}>开启</option>
                  <option value={20}>关闭</option>
                </NativeSelect>
              </div>
)}
          />
          <ListItemSecondaryAction hidden />
        </ListItem>
        <Divider />
        <ListItem className={classes.listItem}>
          <ListItemText
            primary={(
              <div className={classes.listText}>
                <div>汽车配件</div>
                <NativeSelect value={20}>
                  <option value={10}>开启</option>
                  <option value={20}>关闭</option>
                </NativeSelect>
              </div>
)}
          />
          <ListItemSecondaryAction hidden />
        </ListItem>
        <Divider />
        <ListItem className={classes.listItem}>
          <ListItemText
            primary={(
              <div className={classes.listText}>
                <div>宿管</div>
                <NativeSelect value={10}>
                  <option value={10}>开启</option>
                  <option value={20}>关闭</option>
                </NativeSelect>
              </div>
)}
          />
          <ListItemSecondaryAction hidden />
        </ListItem>
        <Divider />
        <ListItem className={classes.listItem}>
          <ListItemText
            primary={(
              <div className={classes.listText}>
                <div>活动运营</div>
                <NativeSelect value={10}>
                  <option value={10}>开启</option>
                  <option value={20}>关闭</option>
                </NativeSelect>
              </div>
)}
          />
          <ListItemSecondaryAction hidden />
        </ListItem>
        <Divider />
        <ListItem className={classes.listItem}>
          <ListItemText
            primary={(
              <div className={classes.listText}>
                <div>营业时间</div>
                <input type="text" />
              </div>
)}
          />
          <ListItemSecondaryAction>
            <Tooltip
              placement="top"
              title="如果将此店铺设置成主店，系统将自动取消其他已设置的主店"
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
                <div>地图位置</div>
                <input type="text" />
              </div>
)}
          />
          <ListItemSecondaryAction hidden />
        </ListItem>
        <Divider />
        <ListItem className={classes.listItem}>
          <ListItemText
            primary={(
              <div className={classes.listText}>
                <div>店铺简介</div>
                <textarea name="" id="" cols="30" rows="10" />
              </div>
)}
          />
          <ListItemSecondaryAction hidden />
        </ListItem>
        <Divider />
        <ListItem className={classes.listItem}>
          <ListItemText
            primary={(
              <div className={classes.listText}>
                <div>店铺图片</div>
                <img src="" alt="" />
              </div>
)}
          />
          <ListItemSecondaryAction hidden />
        </ListItem>
        <Divider />
        <ListItem className={classes.listItem}>
          <ListItemText
            primary={(
              <div className={classes.listText}>
                <div>店铺LOGO</div>
                <img src="" alt="" />
              </div>
)}
          />
          <ListItemSecondaryAction hidden />
        </ListItem>
        <Divider />
        <ListItem className={classes.listItem}>
          <ListItemText
            primary={(
              <div className={classes.listText}>
                <div>优惠类型</div>
                <RadioGroup aria-label="position" name="position" row defaultValue="disable">
                  <FormControlLabel
                    value="disable"
                    control={<Radio color="primary" style={{ padding: '0 8px' }} />}
                    label="折扣"
                    labelPlacement="end"
                    classes={{ label: classes.radioLabel }}
                  />
                  <FormControlLabel
                    value="enable"
                    control={<Radio color="primary" style={{ padding: '0 8px' }} />}
                    label="满减"
                    labelPlacement="end"
                    classes={{ label: classes.radioLabel }}
                  />
                </RadioGroup>
              </div>
)}
          />
          <ListItemSecondaryAction hidden />
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
