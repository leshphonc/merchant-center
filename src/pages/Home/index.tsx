import React from 'react'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import ReactEcharts from 'echarts-for-react'
import UserCard from '../../components/UserCard'
import GridCard from '../../components/GridCard'
import { ManagementGrid, PromotionGrid, AllianceGrid } from '../../env/constant'
import styles from './index.module.scss'

const useStyles = makeStyles(() => createStyles({
  paper: {
    marginTop: 10,
  },
}))
export default () => {
  const getOption = () => ({
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        crossStyle: {
          color: '#999',
        },
      },
    },
    toolbox: {
      top: 20,
    },
    legend: {
      data: ['蒸发量', '降水量', '平均温度'],
    },
    xAxis: [
      {
        type: 'category',
        data: [
          '1月',
          '2月',
          '3月',
          '4月',
          '5月',
          '6月',
          '7月',
          '8月',
          '9月',
          '10月',
          '11月',
          '12月',
        ],
        axisPointer: {
          type: 'shadow',
        },
      },
    ],
    yAxis: [
      {
        type: 'value',
        name: '水量',
        min: 0,
        max: 250,
        interval: 50,
        axisLabel: {
          formatter: '{value} ml',
        },
      },
      {
        type: 'value',
        name: '温度',
        min: 0,
        max: 25,
        interval: 5,
        axisLabel: {
          formatter: '{value} °C',
        },
      },
    ],
    series: [
      {
        name: '蒸发量',
        type: 'bar',
        data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3],
      },
      {
        name: '降水量',
        type: 'bar',
        data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3],
      },
      {
        name: '平均温度',
        type: 'line',
        yAxisIndex: 1,
        data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2],
      },
    ],
  })

  const classes = useStyles()
  return (
    <div className="bottom60">
      <img
        src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1562754524381&di=98cdda464f35e7cc90edfa629389f23f&imgtype=0&src=http%3A%2F%2Fpic.rmb.bdstatic.com%2Fcd2476300bbad8dfcfff1d277b79401a.jpeg"
        alt=""
        className={styles.header_img}
      />
      <UserCard />
      <Paper className={classes.paper}>
        <GridCard data={ManagementGrid} style={{ padding: '30px 0' }} />
        <Grid container wrap="nowrap">
          <Grid item xs={3}>
            <div className={styles.desc}>
              <div>收入总数</div>
              <div>116688</div>
            </div>
          </Grid>
          <Grid item xs={3}>
            <div className={styles.desc}>
              <div>收入总数</div>
              <div>116688</div>
            </div>
          </Grid>
          <Grid item xs={3}>
            <div className={styles.desc}>
              <div>收入总数</div>
              <div>116688</div>
            </div>
          </Grid>
          <Grid item xs={3}>
            <div className={styles.desc}>
              <div>收入总数</div>
              <div>116688</div>
            </div>
          </Grid>
          <Grid item xs={3}>
            <div className={styles.desc} style={{ border: 'none' }}>
              <div>收入总数</div>
              <div>116688</div>
            </div>
          </Grid>
        </Grid>
        {/* <ReactEcharts option={getOption()} style={{ padding: 10 }} /> */}
      </Paper>
      <Paper className={classes.paper}>
        <GridCard data={PromotionGrid} style={{ padding: '0 0 30px 0' }} />
      </Paper>
      <Paper className={classes.paper}>
        <GridCard data={AllianceGrid} style={{ padding: '0 0 30px 0' }} />
      </Paper>
    </div>
  )
}
