import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import IconButton from '@material-ui/core/IconButton'

const useStyles = makeStyles({
  root: {
    height: '100vh',
    background: '#fff',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  rs: {
    height: '6vh',
    background: '#ffb000',
    textAlign: 'center',
    lineHeight: '6vh',
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
})

export default () => {
  const classes = useStyles()
  return (
    <div className={classes.rs}>
      <span>推广统计</span>
    </div>
  )
}
