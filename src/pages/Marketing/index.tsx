import React from 'react'
import List from '@/components/List'

class Marketing extends React.Component {
  state = {
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
          const arr: any = []
          Object.keys(data.result).forEach(item => arr.push(data.result[item]))
          this.setState({
            list: arr,
          })
        }
      })
  }

  render() {
    const { list } = this.state
    return (
      <div className="bottom60">
        <List list={list} />
      </div>
    )
  }
}

export default Marketing
