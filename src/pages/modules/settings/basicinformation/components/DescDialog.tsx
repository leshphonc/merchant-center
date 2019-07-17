import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogContent from '@material-ui/core/DialogContent'
import DialogActions from '@material-ui/core/DialogActions'
import Button from '@material-ui/core/Button'
import Snackbar from '@material-ui/core/Snackbar'
import InputBase from '@material-ui/core/InputBase'

const useStyles = makeStyles({
  paper: {
    width: '80%',
  },
  input: {
    width: '100%',
  },
})

export interface ConfirmationDialogRawProps {
  open: boolean
  onClose: (value?: string) => void
}
export default (props: ConfirmationDialogRawProps) => {
  const classes = useStyles()
  const [openBar, setOpenBar] = React.useState(false)
  const { open, onClose, ...other } = props

  function handleCancel() {
    onClose()
  }

  function handleOk() {
    setOpenBar(true)
  }
  return (
    <Dialog
      disableBackdropClick
      disableEscapeKeyDown
      maxWidth="xs"
      open={open}
      classes={{ paper: classes.paper }}
      {...other}
    >
      <DialogTitle>修改商户描述</DialogTitle>
      <DialogContent dividers>
        <InputBase className={classes.input} autoFocus rows={5} multiline />
      </DialogContent>
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
