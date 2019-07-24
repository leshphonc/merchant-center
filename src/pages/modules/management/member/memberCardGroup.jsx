import React from 'react'
import NavBar from '@/components/NavBar'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'
import { MemberCardItem, MemberCardColumn } from './styled'
import { MemberCardData } from '@/config/list'

export default () => {
  const mapItem = () => MemberCardData.map((item, index) => (
    <MemberCardItem key={index}>
      <MemberCardColumn>
        <div>分组ID： {item.id}</div>
        <div>分组注释： {item.comment}</div>
        <div>分组折扣： {item.discount}</div>
        <Link to="/management/member/createMemberCardGroup" style={{ textDecoration: 'none' }}>
          <Button variant="contained" color="primary" fullWidth>
              编辑
          </Button>
        </Link>
      </MemberCardColumn>
      <MemberCardColumn>
        <div>分组名称： {item.name}</div>
        <div style={{ visibility: 'hidden' }}>占位</div>
        <div>分组用户数量： {item.usercount}</div>
        <Link to="/management/member/userGroup" style={{ textDecoration: 'none' }}>
          <Button variant="contained" color="primary">
              查看分组用户
          </Button>
        </Link>
      </MemberCardColumn>
    </MemberCardItem>
  ))
  return (
    <div>
      <NavBar
        title="会员卡分组"
        goBack
        rightBtn={{
          label: '新增分组',
          url: '/management/member/createMemberCardGroup',
        }}
      />
      {mapItem()}
    </div>
  )
}
