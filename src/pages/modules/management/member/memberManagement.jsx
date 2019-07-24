import React from 'react'
import NavBar from '@/components/NavBar'
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import { GroupContainer, GroupItem, GroupTitle } from './styled'

export default () => (
  <GroupContainer>
    <NavBar title="会员管理" goBack />
    <Button style={{ padding: 0, width: '100%', marginBottom: 10 }}>
      <Link to="/management/member/appletsMember" style={{ textDecoration: 'none', width: '100%' }}>
        <GroupItem style={{ background: '#bbdb9c' }}>
          <GroupTitle>小程序粉丝</GroupTitle>
          <ChevronRightIcon style={{ color: '#fff' }} />
        </GroupItem>
      </Link>
    </Button>

    <Button style={{ padding: 0, width: '100%', marginBottom: 10 }}>
      <Link to="/management/member/publicMember" style={{ textDecoration: 'none', width: '100%' }}>
        <GroupItem style={{ background: '#7cd6de' }}>
          <GroupTitle>公众号粉丝</GroupTitle>
          <ChevronRightIcon style={{ color: '#fff' }} />
        </GroupItem>
      </Link>
    </Button>
    <Button style={{ padding: 0, width: '100%', marginBottom: 10 }}>
      <Link to="/management/member/memberCardGroup" style={{ textDecoration: 'none', width: '100%' }}>
        <GroupItem style={{ background: '#ffae6c' }}>
          <GroupTitle>会员卡分组</GroupTitle>
          <ChevronRightIcon style={{ color: '#fff' }} />
        </GroupItem>
      </Link>
    </Button>
    <Button style={{ padding: 0, width: '100%' }}>
      <Link to="/management/member/couponList" style={{ textDecoration: 'none', width: '100%' }}>
        <GroupItem style={{ background: '#ff8283' }}>
          <GroupTitle>优惠券列表</GroupTitle>
          <ChevronRightIcon style={{ color: '#fff' }} />
        </GroupItem>
      </Link>
    </Button>
  </GroupContainer>
)
