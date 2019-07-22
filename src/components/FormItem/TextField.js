import React from 'react'
import TextField from '@material-ui/core/TextField'

const RenderTextField = ({ label, input, ...custom }) => (
  <TextField style={{ marginBottom: 5 }} label={label} {...input} {...custom} />
)

export default RenderTextField
