import React from 'react'
import Grid from '@material-ui/core/Grid'
import IconButton from '@material-ui/core/IconButton'
import styles from './index.module.scss'

interface GridData {
  data: {
    title?: string
    list: Array<{ name: string; url: string; enable: any; disable: any }>
  }
  style?: object
}

export default (props: GridData) => {
  const mapGrid = () => props.data.list.map(item => (
    <Grid item xs={3} key={item.url}>
      <div className={styles.icon}>
        <IconButton>
          <img src={item.enable} alt="图片丢失" />
        </IconButton>

        <div>{item.name}</div>
      </div>
    </Grid>
  ))
  const { data, style } = props
  const { title } = data
  return (
    <React.Fragment>
      {title ? <div className={styles.title}>{title}</div> : ''}
      <Grid container style={style}>{mapGrid()}</Grid>
    </React.Fragment>
  )
}
