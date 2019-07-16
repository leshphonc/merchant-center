import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogContent from '@material-ui/core/DialogContent'
import DialogActions from '@material-ui/core/DialogActions'
import Button from '@material-ui/core/Button'
import Snackbar from '@material-ui/core/Snackbar'

const useStyles = makeStyles({
  input: {
    width: '100%',
  },
})
export interface ConfirmationDialogRawProps {
  classes: Record<'paper', string>
  open: boolean
  value: string
  ele: any
  reg?: string
  onClose: (value?: string) => void
}
export default (props: ConfirmationDialogRawProps) => {
  const classes = useStyles()
  const {
    onClose, open, value: valueProp, reg, ele, ...other
  } = props
  console.log(props)
  const [openBar, setopenBar] = React.useState(false)
  function handleCancel() {
    onClose()
  }

  function handleOk() {
    if (reg) {
    }
  }

  return (
    <Dialog disableBackdropClick disableEscapeKeyDown maxWidth="xs" open={open} {...other}>
      <DialogTitle>{valueProp}</DialogTitle>
      <DialogContent dividers>{ele}</DialogContent>
      <DialogActions>
        <Button onClick={handleCancel} color="primary">
          取消
        </Button>
        <Button onClick={handleOk} color="primary">
          确定
        </Button>
      </DialogActions>
      <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        open={openBar}
        message={<span>验证未通过</span>}
      />
    </Dialog>
  )
}
