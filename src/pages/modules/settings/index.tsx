import React from 'react'
import { Route } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import BasicInformation from './basicinformation'

const useStyles = makeStyles({
  root: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
})
export default () => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Route path="/settings/basicinformation" component={BasicInformation} />
    </div>
  )
}
