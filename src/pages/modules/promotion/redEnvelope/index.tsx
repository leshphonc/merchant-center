import React from 'react'
import { Route } from 'react-router-dom'
import RedEnvelopeList from './list'
import RedEnvelopePublish from './publish.jsx'

export default () => (
  <React.Fragment>
    <Route path="/promotion/redEnvelope" exact component={RedEnvelopeList} />
    <Route path="/promotion/redEnvelope/publish" component={RedEnvelopePublish} />
  </React.Fragment>
)
