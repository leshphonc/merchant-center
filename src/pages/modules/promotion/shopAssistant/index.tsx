import React, { Fragment, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { withRouter } from 'react-router-dom'
import NavBar from '@/components/NavBar'
import TextField from '@material-ui/core/TextField'
// import { DatePicker } from '@material-ui/pickers'

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    width: 200,
  },
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
  select: {
    color: '#000',
    border: 0,
    background: '#ffb000',
    width: '100%',
    height: '100%',
    padding: '0 4%',
  },
  input: {
    width: '100%',
    height: '100%',
    border: 'none',
    background: '#ffb000',
    textAlign: 'center',
  },
  box: {
    height: '12vw',
    lineHeight: '12vw',
    borderBottom: '1px solid #ccc',
    display: 'flex',
    justifyContent: 'space-between',
    margin: '0 5% 0 3%',
  },
  btn_s: {
    background: '#ffb000',
    width: '100%',
    height: '13vw',
    lineHeight: '13vw',
    color: '#000',
    fontWeight: 'bold',
    fontSize: '16px',
    textAlign: 'center',
    position: 'absolute',
    bottom: 0,
  },
  time: {
    height: '1',
    padding: '0',
  },
  de: {
    color: 'red!important',
    '&>div': {
      fontSize: '14px',
      lineHeight: 'inherit',
      '&>input': {
        height: 'min-content',
        padding: '0',
        marginLeft: '-3px',
        fontSize: '12px',
      },
    },
    '&>div:before': {
      position: 'initial',
      content: '',
      borderBottom: 'none',
    },
    '&>div:after': {
      position: 'initial',
      content: '',
      borderBottom: 'none',
    },
    '&>.MuiInput-underline:hover:not(.Mui-disabled):before': {
      borderBottom: 'none',
    },
  },
})
export default withRouter((props: any) => {
  const classes = useStyles()
  // const [selectedDate, handleDateChange] = useState(new Date())
  return (
    <div className={classes.root}>
      <NavBar title="推广统计" goBack />
      <div style={{ marginTop: '-12px', background: '#fff' }}>
        <ul className={classes.ul} style={{ paddingTop: '6px' }}>
          <li className={classes.lis} style={{ width: '23%' }}>
            <select className={classes.select}>
              <option>全部店铺</option>
              <option>全部店铺</option>
            </select>
          </li>
          <li className={classes.lis} style={{ width: '26%' }}>
            {/* <Fragment>
              <DatePicker
                format="dd/MM/yyyy"
                value={selectedDate}
                onChange={handleDateChange}
              />
            </Fragment> */}
            <form className={classes.container} noValidate>
              <TextField
                id="date"
                type="date"
                defaultValue="2017-05-24"
                classes={{ root: classes.de }}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </form>
          </li>
          <li className={classes.lis} style={{ width: '26%' }}>
            <form className={classes.container} noValidate>
              <TextField
                id="date"
                type="date"
                defaultValue="2017-05-24"
                classes={{ root: classes.de }}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </form>
          </li>
          <li className={classes.lis} style={{ width: '23%' }}>查询</li>
        </ul>
        <ul className={classes.ul} style={{ marginTop: '-2%', paddingBottom: '7px' }}>
          <li className={classes.lies}>当天记录</li>
        </ul>
      </div>
      <div style={{ background: '#fff', marginTop: '-10px' }}>
        <div className={classes.box}><span>扫码总人数</span><span>0</span></div>
        <div className={classes.box}><span>绑粉总人数</span><span>0412</span></div>
        <div className={classes.box}><span>购买总人数</span><span>0</span></div>
        <div className={classes.box}><span>销售佣金</span><span>04534</span></div>
        <div className={classes.box}><span>推广佣金</span><span>0</span></div>
      </div>
      <div id="bottom_btn" className={classes.btn_s} onClick={() => props.history.push('/promotion/shopList')}>
        查看推广详情
      </div>
    </div>
  )
})
