
import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import Store from './pages/Store'
import Layout from './layouts/Layout'

function App() {

  return (
    <>
    <Routes>
      <Route element={<Layout/>}>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/store" element={<Store/>}/>
      </Route>
    </Routes>
    </>
  )
}

export default App
