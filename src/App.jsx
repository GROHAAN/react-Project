import { useState } from 'react'
import { Routes, Route, Outlet } from 'react-router-dom'
import './App.css'
import './Tailwind.css'
import Home from './pages/Home'
import Signup from './pages/Signup'
import Login from './pages/Login'



const App = () => {
  return (
    <>
      <Routes>  
        <Route path='/' element={<Home />} />

        <Route index element={<Home/>}></Route>
        <Route path='home' element={<Home />} />
        <Route path='signup' element={<Signup />} />
        <Route path='login' element={<Login />} />


        
        
        <Route/>

        
      </Routes>

    </>
  )
}

export default App
