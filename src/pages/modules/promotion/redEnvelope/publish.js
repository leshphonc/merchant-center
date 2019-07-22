import React from 'react'
import NavBar from '@/components/NavBar'
import { connect } from 'react-redux'
import PublishForm from './components/PublishForm'

const index = () => {
  const handleSubmit = (data) => {
    console.log(11)
    console.log(data)
  }
  return (
    <React.Fragment>
      <NavBar title="发布红包" goBack />
      <PublishForm onSubmit={handleSubmit} />
    </React.Fragment>
  )
}

function mapStateToProps(state) {
  // 从store中取出想要的值
  return { redEnvelope: state.redEnvelope }
}
export default connect(mapStateToProps)(index)
