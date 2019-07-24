import React from 'react'
import NavBar from '@/components/NavBar'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'
import {
  CouponItem, CouponTop, CouponRow, CouponContent, CouponBottom,
} from './styled'
import { couponData } from '@/config/list'

export default () => {
  const mapList = () => couponData.map((item, index) => (
    <CouponItem key={index}>
      <CouponTop>
        <img src={item.img} alt="" />
        <CouponContent>
          <CouponRow>
            <div>id: {item.id}</div>
            <div>名称: {item.name}</div>
          </CouponRow>
          <CouponRow>
            <div>使用类别: {item.type}</div>
            <div>使用分类: {item.category}</div>
          </CouponRow>

          <div>使用系统: {item.system}</div>
        </CouponContent>
      </CouponTop>
      <CouponBottom>
        <CouponRow>
          <div>总数: {item.total}</div>
          <div>只允许新用户: {item.newUser}</div>
        </CouponRow>
        <CouponRow>
          <div>
              起始时间: {item.startTime} 到 {item.entTime}
          </div>
        </CouponRow>
        <CouponRow>
          <div>满减条件: {item.condition}</div>
        </CouponRow>
        <CouponRow style={{ marginBottom: 5 }}>
          <Link to="/management/member/couponCheck" style={{ width: '49%', textDecoration: 'none' }}>
            <Button variant="contained" color="primary" style={{ color: '#fff', width: '100%' }}>
                已领取{item.used}张
            </Button>
          </Link>
          <Button variant="contained" color="primary" style={{ color: '#fff', width: '49%' }}>
            {item.Expired ? '启用' : '过期'}
          </Button>
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
