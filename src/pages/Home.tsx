import styled from 'styled-components'
import Request from '../components/Request'
import Navbar from '../components/Navbar'
import { useEffect,useState } from 'react'
// var kmp = require('kmp');
import {IListRequest,IGraphqlList} from '../types'
import {API, graphqlOperation} from "aws-amplify"
import {listRequests} from '../graphql/queries'

function Home() {
  const [data,setData] = useState<IListRequest[] | null | "loading">("loading")

  useEffect(()=>{
    getListRequests().then(({data}:{data:IGraphqlList<IListRequest> | null})=>{setData(data ? data.listRequests.items : null)})
  },[])

  useEffect(()=>{
    console.log(data)
  },[data])

  const getListRequests = async() => {
    try{
      const res:any = await API.graphql(graphqlOperation(listRequests));
      return res
    }catch(err){
      alert("에러\n"+err)
      return null
    }
  }

  return (
    <Container>
      <Navbar/>
      {
        data !== "loading"
        ? data !== null
          ? data.map((request,key)=>{
              return <Request key={key} request={request} />
            })
          : <div>Error!</div>
        : <div>로딩중</div>
      }
    </Container>
  )
}

const Container = styled.div`
  width:100%;
  display:flex;
  flex-wrap: wrap;
` 

export default Home