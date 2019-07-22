import React from 'react'
import NavBar from '@/components/NavBar'
import Button from '@material-ui/core/Button'
import { connect } from 'react-redux'
import { actions } from '@/store/modules/promotion/redEnvelope'

const index = (props) => {
  console.log(props)
  const fetchA = () => {
    props.dispatch(actions.fetchRedEnvelopeList())
  }
  const add = () => {
    props.dispatch({ type: 'FETCH_REQUEST' })
    // props.dispatch(actions.createRedEnvelope())
  }
  return (
    <React.Fragment>
      <NavBar title="发布红包" goBack />
      <Button variant="contained" onClick={fetchA}>
        Default
      </Button>
      <Button variant="contained" onClick={add}>
        Default
      </Button>
      <div>{JSON.stringify(props.redEnvelope)}</div>
    </React.Fragment>
  )
}

function mapStateToProps(state) {
  // 从store中取出想要的值
  return { redEnvelope: state.redEnvelope }
}
export default connect(mapStateToProps)(index)
