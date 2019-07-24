import React from 'react'
import { Route } from 'react-router-dom'
import MemberManagement from './memberManagement'
import AppletsMember from './appletsMember'
import PublicMember from './publicMember'
import MemberCardGroup from './memberCardGroup'
import CreateMemberCardGroup from './createMemberCardGroup'
import UserGroup from './userGroup'
import MemberCardManagment from './memberCardManagment'
import CouponList from './couponList'
import CouponCheck from './couponCheck'

export default () => (
  <React.Fragment>
    <Route path="/management/member" exact component={MemberManagement} />
    <Route path="/management/member/appletsMember" exact component={AppletsMember} />
    <Route path="/management/member/publicMember" exact component={PublicMember} />
    <Route path="/management/member/memberCardGroup" exact component={MemberCardGroup} />
    <Route path="/management/member/createMemberCardGroup" exact component={CreateMemberCardGroup} />
    <Route path="/management/member/userGroup" exact component={UserGroup} />
    <Route path="/management/member/memberCardManagment" exact component={MemberCardManagment} />
    <Route path="/management/member/couponList" exact component={CouponList} />
    <Route path="/management/member/couponCheck" exact component={CouponCheck} />
  </React.Fragment>
)
