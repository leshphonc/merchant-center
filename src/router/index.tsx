import React from 'react'
import { Switch, Route, withRouter } from 'react-router-dom'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import { ThemeProvider } from '@material-ui/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import { createMuiTheme } from '@material-ui/core/styles'
import Login from '@/pages/login'
import Index from '@/pages'
import Wallet from '@/pages/wallet'
import BasicInformation from '@/pages/modules/settings/basicinformation'
import Promotion from '@/pages/modules/promotion'

let oldLocation: any = null
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#ffb000',
    },
  },
})
const BasicRoute = (props: any) => {
  const { location, history } = props
  let classNames = ''
  if (history.action === 'PUSH') {
    classNames = 'forward-from-right'
  } else if (history.action === 'POP' && oldLocation) {
    classNames = 'back-to-right'
  }
  oldLocation = location
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <TransitionGroup
        className="router-wrapper"
        childFactory={child => React.cloneElement(child, { classNames })}
      >
        <CSSTransition timeout={500} key={location.pathname}>
          <Switch location={location}>
            <Route path="/login" component={Login} />
            <Route path="/wallet" component={Wallet} />
            <Route path="/basicinformation" component={BasicInformation} />
            <Route path="/promotion" component={Promotion} />
            <Route path="/" component={Index} />
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    </ThemeProvider>
  )
}

export default withRouter(BasicRoute)
