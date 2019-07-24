import React from 'react'
import NavBar from '@/components/NavBar'
import Button from '@material-ui/core/Button'
import {
  CouponItem, CouponTop, CouponRow, CouponContent, CouponBottom,
} from './styled'
import { couponData } from '@/config/list'

export default () => {
  const mapList = () => couponData.map((item, index) => (
    <CouponItem key={index}>
      <div style={{ marginTop: 15, marginLeft: 5 }}>优惠券名称： 打死</div>
      <CouponTop>
        <img src={item.img} alt="" />
        <CouponContent>
          <CouponRow>
            <div>用户昵称: {item.id}</div>
            <div>id: {item.name}</div>
          </CouponRow>
          <CouponRow>
            <div>用户手机: {item.type}</div>
            <div>领取数量: {item.category}</div>
          </CouponRow>
          <div>领取时间: {item.system}</div>
        </CouponContent>
      </CouponTop>
      <CouponBottom>
        <CouponRow>
          <div>是否已使用: {item.total}</div>
        </CouponRow>
        <CouponRow>
          <div>
              操作:
            <Button size="small" variant="contained" color="primary" style={{ color: '#fff', marginLeft: 20, width: 100 }}>
                核销
            </Button>
          </div>
        </CouponRow>
      </CouponBottom>
    </CouponItem>
  ))
  return (
    <div>
      <NavBar title="优惠券列表" goBack />
      {mapList()}
    </div>
  )
}
