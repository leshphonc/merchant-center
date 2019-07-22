import styled from 'styled-components'

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
      height: 100%;
      border-radius: 20px;
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
export const Title = styled.div`
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

export const Name = 1
