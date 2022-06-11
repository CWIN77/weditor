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

import {loginGoogle,getCurrentUser} from '../firebase/auth'
import { IUserData } from '../types';

function Navbar() {
  const [page,setPage] = useState(window.location.pathname)
  const [isOver,setIsOver] = useState(false)
  const [user,setUser] = useState<IUserData|null>(null)
  const iconStyle = {width:16,height:16,fill:"#C8D4E6",style:{marginRight:6}}

  useEffect(()=>{
    window.addEventListener('scroll',()=>{setIsOver(window.scrollY > 89.75)})
    getCurrentUser(setUser)
  },[])

  return (
    <>
      <Top>
        <Title>Weditor</Title>
        <div style={{display:'flex',alignItems:'center'}}>
          {
            user
            ? <Profile src={String(user?.img)}/>
            : <Svg_profile onClick={()=>{loginGoogle()}} width={28} height={28} style={{margin:2,padding:4}}/>
          }
          <Svg_more width={20} height={20} fill="#C8D4E6" style={{padding:6,display:'flex'}} />
        </div>
      </Top>
      <Nav>
        <NavBtn onClick={()=>{setPage("/")}} to={"/"} page={`${page==="/"}`}>
          {
            page === '/'
            ? <Svg_video_bold {...iconStyle} />
            : <Svg_video {...iconStyle} />
          }
          <h2>편집각</h2>
        </NavBtn>
        <NavBtn onClick={()=>{setPage("/keep")}} to={"/keep"} page={`${page==="/keep"}`}>
          {
            page === '/keep'
            ? <Svg_box_bold {...iconStyle} />
            : <Svg_box {...iconStyle} />
          }
          <h2>찜목록</h2>
        </NavBtn>
        <NavBtn onClick={()=>{setPage("/result")}} to={"/result"} page={`${page==="/result"}`}>
          {
            page === '/result'
            ? <Svg_medal_bold {...iconStyle} />
            : <Svg_medal {...iconStyle} />
          }
          <h2>내성과</h2>
        </NavBtn>
        <NavBtn onClick={()=>{setPage("/thumbnail")}} to={"/thumbnail"} page={`${page==="/thumbnail"}`}>
          {
            page === '/thumbnail'
            ? <Svg_thumbnail_bold {...iconStyle} />
            : <Svg_thumbnail {...iconStyle} />
          }
          <h2>썸네일</h2>
        </NavBtn>
      </Nav>
      {
        isOver &&
        <NavOver>
          <NavBtn onClick={()=>{setPage("/")}} to={"/"} page={`${page==="/"}`}>
            {
              page === '/'
              ? <Svg_video_bold {...iconStyle} />
              : <Svg_video {...iconStyle} />
            }
            <h2>편집각</h2>
          </NavBtn>
          <NavBtn onClick={()=>{setPage("/keep")}} to={"/keep"} page={`${page==="/keep"}`}>
            {
              page === '/keep'
              ? <Svg_box_bold {...iconStyle} />
              : <Svg_box {...iconStyle} />
            }
            <h2>찜목록</h2>
          </NavBtn>
          <NavBtn onClick={()=>{setPage("/result")}} to={"/result"} page={`${page==="/result"}`}>
            {
              page === '/result'
              ? <Svg_medal_bold {...iconStyle} />
              : <Svg_medal {...iconStyle} />
            }
            <h2>내성과</h2>
          </NavBtn>
          <NavBtn onClick={()=>{setPage("/thumbnail")}} to={"/thumbnail"} page={`${page==="/thumbnail"}`}>
            {
              page === '/thumbnail'
              ? <Svg_thumbnail_bold {...iconStyle} />
              : <Svg_thumbnail {...iconStyle} />
            }
            <h2>썸네일</h2>
          </NavBtn>
        </NavOver>
      }
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
  width:32px;
  height:32px;
  margin:2px;
  border-radius: 100px;
  background-color:#C8D4E6;
`
const Nav = styled.div`
  padding: 1rem;
  padding-bottom: 3px;
  margin-bottom: 1rem;
  display:flex;
  overflow-x: auto;
  width:calc(100% - 2rem);
  align-items: center;
`
const NavOver = styled.div`
  background-color:#1d2127;
  padding: 1rem;
  padding-bottom: clac(1rem + 3px);
  /* margin-bottom: 1rem; */
  display:flex;
  overflow-x: auto;
  width:calc(100% - 2rem);
  align-items: center;
  position: fixed;
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
    font-weight: 400;
    white-space: nowrap;
    overflow: hidden;
  }
`


export default Navbar