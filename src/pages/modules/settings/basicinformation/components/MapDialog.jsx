import React from 'react'
import Dialog from '@material-ui/core/Dialog'
import DialogContent from '@material-ui/core/DialogContent'
import DialogActions from '@material-ui/core/DialogActions'
import Button from '@material-ui/core/Button'
import BMap from 'BMap'
import FormControl from '@material-ui/core/FormControl'
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import LocationOnIcon from '@material-ui/icons/LocationOn'
import SearchIcon from '@material-ui/icons/Search'
import IconButton from '@material-ui/core/IconButton'

export default class MapDialog extends React.Component {
  state = {
    map: null,
    lng: 0,
    lat: 0,
    area: '',
    hidePoint: false,
  }

  initMap = () => {
    if (this.state.map) return false
    setTimeout(() => {
      const map = new BMap.Map('container')
      this.setState({
        map,
      })
      map.centerAndZoom(new BMap.Point(116.3964, 39.9093), 14)
      map.enableScrollWheelZoom()

      const geolocation = new BMap.Geolocation()
      const geoc = new BMap.Geocoder()
      geolocation.getCurrentPosition(
        (r) => {
          if (geolocation.getStatus() === 0) {
            map.panTo(r.point)
            this.setState({
              lng: r.point.lng,
              lat: r.point.lat,
            })
            geoc.getLocation(r.point, (rs) => {
              const addComp = rs.addressComponents
              this.setState({
                area:
                  addComp.province
                  + addComp.city
                  + addComp.district
                  + addComp.street
                  + addComp.streetNumber,
              })
            })
          } else {
            alert(`failed ${geolocation.getStatus()}`)
          }
        },
        { enableHighAccuracy: true },
      )
      map.addEventListener('dragend', () => {
        const point = map.getCenter()
        this.setState({
          lng: point.lng,
          lat: point.lat,
        })
        geoc.getLocation(point, (rs) => {
          const addComp = rs.addressComponents
          this.setState({
            area:
              addComp.province
              + addComp.city
              + addComp.district
              + addComp.street
              + addComp.streetNumber,
          })
        })
      })
      return true
    }, 100)
  }

  closeMap = () => {
    this.setState({
      map: null,
    })
    this.props.onClose()
  }

  searchArea = () => {
    const { map, area } = this.state
    if (area !== '') {
      map.centerAndZoom(area, 14) // 用城市名设置地图中心点
    }
  }

  hidePoint = () => {
    this.setState({
      hidePoint: true,
    })
  }

  showPoint = () => {
    this.setState({
      hidePoint: false,
    })
  }

  render() {
    const { open, onClose, ...other } = this.props
    const {
      lng, lat, area, hidePoint,
    } = this.state
    open && this.initMap()
    return (
      <Dialog fullScreen disableBackdropClick disableEscapeKeyDown open={open} {...other}>
        <DialogContent dividers style={{ position: 'relative', height: '100%' }}>
          <div
            id="container"
            style={{
              width: '100%',
              height: '100%',
            }}
          />
          {!hidePoint ? (
            <LocationOnIcon
              style={{
                position: 'absolute',
                left: '50%',
                top: 'calc(50% - 15px)',
                transform: 'translate(-50%,-50%)',
                width: 30,
                height: 30,
                color: '#ffb000',
              }}
            />
          ) : null}
        </DialogContent>
        <FormControl
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Input
            placeholder="搜索地址"
            color="primary"
            style={{ width: '80%' }}
            value={area}
            onClick={this.hidePoint}
            onBlur={this.showPoint}
            onChange={e => this.setState({ area: e.target.value })}
          />
          <IconButton aria-label="Search" onClick={this.searchArea}>
            <SearchIcon />
          </IconButton>
        </FormControl>
        <DialogActions>
          <FormControl disabled style={{ flex: 1 }}>
            <InputLabel htmlFor="component-disabled">当前坐标</InputLabel>
            <Input id="component-disabled" value={lng} />
            <Input id="component-disabled" value={lat} />
          </FormControl>
          <Button color="primary">确定</Button>
          <Button color="primary" onClick={this.closeMap}>
            取消
          </Button>
        </DialogActions>
      </Dialog>
    )
  }
}
