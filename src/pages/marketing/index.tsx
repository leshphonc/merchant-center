import React from 'react'
import Fade from '@material-ui/core/Fade'
import List from '@/components/List'
import CircularProgress from '@material-ui/core/CircularProgress'

class Marketing extends React.Component {
  state = {
    loading: false,
    list: [],
  }

  componentDidMount() {
    const body = new FormData()
    const ticket: any = localStorage.getItem('ticket')
    body.append('ticket', ticket)
    fetch('/appapi.php?c=Merchantapp&a=menu', {
      method: 'POST',
      body,
    })
      .then(response => response.json())
      .then((data) => {
        if (!data.errorCode) {
          const arr: object[] = []
          Object.keys(data.result[32].menu_list[16].menu_list).forEach(item => arr.push(data.result[32].menu_list[16].menu_list[item]))
          setTimeout(() => {
            this.setState({
              list: arr,
              loading: true,
            })
          }, 400)
        }
      })
  }

  render() {
    const { list, loading } = this.state
    return (
      <div className="bottom60">
        <Fade in={loading}>
          <List list={list} />
        </Fade>
        <Fade in={!loading} unmountOnExit>
          <CircularProgress
            style={{
              position: 'relative',
              top: 100,
              left: '50%',
              marginLeft: '-20px',
            }}
          />
        </Fade>
      </div>
    )
  }
}

export default Marketing
