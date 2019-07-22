import React from 'react'
import { Field, reduxForm } from 'redux-form'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import RenderTextField from '@/components/FormItem/TextField'
import RenderDatePicker from '@/components/FormItem/DatePicker'
import RenderSelect from '@/components/FormItem/Select'
import RenderRadioGroup from '@/components/FormItem/Radio'
import Link from '@material-ui/core/Link'
import DialogTitle from '@material-ui/core/DialogTitle'
import Dialog from '@material-ui/core/Dialog'
import Typography from '@material-ui/core/Typography'

const PublishForm = (props) => {
  const [startTime, setStartTime] = React.useState(null)
  const [endTime, setEndTime] = React.useState(null)
  const [openModal, setOpenModal] = React.useState(false)
  const [radio, setRadio] = React.useState('1')
  const { handleSubmit } = props
  return (
    <Box pt={1} pl={2} pr={2}>
      <form onSubmit={handleSubmit}>
        <Field
          name="activeName"
          label="活动名称"
          fullWidth
          component={RenderTextField}
          type="text"
          helperText="请不要多于40字!"
        />
        <Field
          name="activeImg"
          label="活动图片"
          fullWidth
          component={RenderTextField}
          type="text"
        />
        <Grid container alignItems="center" spacing={1} style={{ marginBottom: 5 }}>
          <Grid item xs={5}>
            <Field
              name="startTime"
              label="开始时间"
              dateValue={startTime}
              changeVal={val => setStartTime(val)}
              component={RenderDatePicker}
            />
          </Grid>
          <Grid item xs={1}>
            到
          </Grid>
          <Grid item xs={6}>
            <Field
              name="endTime"
              label="结束时间"
              dateValue={endTime}
              changeVal={val => setEndTime(val)}
              component={RenderDatePicker}
            />
          </Grid>
        </Grid>

        <Grid container spacing={1}>
          <Grid item xs={4}>
            <Field name="province" label="省" component={RenderSelect} child={[1, 2, 3]} />
          </Grid>
          <Grid item xs={4}>
            <Field name="city" label="市" component={RenderSelect} child={[11, 23, 36]} />
          </Grid>
          <Grid item xs={4}>
            <Field name="area" label="区" component={RenderSelect} child={[12, 24, 35]} />
          </Grid>
        </Grid>
        <Field
          name="linkUrl"
          label="分享链接"
          fullWidth
          type="text"
          disabled
          helperText={(
            <Link href="javascript:;" onClick={() => setOpenModal(true)}>
              从功能库选择
            </Link>
)}
          component={RenderTextField}
        />
        <Field
          name="lqrs"
          label="领取人数"
          fullWidth
          component={RenderTextField}
          type="text"
          helperText="必填，大于0的数字。"
        />
        <Field
          name="lqcs"
          label="领取次数"
          fullWidth
          component={RenderTextField}
          type="text"
          helperText="必填，大于0的数字。用户可以领取红包的次数,超过后无法领取。"
        />
        <Field
          name="mtlqcs"
          label="每天领取次数"
          fullWidth
          component={RenderTextField}
          type="text"
          helperText="必填，可以为0，表示无限制。红包每天可以被领取的次数，超过后当日无法领取。"
        />
        <Field
          name="hb"
          label="红包类型"
          radioValue={radio}
          radioChange={(e, val) => setRadio(val)}
          child={[{ val: '1', name: '手气红包' }, { val: '2', name: '普通红包' }]}
          component={RenderRadioGroup}
        />

        {radio === '1' ? (
          <React.Fragment>
            <Field
              name="lqcsss"
              label="活动资金"
              fullWidth
              component={RenderTextField}
              type="text"
              helperText="被领取的红包总额度超过活动资金后将无法领取红包"
            />

            <Field
              name="lqcsssf"
              label="面额上限"
              fullWidth
              component={RenderTextField}
              type="text"
              helperText="单个红包可被抽取的最大值"
            />

            <Field
              name="lqcsssf11"
              label="面额下限"
              fullWidth
              component={RenderTextField}
              type="text"
              helperText="单个红包可被抽取的最小值"
            />
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Field
              name="lqcsfgss"
              label="发放个数"
              fullWidth
              component={RenderTextField}
              type="text"
              helperText="可被领取的红包个数，超过后将无法领取红包"
            />

            <Field
              name="lqcsssf"
              label="红包面额"
              fullWidth
              component={RenderTextField}
              type="text"
              helperText="请填写整数或者不大于2位的小数"
            />
          </React.Fragment>
        )}
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <Button
              type="submit"
              variant="contained"
              fullWidth
              color="primary"
              style={{ fontSize: 16, color: '#fff', margin: '10px 0 20px 0 ' }}
            >
              发布
            </Button>
          </Grid>
        </Grid>
      </form>

      <Dialog onClose={() => setOpenModal(false)} open={openModal}>
        <DialogTitle>
          <Typography variant="subtitle1" gutterBottom>
            点击模块添加为分享链接
          </Typography>
        </DialogTitle>
      </Dialog>
    </Box>
  )
}

export default reduxForm({
  form: 'publishForm',
})(PublishForm)
