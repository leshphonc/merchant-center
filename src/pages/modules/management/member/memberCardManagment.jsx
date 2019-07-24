import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import NavBar from '@/components/NavBar'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import Divider from '@material-ui/core/Divider'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'

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

  return (
    <div>
      <NavBar title="会员卡编辑" goBack />
      <List>
        <Divider />
        <ListItem className={classes.listItem}>
          <ListItemText
            primary={(
              <div className={classes.listText}>
                <div>会员名称</div>
                <div>附件看看</div>
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
                <div>会员卡卡号</div>
                <div>fffffff12123</div>
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
                <div>会员手机号</div>
                <div>****</div>
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
                <div>实体卡号</div>
                <div>1132</div>
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
                <div>会员卡领取时间</div>
                <div>2017-11-08 21:33:21</div>
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
                <div>余额</div>
                <div>现在余额： ￥2</div>
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
                <div>余额操作</div>
                <div>account</div>
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
                <div>积分</div>
                <div>account</div>
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
                <div>积分操作</div>
                <div>现在金币： 178</div>
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
                <div>用户分组</div>
                <div>现金卡</div>
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
                <div>状态</div>
                <div>正常</div>
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
                <div>记录表</div>
                <div>消费记录</div>
              </div>
)}
          />
          <ListItemSecondaryAction hidden />
        </ListItem>
        <Divider />
        <Container style={{ textAlign: 'center', marginTop: 15 }}>
          <Button
            color="primary"
            variant="contained"
            style={{ color: '#fff', width: 130, marginRight: 5 }}
          >
            保存
          </Button>
          <Button
            color="primary"
            variant="contained"
            style={{ color: '#fff', width: 130, marginLeft: 5 }}
          >
            返回
          </Button>
        </Container>
      </List>
    </div>
  )
}
