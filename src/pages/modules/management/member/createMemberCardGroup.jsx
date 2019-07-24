import React from 'react'
import NavBar from '@/components/NavBar'
import TextField from '@material-ui/core/TextField'
import Container from '@material-ui/core/Container'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

export default () => (
  <div>
    <NavBar title="编辑分组" goBack />
    <Container>
      <TextField placeholder="分组名称" label="分组名称" fullWidth style={{ marginTop: 5 }} />
      <TextField placeholder="分组注释" label="分组注释" fullWidth />
      <TextField placeholder="折扣数" label="折扣数" fullWidth />
      <Typography color="primary" variant="body2" style={{ marginTop: 5 }}>
        (请填写0到10的数字,0相当于不打折,比如95折 填写9.5即可)
      </Typography>
      <Button
        variant="contained"
        color="primary"
        fullWidth
        style={{ marginTop: 10, color: '#fff' }}
      >
        保存
      </Button>
    </Container>
  </div>
)
