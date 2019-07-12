import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import Navigation from '@/components/Navigation'
import Home from './home'
import Order from './order'
import Marketing from './marketing'
import Mine from './mine'

let oldLocation: any = null
export default (props: any) => {
  const { location, history } = props
  let classNames = ''
  if (history.action === 'PUSH') {
    classNames = 'forward-from-right'
  } else if (history.action === 'POP' && oldLocation) {
    classNames = 'back-to-right'
  }
  oldLocation = location
  return (
    <React.Fragment>
      <TransitionGroup
        className="router-wrapper"
        childFactory={child => React.cloneElement(child, { classNames })}
      >
        <CSSTransition timeout={700} key={location.pathname}>
          <Switch location={location}>
            <Route path="/" exact component={Home} />
            <Route path="/order" component={Order} />
            <Route path="/marketing" component={Marketing} />
            <Route path="/mine" component={Mine} />
          </Switch>
        </CSSTransition>
      </TransitionGroup>
      <Navigation />
    </React.Fragment>
  )
}
