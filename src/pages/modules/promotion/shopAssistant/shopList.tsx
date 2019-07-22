import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { withRouter } from 'react-router-dom'
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
})
export default withRouter((props: any) => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <NavBar title="店员列表" goBack />
      <div className={classes.box} style={{ padding: '0 2%', marginTop: '2%' }}>
        <div style={{ display: 'flex', padding: '2%', borderBottom: '1px solid #aaa' }}>
          <Avatar src={require('@/assets/image/avatar.jpeg')} style={{ borderRadius: '5PX', width: '20vw', height: '20vw' }} />
          <div style={{ marginLeft: '4%' }}>
            <p style={{ margin: '0px 0 10px 0' }}>店员名称：小二</p>
            <p style={{ margin: '0px 0 10px 0' }}>销售佣金：12</p>
            <p style={{ margin: '0' }}>推广佣金：8</p>
          </div>
        </div>
        <div style={{ padding: '3% 0', display: 'flex', justifyContent: 'space-between' }}>
          <span style={{ padding: '2vw 5.5vw', background: '#ffb000' }} onClick={() => props.history.push('/promotion/shopAssistant/scanNumber')}>扫码人数(0)</span>
          <span style={{ padding: '2vw 5.5vw', background: '#ffb000' }} onClick={() => props.history.push('/promotion/shopAssistant/fansNumber')}>绑粉人数(0)</span>
          <span style={{ padding: '2vw 5.5vw', background: '#ffb000' }} onClick={() => props.history.push('/promotion/shopAssistant/saleList')}>购买人数(0)</span>
        </div>
      </div>
    </div>
  )
})
