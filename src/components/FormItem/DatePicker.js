import React from 'react'
import { DatePicker } from '@material-ui/pickers'

const RenderDatePicker = ({
  label, input, dateValue, changeVal,
}) => (
  <DatePicker
    label={label}
    {...input}
    format="YYYY-MM-DD HH:mm"
    okLabel="确定"
    cancelLabel="取消"
    onChange={changeVal}
    value={dateValue}
    style={{ marginBottom: 5 }}
  />
)

export default RenderDatePicker
