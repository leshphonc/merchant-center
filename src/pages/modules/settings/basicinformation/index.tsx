import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import NavBar from '@/components/NavBar'
import IconButton from '@material-ui/core/IconButton'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import ListSubheader from '@material-ui/core/ListSubheader'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Divider from '@material-ui/core/Divider'
import Switch from '@material-ui/core/Switch'
import Chip from '@material-ui/core/Chip'
import Tooltip from '@material-ui/core/Tooltip'
import HelpOutlineIcon from '@material-ui/icons/HelpOutline'
import TelDialog from './components/TelDialog'

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
    '&>div:nth-child(2)': {
      flex: 3,
      opacity: 0.6,
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
  const [checked, setChecked] = React.useState(true)
  const [openTel, setOpenTel] = React.useState(false)

  const closeTelDialog = () => {
    setOpenTel(false)
  }

  // const mapList = () => BasicInformation.map(item => (
  //   <List key={item.label} subheader={<ListSubheader>{item.label}</ListSubheader>}>
  //     <Divider />
  //     {item.children.map(child => (
  //       <div key={child.label}>
  //         <ListItem button className={classes.listItem} onClick={() => openDialog(child)}>
  //           <ListItemText primary={child.label} />
  //           {child.type !== 'readonly' ? (
  //             <ListItemSecondaryAction>
  //               <IconButton>
  //                 <ChevronRightIcon />
  //               </IconButton>
  //             </ListItemSecondaryAction>
  //           ) : null}
  //         </ListItem>
  //         <Divider />
  //       </div>
  //     ))}
  //   </List>
  // ))

  return (
    <div className={classes.root}>
      <NavBar title="基本信息" goBack />
      <List subheader={<ListSubheader>基本信息</ListSubheader>}>
        <Divider />
        <ListItem className={classes.listItem}>
          <ListItemText
            primary={(
              <div className={classes.listText}>
                <div>商户账号</div>
                <div>account</div>
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
                <div>商户名称</div>
                <div>cc</div>
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
        <ListItem button className={classes.listItem} onClick={() => setOpenTel(true)}>
          <ListItemText
            primary={(
              <div className={classes.listText}>
                <div>联系电话</div>
                <div>18033661270</div>
              </div>
)}
          />
          <ListItemSecondaryAction>
            <IconButton>
              <ChevronRightIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>

        <Divider />
        <ListItem button className={classes.listItem}>
          <ListItemText
            primary={(
              <div className={classes.listText}>
                <div>商家邮箱</div>
                <div>102075776@qq.com</div>
              </div>
)}
          />
          <ListItemSecondaryAction>
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
                <div>
                  超时时间
                  <Tooltip
                    placement="top"
                    title="团购快递收货超时时间，0为永不超时，1为一天后超时并确认消费。（店员发货后开始计时）"
                    enterTouchDelay={100}
                    leaveTouchDelay={500}
                  >
                    <HelpOutlineIcon className={classes.helpIcon} />
                  </Tooltip>
                </div>
                <div>0</div>
              </div>
)}
          />
          <ListItemSecondaryAction>
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
                <div>线下支付权限</div>
              </div>
)}
          />
          <ListItemSecondaryAction>
            <Switch color="primary" onChange={() => setChecked(!checked)} checked={checked} />
          </ListItemSecondaryAction>
        </ListItem>

        <Divider />
        <ListItem button className={classes.listItem}>
          <ListItemText
            primary={(
              <div className={classes.listText}>
                <div>商户经纬度</div>
                <div>127.0001, 24.244505</div>
              </div>
)}
          />
          <ListItemSecondaryAction>
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
                <div>微官网点击量</div>
                <div>0</div>
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
                <div>商户所属分类</div>
              </div>
)}
          />
          <ListItemSecondaryAction>
            <Chip
              label="上门服务"
              variant="outlined"
              color="primary"
              classes={{ root: classes.chip }}
            />
            <Chip
              label="按摩"
              variant="outlined"
              color="primary"
              classes={{ root: classes.chip }}
            />
          </ListItemSecondaryAction>
        </ListItem>
        <Divider />
      </List>

      <List subheader={<ListSubheader>商家描述</ListSubheader>}>
        <Divider />
        <ListItem button className={classes.listItem}>
          <ListItemText
            primary={(
              <div className={classes.listText}>
                <div>商户描述</div>
                <div>
                  我是商户描述你信吗？我是商户描述你信吗？我是商户描述你信吗？我是商户描述你信吗？
                </div>
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
        <ListItem button className={classes.listItem}>
          <ListItemText
            primary={(
              <div className={classes.listText}>
                <div>商户图片</div>
                <div style={{ opacity: 1 }}>
                  <img
                    src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1562754524381&di=98cdda464f35e7cc90edfa629389f23f&imgtype=0&src=http%3A%2F%2Fpic.rmb.bdstatic.com%2Fcd2476300bbad8dfcfff1d277b79401a.jpeg"
                    alt=""
                    style={{ width: 100, height: 100 }}
                  />
                </div>
              </div>
)}
          />
          <ListItemSecondaryAction>
            <IconButton>
              <ChevronRightIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>

        <Divider />
        <ListItem button className={classes.listItem}>
          <ListItemText
            primary={(
              <div className={classes.listText}>
                <div>商户详情</div>
                <div>
                  我是商户详情你信吗？我是商户详情你信吗？我是商户详情你信吗？我是商户详情你信吗？我是商户详情你信吗？
                </div>
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
      </List>

      <List subheader={<ListSubheader>绑定微信</ListSubheader>}>
        <Divider />
        <ListItem button className={classes.listItem}>
          <ListItemText primary="绑定微信" />
          <ListItemSecondaryAction>
            <IconButton>
              <ChevronRightIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
        <Divider />
      </List>
      <TelDialog open={openTel} onClose={closeTelDialog} />
    </div>
  )
}
