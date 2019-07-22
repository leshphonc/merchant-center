import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Avatar from '@material-ui/core/Avatar'
import NavBar from '@/components/NavBar'

const useStyles = makeStyles({
  root: {
    height: '100vh',
    background: '#bcbcbc',
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
  box: {
    background: '#fff',
  },
  lis: {
    height: '10vw',
    listStyleType: 'none',
    width: '24%',
    background: '#ffb000',
    textAlign: 'center',
    lineHeight: '10vw',
    fontSize: '14px',
    fontWeight: 'bold',
  },
  lies: {
    height: '10vw',
    listStyleType: 'none',
    width: '100%',
    background: '#ffb000',
    textAlign: 'center',
    lineHeight: '10vw',
    fontSize: '14px',
    fontWeight: 'bold',
  },
  ul: {
    paddingLeft: '2%',
    display: 'flex',
    justifyContent: 'space-between',
    paddingRight: '2%',
  },
  input: {
    width: '100%',
    height: '100%',
    border: 'none',
    background: '#ffb000',
    textAlign: 'center',
  },
  navtop: {
    display: 'flex',
    justifyContent: 'space-around',
    fontWeight: 'bold',
    fontSize: '12px',
    padding: '2% 0',
    textAlign: 'center',
  },
  navlist: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: '2% 0',
    borderBottom: '1px solid #ccc',
  },
  page: {
    fontSize: '12px',
    textAlign: 'center',
    height: '4vw',
    marginTop: '2%',
  },
  MuiAvataRroot: {
    width: '18%',
    '&>img': {
      width: '10vw',
      height: '10vw',
      borderRadius: '50%',
    },
  },
})
export default () => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <NavBar title="扫码记录" goBack />
      <div style={{ marginTop: '-12px', background: '#fff' }}>
        <ul className={classes.ul} style={{ paddingTop: '10px', marginBottom: '20px' }}>
          <li className={classes.lis}>
          今日推广
          </li>
          <li className={classes.lis}>
            <input className={classes.input} type="text" name="start_time" value="" id="apply_start" placeholder="开始时间" />
          </li>
          <li className={classes.lis}>
            <input className={classes.input} type="text" name="end_time" value="" id="apply_end" placeholder="结束时间" />
          </li>
          <li className={classes.lis}>查询</li>
        </ul>
        <ul className={classes.ul} style={{ marginTop: '-2%', paddingBottom: '7px' }}>
          <li className={classes.lies} style={{ background: '#ddd', height: '8vw', lineHeight: '8vw' }}>记录</li>
        </ul>
      </div>
      <div className={classes.box} style={{ marginTop: '-2.5%' }}>
        <div className={classes.navtop}>
          <span style={{ display: 'inline-block', width: '18%' }}>头像</span>
          <span style={{ display: 'inline-block', width: '18%' }}>昵称</span>
          <span style={{ display: 'inline-block', width: '36%' }}>扫码时间</span>
          <span style={{ display: 'inline-block', width: '20%' }}>推广内容</span>
        </div>
      </div>
      <div style={{ marginTop: '0.5%', background: '#fff' }}>
        <div className={classes.navlist}>
          <Avatar src={require('@/assets/image/avatar.jpeg')} style={{ }} className={classes.MuiAvataRroot} />
          <span style={{ width: '18%', textAlign: 'center' }}>小雅</span>
          <span style={{ width: '36%', textAlign: 'center' }}>2019-07-12 11：25</span>
          <span style={{ width: '20%', textAlign: 'center' }}>查看</span>
        </div>
      </div>
      <div className={classes.page}>
        1条数据 1/1页
      </div>
    </div>
  )
}
