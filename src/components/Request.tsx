import { Link } from 'react-router-dom';
import styled from 'styled-components' 
import { ReactComponent as Svg_money } from '../svgs/money.svg';
import { ReactComponent as Svg_menu } from '../svgs/menu.svg';
import {IListRequest} from '../types'

function Request({request}:{request:IListRequest}) {
  const iconStyle = {width:22,height:22}
  return (
    <Container>
      <div style={{display:"flex",alignItems:'center'}}>
        <UserImg src='https://lh3.googleusercontent.com/a-/AOh14GhBIpwktw4iDwX7_dafbrn64O2wNRJbx1hivycj5A=s96-c'/>
        <StatusText>CWIN77</StatusText>
        <span style={{width:3,height:3,backgroundColor:'rgba(218, 228, 242, 0.7)',margin:3,borderRadius:"100px"}} />
        <StatusText>3시간전</StatusText>
        <Tag>16 : 9 비율</Tag>
        <Tag>16 : 9 비율</Tag>
      </div>
      <Link to={`/request/${request.id}`} onClick={()=>{sessionStorage.setItem(`request/${request.id}`,JSON.stringify(request))}}>
        <Title>{request.title}</Title>
        {
          request.explane.split('^').map((text,key)=>
            key < 2 && <ExplaneText key={key}>{text}</ExplaneText>
          )
        }
      </Link>
      <div style={{display:'flex',alignItems:'center',marginTop:22,marginBottom:2,justifyContent:"space-between"}}>
        <PaymentBtn>
          <Svg_money fill="#1A1A1A" {...iconStyle} style={{padding:2}} />
          <Payment>{request.pay.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "원~"}</Payment>
        </PaymentBtn>
        <Svg_menu fill="#e4e7ea" {...iconStyle} style={{padding:8}} / >
      </div>
    </Container>
  )
}

const Tag = styled.div`
  margin-left:11px;
  background-color: #373b40;
  font-size: 11px;
  padding:5.5px 12px;
  border-radius:8px;
  margin-bottom: 2px;
  font-weight: bold;
`
const PaymentBtn = styled.button`
  display:flex;
  align-items: center;
  padding:6px 10px;
  background-color: #e4e7ea;
  border-radius: 12px;
`
const Container = styled.div`
  display:flex;
  flex-direction: column;
  justify-content: space-between;
  width:calc(100vw - 2rem);
  margin: 1rem;
  border-radius: 8px;
  @media only screen and (min-width:780px) {
    margin-right:0rem;
    width: calc(((100vw - 16px) / 2) - 1rem);
  }
  @media only screen and (min-width:1200px) {
    margin-right:0rem;
    width: calc(((100vw - 16px) / 3) - 1rem);
  }
  @media only screen and (min-width:1650px) {
    margin-right:0rem;
    width: calc(((100vw - 16px) / 4) - 1rem);
  }
`
const UserImg = styled.img`
  width:14px;
  height:14px;
  border-radius: 100px;
`
const Title = styled.h1`
  font-size: 20px;
  width:92%;
  margin-top:5px;
  margin-bottom: 4px;
`
const StatusText = styled.h4`
  font-size: 12px;
  margin: 0px 6px;
  color: rgba(218, 228, 242, 0.7);
`
const ExplaneText = styled.h2`
  font-size: 14px;
  margin-top: 2px;
  width:92%;
  color: rgba(218, 228, 242, 0.7);
`
const Payment = styled.h1`
  font-size: 15px;
  margin-left: 2px;
  color:#1A1A1A;
`

export default Request
