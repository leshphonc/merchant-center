import React from 'react'
import { Link } from 'react-router-dom'
import Grid from '@material-ui/core/Grid'
import IconButton from '@material-ui/core/IconButton'
import styles from './index.module.scss'

interface GridData {
  data: {
    title?: string
    list: Array<{ name: string; url: string; enable: any; disable: any }>
  }
  style?: object
  imgSize?: number
}

export default (props: GridData) => {
  const mapGrid = () => props.data.list.map(item => (
    <Grid item xs={3} key={item.url}>
      <Link className={styles.icon} to={item.url}>
        <IconButton>
          <img src={item.enable} alt="图片丢失" style={{ width: props.imgSize }} />
        </IconButton>
        <div>{item.name}</div>
      </Link>
    </Grid>
  ))
  const { data, style } = props
  const { title } = data
  return (
    <React.Fragment>
      {title ? <div className={styles.title}>{title}</div> : ''}
      <Grid container style={style}>
        {mapGrid()}
      </Grid>
    </React.Fragment>
  )
}
