import React from 'react'
import InputLabel from '@material-ui/core/InputLabel'
import NativeSelect from '@material-ui/core/NativeSelect'

const RenderSelect = ({
  label, input, dateValue, changeVal, child,
}) => (
  <div style={{ marginBottom: 5 }}>
    <InputLabel htmlFor="province">{label}</InputLabel>
    <NativeSelect {...input} style={{ width: '100%' }}>
      {child.map(val => (
        <option key={val} value={val}>
          {val}
        </option>
      ))}
    </NativeSelect>
  </div>
)

export default RenderSelect
