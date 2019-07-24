import React from 'react'
import NavBar from '@/components/NavBar'
import Divider from '@material-ui/core/Divider'
import {
  AppletsItem, AppletsAvatar, AppletsContent, AppletsContentColunm,
} from './styled'
import { AppletsData } from '@/config/list'

export default () => {
  const mapItem = () => AppletsData.map((item, index) => (
    <React.Fragment>
      <AppletsItem key={index}>
        <AppletsAvatar>
          <img src={item.img} alt="" />
        </AppletsAvatar>
        <AppletsContent>
          <AppletsContentColunm className="first">
            <div>编号：{item.no}</div>
            <div>电话号码：{item.tel}</div>
            <div>性别：{item.sex}</div>
          </AppletsContentColunm>
          <AppletsContentColunm>
            <div>昵称：{item.nickName}</div>
            <div>注册时间：{item.createTime}</div>
          </AppletsContentColunm>
        </AppletsContent>
      </AppletsItem>
      <Divider />
    </React.Fragment>
  ))
  return (
    <React.Fragment>
      <NavBar title="小程序粉丝" goBack />
      {mapItem()}
    </React.Fragment>
  )
}
