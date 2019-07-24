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
      <NavBar title="添加商品" goBack />
      <List>
        <Divider />
        <ListItem className={classes.listItem}>
          <ListItemText
            primary={(
              <div className={classes.listText}>
                <div>商品名称</div>
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
                <div>商品条形码</div>
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
                <div>商品单位</div>
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
                <div>商品分类</div>
                <NativeSelect value={10}>
                  <option value={10}>正常</option>
                  <option value={20}>停售</option>
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
                <div>商品价格</div>
                <input />
              </div>
)}
          />
          <ListItemSecondaryAction>
            <Tooltip
              placement="top"
              title="最多支持两位小数，下同"
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
                <div>商品原价</div>
                <input />
              </div>
)}
          />
          <ListItemSecondaryAction>
            <Tooltip
              placement="top"
              title="原价可不填，不填和现价一样"
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
                <div>商品进价</div>
                <input />
              </div>
)}
          />
          <ListItemSecondaryAction>
            <Tooltip
              placement="top"
              title="进货价用户是看不到"
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
                <div>商品现价</div>
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
                <div>商品排序</div>
                <input />
              </div>
)}
          />
          <ListItemSecondaryAction>
            <Tooltip
              placement="top"
              title="默认添加顺序排序。数值越大，排序越前"
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
                <div>商品库存</div>
                <input />
              </div>
)}
          />
          <ListItemSecondaryAction>
            <Tooltip
              placement="top"
              title="-1表示无限量。数量小于10时，商品详细页面会显示库存。"
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
                <div>餐盒费</div>
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
                <div>商品状态</div>
                <NativeSelect value={10}>
                  <option value={10}>正常</option>
                  <option value={20}>停售</option>
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
                <div>商品类别</div>
                <NativeSelect value={10}>
                  <option value={10}>实体商品</option>
                  <option value={20}>虚拟商品</option>
                  <option value={30}>虚拟商品（需配送）</option>
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
                <div>选择添加到的店铺</div>
                <NativeSelect value={10}>
                  <option value={10}>天下</option>
                  <option value={20}>医行天下</option>
                  <option value={30}>母婴之家</option>
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
                <div>选择添加到的分类</div>
                <NativeSelect value={10}>
                  <option value={10}>蔬菜</option>
                  <option value={20}>水果</option>
                  <option value={30}>食品</option>
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
                <div>商品限时价</div>
                <input />
              </div>
)}
          />
          <ListItemSecondaryAction>
            <Tooltip
              placement="top"
              title="0表示无限时价。"
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
                <div>商品限时价</div>
                <input />
              </div>
)}
          />
          <ListItemSecondaryAction>
            <Tooltip
              placement="top"
              title="0表示无限时价。"
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
                <div>限时价库存</div>
                <input />
              </div>
)}
          />
          <ListItemSecondaryAction>
            <Tooltip
              placement="top"
              title="-1表示无限量。"
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
                <div>限时价类型</div>
                <RadioGroup aria-label="position" name="position" row defaultValue="disable">
                  <FormControlLabel
                    value="disable"
                    control={<Radio color="primary" style={{ padding: '0 8px' }} />}
                    label="固定时间段"
                    labelPlacement="end"
                    classes={{ label: classes.radioLabel }}
                  />
                  <FormControlLabel
                    value="enable"
                    control={<Radio color="primary" style={{ padding: '0 8px' }} />}
                    label="每天的时间段"
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
        <ListItem className={classes.listItem}>
          <ListItemText
            primary={(
              <div className={classes.listText}>
                <div>限时段</div>
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
                <div>上传图片</div>
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
                <div>商品图片</div>
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
                <div>商品描述</div>
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
                <div>归属打印机</div>
                <NativeSelect value={10}>
                  <option value={10}>正常</option>
                  <option value={20}>停售</option>
                </NativeSelect>
              </div>
)}
          />
          <ListItemSecondaryAction>
            <Tooltip
              placement="top"
              title="如果选择了一台非主打印机的话，那么客户在下单的时候选择的打印机和主打印机同时打印，如果不选打印机或是选择了主打印机的话，那么就主打印机打印"
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
