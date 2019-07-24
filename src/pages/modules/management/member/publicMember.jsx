import React from 'react'
import NavBar from '@/components/NavBar'
import Divider from '@material-ui/core/Divider'
import {
  AppletsItem, AppletsAvatar, AppletsContent, AppletsContentColunm,AppletsDesc
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
      <AppletsDesc>
        <div>关注时间：2019-07-22 14：22：15</div>
        <div>最后登录：2019-07-22 14：22：15</div>
        <div>获取渠道：扫描商家产品二维码</div>
      </AppletsDesc>
      <Divider />
    </React.Fragment>
  ))
  return (
    <React.Fragment>
      <NavBar title="公众号粉丝" goBack />
      {mapItem()}
    </React.Fragment>
  )
}
