import styled from 'styled-components' 
import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import Detail from './pages/Detail'

const Container = styled.div`
  width:100%;
  min-height:100%;
` 

function App() {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/keep" element={<Home/>} />
        <Route path="/result" element={<Home/>} />
        <Route path="/thumbnail" element={<Home/>} />
        <Route path="/request/:id" element={<Detail/>} />
      </Routes>
    </Container>
  )
}

export default App
