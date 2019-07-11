import React from 'react'
import { makeStyles, createStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import UserCard from '../UserCard'
import GridCard from '../GridCard'
import { ManagementGrid, PromotionGrid, AllianceGrid } from '../../env/constant'

const useStyles = makeStyles(
  createStyles({
    paper: {
      marginTop: 10,
    },
  }),
)
export default () => {
  const classes = useStyles()
  return (
    <div className="bottom60">
      <UserCard />
      <Paper className={classes.paper}>
        <GridCard data={PromotionGrid} style={{ padding: '0 0 30px 0' }} />
      </Paper>
      <Paper className={classes.paper}>
        <GridCard data={AllianceGrid} style={{ padding: '0 0 30px 0' }} />
      </Paper>
      <Paper className={classes.paper}>
        <GridCard data={ManagementGrid} style={{ padding: '30px 0' }} />
      </Paper>
    </div>
  )
}
