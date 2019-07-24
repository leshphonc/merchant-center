import styled from 'styled-components'

// 会员组
export const GroupContainer = styled.div`
  background: #fff;
  padding: 15px 5%;
`

export const GroupItem = styled.div`
  padding: 0 20px;
  justify-content: space-between;
  align-items: center;
  width: 100%
  height: 80px;
  border-radius: 6px;
  display: flex;
`

export const GroupTitle = styled.div`
  color: #fff;
  font-size: 16px;
`

// 小程序会员
export const AppletsItem = styled.div`
  background: #fff;
  padding: 10px;
  margin-top: 5px;
  display: flex;
`

export const AppletsAvatar = styled.div`
  & > img {
    width: 60px;
    vertical-align: middle;
  }
`

export const AppletsContent = styled.div`
  flex: 1;
  display: flex;
  margin-left: 20px;
  font-size: 12px;
`

export const AppletsContentColunm = styled.div`
  flex: 3;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  &.first {
    flex: 2;
  }
`

export const AppletsDesc = styled.div`
  background: #fff;
  font-size: 12px;
  padding: 10px;
`

// 会员卡分组
export const MemberCardItem = styled.div`
  background: #fff;
  display: flex;
  padding: 20px;
  justify-content: space-around;
  font-size: 13px;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  margin-top: 2px;
  margin-bottom: 5px;
`

export const MemberCardColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  & > div {
    margin-bottom: 5px;
  }
  & button {
    color: #fff;
  }
`

// 用户列表
export const UserItem = styled.div`
  background: #fff;
  padding: 10px;
  margin-bottom: 5px;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  display: flex;
`

export const UserAvatar = styled.div`
  & > img {
    width: 80px;
    vertical-align: middle;
  }
`
export const UserContent = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
  margin-left: 10px;
  display: flex;
  flex-direction: column;
`

// 优惠券
export const CouponItem = styled.div`
  background: #fff;
  margin-bottom: 4px;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;

`
export const CouponTop = styled.div`
  display: flex;
  padding: 10px;
  & > img {
    width: 70px;
    vertical-align: middle;
  }
`

export const CouponContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 10px;
  padding-right: 20px;
`
export const CouponRow = styled.div`
  display: flex;
  justify-content: space-between;
`

export const CouponBottom = styled.div`
  border-top: 1px solid #ccc;
  padding: 5px 0;
  &>div {
    padding: 0 10px;
    margin: 2px 0;
  }
`
