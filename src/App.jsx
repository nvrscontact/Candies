
import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import Store from './pages/Store'
import Layout from './layouts/Layout'
import Apettizers from './pages/Apettizers'
import Desserts from './pages/Desserts'
import Coffee from './pages/Coffee'
import Membership from './pages/Membership'
import Register from './pages/Register'
import Login from './pages/Login'

function App() {

  return (
    <>
    <Routes>
      <Route element={<Layout/>}>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/Store" element={<Store/>}/>
        <Route path="/Apettizers" element={<Apettizers/>} ></Route>
        <Route path="/Desserts" element={<Desserts/>}></Route>
        <Route path="/Coffee" element={<Coffee/>}></Route>
        <Route path="/Membership" element={<Membership/>}></Route>
        <Route path="/Register" element={<Register/>}></Route>
        <Route path="/Login" element={<Login/>}></Route>
      </Route>
    </Routes>
    </>
  )
}

export default App
