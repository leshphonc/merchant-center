import React from 'react'
import { makeStyles, createStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import UserCard from '@/components/UserCard'
import GridCard from '@/components/GridCard'
import { SettingGrid, BusinessGrid, BillGrid } from '@/config/grid'

const useStyles = makeStyles(
  createStyles({
    paper: {
      margin: '10px 8px',
    },
  }),
)
export default () => {
  const classes = useStyles()
  return (
    <div className="bottom60">
      <UserCard />
      <Paper className={classes.paper}>
        <GridCard data={SettingGrid} style={{ padding: '0 0 30px 0' }} />
      </Paper>
      <Paper className={classes.paper}>
        <GridCard data={BusinessGrid} style={{ padding: '0 0 30px 0' }} />
      </Paper>
      <Paper className={classes.paper}>
        <GridCard data={BillGrid} style={{ padding: '0 0 30px 0' }} />
      </Paper>
    </div>
  )
}
