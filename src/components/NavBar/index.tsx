import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { withRouter } from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'

interface NavBar {
  title: string
  goBack: boolean | string
  rightBtn?: {
    label: string
    url: string
  }
}

const useStyles = makeStyles({
  title: {
    position: 'absolute',
    left: 0,
    right: 0,
    textAlign: 'center',
    width: 140,
    margin: '0 auto',
    color: '#fff',
  },
  rightIcon: {
    position: 'absolute',
    right: 10,
    color: '#fff',
  },
})
export default withRouter((props: any) => {
  const classes = useStyles()
  const goBack = () => {
    if (typeof props.goBack === 'boolean') {
      props.history.goBack()
    } else {
      props.history.push(props.goBack)
    }
  }
  const { title, rightBtn } = props
  return (
    <div style={{ height: 56 }}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton edge="start" color="inherit" onClick={goBack}>
            <ArrowBackIcon style={{ color: '#fff' }} />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            {title}
          </Typography>
          {rightBtn ? (
            <Button
              color="inherit"
              className={classes.rightIcon}
              onClick={() => props.history.push(rightBtn.url)}
            >
              {rightBtn.label}
            </Button>
          ) : null}
        </Toolbar>
      </AppBar>
    </div>
  )
})
