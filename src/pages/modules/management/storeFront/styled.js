import styled from 'styled-components'

// 店铺优惠列表
export const PreferentialItem = styled.div`
  background: #fff;
  margin: 5px 0;
  padding: 12px 20px;
`
export const PreferentialInLine = styled.div`
  & > div {
    display: inline-block;
    margin-right: 20px;
    margin-bottom: 8px;
    color: #777;
  }
  & > div:nth-child(1) {
    width: 40%;
  }
`

export const Box = styled.div`
  background: #fff;
  display: flex;
  padding: 10px;
  box-sizing: border-box;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  margin: 5px 0 5px 0;
  & > div:nth-child(1) {
    width: 110px;
    img {
      width: 100%;
      border-radius: 20px;
      vertical-align: middle;
    }
  }
  & > div:nth-child(2) {
    flex: 1;
    padding-left: 20px;
    box-sizing: border-box;
    font-weight: 600;
    font-size: 16px;
  }
`
export const Title1 = styled.div`
  position: relative;
`

export const Status = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  color: #ffb000;
  font-size: 13px;
  font-weight: 400;
`

export const Category = styled.div`
  background: #ffb000;
  border-radius: 4px;
  display: inline-block;
  margin-top: 8px;
  margin-right: 8px;
  font-size: 14px;
  padding: 3px 5px;
  font-weight: 400;
  line-height: 19px;
`

export const Toolbar = styled.div`
  display: inline-block;
  font-size: 14px;
  margin-right: 10px;
  margin-top: 20px;
  color: #606060;

  & > svg {
    vertical-align: middle;
  }
  & > span {
    display: inline-block;
    vertical-align: text-top;
  }
`
export const Title = styled.div`
  background: #fff;
  text-align: center;
  margin: 5px 0;
  line-height: 30px;
`
export const CategoryBox = styled.div`
  background: #fff;
  margin-top: 5px;
  padding: 20px;
  color: #727272;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
`

export const CategoryTitle = styled.div`
  & > span {
    display: inline-block;
    margin-right: 10px;
    margin-bottom: 5px;
    font-weight: 600;
    font-size: 15px;
  }
`
export const Day = styled.div`
  & > span {
    display: inline-block;
    margin-right: 10px;
    margin-top: 5px;
  }
`

export const ToolBar = styled.div`
  margin-top: 10px;
  & > button {
    margin-right: 10px;
  }
`

export const CommodityItem = styled.div`
  background: #fff;
  display: flex;
  padding: 10px;
  margin-top: 5px;
`

export const CommodityImg = styled.div`
  width: 90px;
  &> img {
    width: 90px;
    border-radius: 10px;
    vertical-align: middle;
  }
`
export const CommodityContent = styled.div`
  flex: 1;
  margin-left: 10px;
`

export const CommodityContentTitle = styled.div`
  width: 280px;
  font-size: 14px;
  color: #777;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`

export const CommodityContentInline = styled.div`
  color: #fb6a41;
  margin-top: 3px;
  &> .bigger {
    font-size: 16px;
    font-weight: 600;
  }
`

export const CommodityContentToolbar = styled.div`
  display: flex;
`
