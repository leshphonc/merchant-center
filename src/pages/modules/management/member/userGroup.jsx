import React from 'react'
import NavBar from '@/components/NavBar'
import { Link } from 'react-router-dom'
import { UserItem, UserAvatar, UserContent } from './styled'
import { userData } from '@/config/list'

export default () => {
  const mapItem = () => userData.map((item, index) => (
    <UserItem key={index}>
      <UserAvatar>
        <img src={item.img} alt="" />
      </UserAvatar>
      <UserContent>
        <div>会员ID：{item.id}</div>
        <div>会员昵称：{item.nickName}</div>
        <Link to="/management/member/memberCardManagment">查看详情</Link>
      </UserContent>
    </UserItem>
  ))
  return (
    <div>
      <NavBar title="会员卡分组" goBack />
      {mapItem()}
    </div>
  )
}
