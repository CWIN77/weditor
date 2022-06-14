import { Link } from 'react-router-dom';
import styled from 'styled-components' 
import { ReactComponent as Svg_money } from '../svgs/money.svg';
import { ReactComponent as Svg_play } from '../svgs/play.svg';
import { ReactComponent as Svg_tag } from '../svgs/tag.svg';
import { ReactComponent as Svg_ratio } from '../svgs/ratio.svg';
import { ReactComponent as Svg_subtitle } from '../svgs/subtitle.svg';
import { ReactComponent as Svg_clock } from '../svgs/clock.svg';
import { ReactComponent as Svg_menu } from '../svgs/menu.svg';
import {IListRequest} from '../types'

function Request({request}:{request:IListRequest}) {
  const iconStyle = {fill:"rgba(235,238,241,0.8)",width:14,height:14}
  return (
    <Container>
      <Guide>
        <div>
          <UserImg src='https://lh3.googleusercontent.com/a-/AOh14GhBIpwktw4iDwX7_dafbrn64O2wNRJbx1hivycj5A=s96-c'/>
          <h3 style={{fontSize:13,color:"rgba(235,238,241,0.7)"}}>CWIN77</h3>
          <span style={{width:3,height:3,backgroundColor:'rgba(218, 228, 242, 0.7)',margin:"0px 8px",borderRadius:"10px"}} />
          <h3 style={{fontSize:13,color:"rgba(235,238,241,0.7)"}}>3시간전</h3>
        </div>
        <div style={{justifyContent:'center'}}>
          <PlayBtn href='https://youtu.be/3Wex4qJJN-s' target='_blank'>
            <Svg_play width={22} height={22} stroke="#e0e0e0" />
          </PlayBtn>
        </div>
        <div style={{justifyContent: "space-between"}}>
          <div>
            <Svg_clock {...iconStyle} />
            <h2>{request.setting.length}</h2>
          </div>
          <div>
            <Svg_tag {...iconStyle} />
            {
              request.setting.tag.map((tag,key)=>
                <h2 key={key}>{tag}</h2>
              )
            }
          </div>
          <div>
            <Svg_subtitle {...iconStyle} />
            <h2>
              {
                request.setting.subtitle === 0
                ? "자막 불필요"
                : request.setting.subtitle === 1
                ? "자막 필수"
                : request.setting.subtitle === 1
                ? "자막 무상관"
                : null
              }
            </h2>
          </div>
          <div>
            <Svg_ratio {...iconStyle} />
            <h2>{request.setting.ratio} 비율</h2>
          </div>
        </div>
      </Guide>
      <div style={{margin:4,marginTop:8}}>
        <h1 style={{fontSize:18}}>{request.title}</h1>
        <ExplaneWrapper to={`/request/${request.id}`} onClick={()=>{sessionStorage.setItem(`request/${request.id}`,JSON.stringify(request))}}>
          {
            request.explane.split('^').map((text,key) =>
              key < 2 && <Explane key={key}>{text}</Explane>
            )
          }
        </ExplaneWrapper>
        <div style={{display:'flex',alignItems:'center',marginTop:20,marginBottom:2,justifyContent:"space-between"}}>
          <div style={{display:'flex',alignItems:'center'}}>
            <Svg_money width={24} height={24} fill="#e0e0e0" />
            <Payment><>{request.pay.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원~</></Payment>
          </div>
          <Svg_menu width={22} height={22} fill="#e0e0e0" style={{padding:2}} / >
        </div>
      </div>
    </Container>
  )
}


const Container = styled.div`
  display:flex;
  flex-direction: column;
  justify-content: space-between;
  width:calc(100vw - 2rem - 16px);
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
const Guide = styled.div`
  width:calc(((100vw - 16px) / 1) - 2rem - 1rem);
  height:calc((((100vw - 16px) / 1) - 1.8rem - 1rem) / 16 * 9 );
  background-color: #212121;
  box-shadow: 0px 0px 0px 0.75px rgba(235,238,241,0.15);
  border-radius: 8px;
  display:flex;
  flex-direction: column;
  justify-content: space-between;
  padding:0.9rem 1rem;
  margin-bottom: 2px;
  div{
    display:flex;
    align-items: center;
    h2{
        font-size: 12px;
        margin-left: 6px;
        color:rgba(235,238,241,0.7);
      }
  }
  @media only screen and (min-width:780px) {
    width: calc(((100vw - 16px) / 2) - 2rem - 1rem);
    height:calc((((100vw - 16px) / 2) - 1.8rem - 1rem) / 16 * 9 );
  }
  @media only screen and (min-width:1200px) {
    width: calc(((100vw - 16px) / 3) - 2rem - 1rem);
    height:calc((((100vw - 16px) / 3) - 1.8rem - 1rem) / 16 * 9 );
  }
  @media only screen and (min-width:1650px) {
    width: calc(((100vw - 16px) / 4) - 2rem - 1rem);
    height:calc((((100vw - 16px) / 4) - 1.8rem - 1rem) / 16 * 9 );
  }
`
const UserImg = styled.img`
  width:18px;
  height:18px;
  border-radius: 100px;
  margin-right: 7px;
`
const ExplaneWrapper = styled(Link)`
  display:flex;
  flex-direction: column;
  max-height : 41px;
  overflow: hidden;
  margin-top: 3px;
`
const Explane = styled.h2`
  font-size: 14px;
  color: rgba(218, 228, 242, 0.7);
  line-height: 20.5px;
  letter-spacing: 0.75px;
`
const Payment = styled.div`
  font-size: 18px;
  margin-left: 7px;
  font-weight: bold;
`
const PlayBtn = styled.a`
  display:flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  padding: 8px;
  margin: 2px;
`

export default Request
