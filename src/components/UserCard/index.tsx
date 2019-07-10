import React from 'react'
import { makeStyles, createStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Avatar from '@material-ui/core/Avatar'
import SettingsIcon from '@material-ui/icons/Settings'
import styles from './index.module.scss'

const useStyles = makeStyles(
  createStyles({
    avatar: {
      width: 60,
      height: 60,
      top: '-15px',
      left: '50%',
      transform: 'translateX(-50%)',
    },
    bigAvatar: {
      margin: 10,
      width: 60,
      height: 60,
    },
    settings: {
      position: 'absolute',
      top: 20,
      right: 20,
    },
  }),
)
export default () => {
  const classes = useStyles()
  return (
    <Paper>
      <Grid container justify="center" alignItems="center" className={styles.container}>
        <Grid item xs={3}>
          <Avatar src={require('../../assets/image/avatar.jpeg')} className={classes.avatar} />
        </Grid>
        <Grid item xs={9}>
          <Grid container direction="column" className={styles.desc}>
            <div>Hi, desing kevin 欢迎回来！</div>
            <div>账户余额（元）</div>
            <div>
              <div>116688.68</div>
              <div>充值 | 提现</div>
            </div>
          </Grid>
        </Grid>
        <SettingsIcon className={classes.settings} />
      </Grid>
    </Paper>
  )
}
