import React from 'react'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormLabel from '@material-ui/core/FormLabel'
import FormHelperText from '@material-ui/core/FormHelperText'
import FormControlLabel from '@material-ui/core/FormControlLabel'

const RenderSelect = ({
  label, input, radioValue, radioChange, child,
}) => (
  <div style={{ marginBottom: 5 }}>
    <FormLabel>{label}</FormLabel>
    <RadioGroup {...input} style={{ width: '100%' }} value={radioValue} onChange={radioChange} row>
      {child.map(val => (
        <FormControlLabel
          key={val.val}
          value={val.val}
          control={<Radio color="primary" />}
          label={val.name}
          labelPlacement="end"
        />
      ))}
    </RadioGroup>
    <FormHelperText>手气红包会根据红包的属性发放随机面额红包，普通红包只能发放固定面额的红包</FormHelperText>
  </div>
)

export default RenderSelect
