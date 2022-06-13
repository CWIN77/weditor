import { useState,useEffect } from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components' 
import { ReactComponent as Svg_video } from '../svgs/video.svg';
import { ReactComponent as Svg_box } from '../svgs/box.svg';
import { ReactComponent as Svg_medal } from '../svgs/medal.svg';
import { ReactComponent as Svg_video_bold } from '../svgs/video_bold.svg';
import { ReactComponent as Svg_box_bold } from '../svgs/box_bold.svg';
import { ReactComponent as Svg_medal_bold } from '../svgs/medal_bold.svg';
import { ReactComponent as Svg_profile } from '../svgs/profile.svg';
import { ReactComponent as Svg_more } from '../svgs/more.svg';
import { ReactComponent as Svg_thumbnail } from '../svgs/thumbnail.svg';
import { ReactComponent as Svg_thumbnail_bold } from '../svgs/thumbnail_bold.svg';

import {loginGoogle,getCurrentUser, logOut} from '../firebase/auth'
import { IUserData } from '../types';

function Navbar() {
  const [page,setPage] = useState(window.location.pathname)
  const [isOver,setIsOver] = useState(false)
  const [user,setUser] = useState<IUserData|null>(null)
  const iconStyle = {width:16,height:16,fill:"#e4e7ea",style:{marginRight:6}}

  const navData = [
    {
      page:"/",
      text:"편집각",
      light:(<Svg_video {...iconStyle} />),
      bold:(<Svg_video_bold {...iconStyle} />)
    },
    {
      page:"/keep",
      text:"찜목록",
      light:(<Svg_box {...iconStyle} />),
      bold:(<Svg_box_bold {...iconStyle} />)
    },
    {
      page:"/result",
      text:"내성과",
      light:(<Svg_medal {...iconStyle} />),
      bold:(<Svg_medal_bold {...iconStyle} />)
    },
    {
      page:"/thumbnail",
      text:"썸네일",
      light:(<Svg_thumbnail {...iconStyle} />),
      bold:(<Svg_thumbnail_bold {...iconStyle} />)
    }
  ]

  useEffect(()=>{
    window.addEventListener('scroll',()=>{setIsOver(window.scrollY > 89.75)})
    getCurrentUser(setUser)
  },[])

  return (
    <>
      <Top>
        <Title>Weditor</Title>
        <div style={{display:'flex',alignItems:'center'}}>
        <div onClick={()=>{window.location.reload()}} style={{padding:8}}>Refresh</div>
          {
            user
            ? <Profile onClick={()=>{logOut()}} src={String(user?.img)}/>
            : <Svg_profile onClick={()=>{loginGoogle()}} width={30} height={30} style={{margin:2,padding:4}}/>
          }
          <Svg_more width={20} height={20} fill="#e4e7ea" style={{padding:6,display:'flex'}} />
        </div>
      </Top>
      <Nav isOver={`${isOver}`}>
        {
          navData.map((data)=>{
            return (
              <NavBtn onClick={()=>{setPage(data.page)}} to={data.page} page={`${page===data.page}`}>
                {
                  page === data.page
                  ? data.bold
                  : data.light
                }
                <h2>{data.text}</h2>
              </NavBtn>
            )
          })
        }
      </Nav>
    </>
  )
}

const Top = styled.div`
  width:calc(100% - 2rem);
  padding: 1rem;
  display:flex;
  align-items: center;
  justify-content: space-between;
`
const Title = styled.h1`
  font-size: 20px;
  padding: 4px;
`
const Profile = styled.img`
  width:30px;
  height:30px;
  margin:6px;
  border-radius: 100px;
  background-color:#e4e7ea;
`
const Nav = styled.div<{isOver:string}>`
  background-color:#1A1A1A; 
  padding: 1rem;
  padding-bottom: 3px;
  display:flex;
  overflow-x: auto;
  width:calc(100% - 2rem);
  align-items: center;
  margin-bottom: 1rem;
  position: ${(props)=>props.isOver === "true" ? "fixed" : "static"};
  top:0px;
`
const NavBtn = styled(Link)<{page:string}>`
  padding: 6px;
  padding-left: 4px;
  padding-right: 4px;
  margin-right: 10px;
  margin-left: 2px;
  display:flex;
  align-items: center;
  box-shadow: ${(props)=>props.page === "true" ? "0px 3px" : "0px"};
  opacity:${(props)=>props.page === "true" ? "1" : "0.7"};
  h2{
    font-size: 15px;
    white-space: nowrap;
    overflow: hidden;
  }
`


export default Navbar