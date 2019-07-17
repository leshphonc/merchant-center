import React from 'react'
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogContent from '@material-ui/core/DialogContent'
import DialogActions from '@material-ui/core/DialogActions'
import Button from '@material-ui/core/Button'
import Snackbar from '@material-ui/core/Snackbar'
import Cropper from 'react-cropper'
import 'cropperjs/dist/cropper.css'

const MAX_FILE_SIZE = 5 * 1024 * 1024 // 文件最大限制为5M

export default class CropperImg extends React.Component {
  constructor(props) {
    super(props)
    this.myRef = React.createRef()
    this.state = {
      file: null,
      openBar: false,
      resultImgUrl: null,
    }
  }

  handleClassFileChange = (e) => {
    this.setState({
      file: null,
      resultImgUrl: null,
    })
    const file = e.target.files[0]
    console.log('handleClassFileChange')
    if (file) {
      if (file.size <= MAX_FILE_SIZE) {
        const fileReader = new FileReader()
        fileReader.onload = (ev) => {
          const dataURL = ev.target.result
          this.setState({ file: dataURL })
          console.log(dataURL)
        }
        fileReader.readAsDataURL(file)
      } else {
        console.log('文件过大')
      }
    }
  }

  saveImg = () => {
    this.myRef.current.getCroppedCanvas().toBlob(async (blob) => {
      // // 创造提交表单数据对象
      // const formData = new FormData()
      // // 添加要上传的文件
      // formData.append('file', blob, filename)
      // 提示开始上传 (因为demo没有后端server, 所以这里代码我注释掉了, 这里是上传到服务器并拿到返回数据的代码)
      // this.setState({submitting: true})
      // 上传图片
      // const resp = await http.post(url, formData)
      // 拿到服务器返回的数据(resp)
      // console.log(resp)
      // 提示上传完毕
      // this.setState({submitting: false})

      // 把选中裁切好的的图片传出去
      const str = URL.createObjectURL(blob)
      console.log(str)
      this.setState({
        resultImgUrl: str,
      })

      // 关闭弹窗
      // this.props.onClose()
    })
  }

  render() {
    const { open, onClose, ...other } = this.props
    const { file, openBar, resultImgUrl } = this.state
    return (
      <Dialog disableBackdropClick disableEscapeKeyDown maxWidth="xs" open={open} {...other}>
        <DialogTitle>选择商户图片</DialogTitle>
        <DialogContent dividers>
          {file && !resultImgUrl ? (
            <>
              <Cropper
                ref={this.myRef}
                src={file}
                style={{ height: 400, width: '100%', marginBottom: 20 }}
                // Cropper.js options
                aspectRatio={1 / 1}
                guides
              />
              <Button
                variant="contained"
                color="primary"
                style={{ color: '#fff', marginRight: 20 }}
                onClick={this.saveImg}
              >
                截取
              </Button>
            </>
          ) : null}
          {resultImgUrl ? <img src={resultImgUrl} alt="" style={{ width: '100%' }} /> : null}
          <input
            accept="image/*"
            id="contained-button-file"
            multiple
            type="file"
            style={{ display: 'none' }}
            onChange={this.handleClassFileChange}
          />
          <label htmlFor="contained-button-file">
            <Button variant="contained" color="primary" component="span" style={{ color: '#fff' }}>
              选择图片
            </Button>
          </label>
        </DialogContent>
        <DialogActions>
          <Button color="primary" onClick={onClose}>
            取消
          </Button>
          <Button color="primary">确定</Button>
        </DialogActions>
        <Snackbar
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
          open={openBar}
          message={<span>验证未通过</span>}
        />
      </Dialog>
    )
  }
}
