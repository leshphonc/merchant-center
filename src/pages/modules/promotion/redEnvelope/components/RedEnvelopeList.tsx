import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles({
  card: {
    margin: 5,
  },
  media: {
    height: 140,
  },
  box: {
    display: 'flex',
  },
  footer: {
    justifyContent: 'space-between',
    padding: '8px 14px',
    borderTop: '1px solid #ccc',
  },
})

export default (props: any) => {
  const classes = useStyles()

  const mapList = () => props.list.map((item: any) => (
    <Card className={classes.card} key={item.id}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={require('@/assets/image/pk.jpeg')}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5">
            {item.name}
          </Typography>
          <Grid container>
            <Grid item xs={6}>
              <Typography variant="subtitle2" color="textSecondary" component="div">
                  红包总金额： {item.prizeTotal}
              </Typography>
              <Typography variant="subtitle2" color="textSecondary" component="div">
                  最大金额： {item.maxNum}
              </Typography>
              <Typography variant="subtitle2" color="textSecondary" component="div">
                  可领人数： {item.canTake}
              </Typography>
              <Typography variant="subtitle2" color="textSecondary" component="div">
                  红包状态： {item.status}
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="subtitle2" color="textSecondary" component="div">
                  已领金额： {item.prize}
              </Typography>
              <Typography variant="subtitle2" color="textSecondary" component="div">
                  最小金额： {item.minNum}
              </Typography>
              <Typography variant="subtitle2" color="textSecondary" component="div">
                  已领人数： {item.taked}
              </Typography>
              <Typography variant="subtitle2" color="textSecondary" component="div">
                  浏览次数： {item.Browse}
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </CardActionArea>
      <CardActions classes={{ root: classes.footer }}>
        <div>
          <Typography variant="body2">
              开始时间：{item.startTime}
          </Typography>
          <Typography variant="body2">
              结束时间：{item.endTime}
          </Typography>
        </div>
        <Button size="small" color="primary">
            领取记录
        </Button>
      </CardActions>
    </Card>
  ))
  return <React.Fragment>{mapList()}</React.Fragment>
}
