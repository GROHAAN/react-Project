import { useState } from 'react'
import { Routes, Route, Outlet } from 'react-router-dom'
import './App.css'
import './Tailwind.css'
import Home from './pages/Home'
import Signup from './pages/Signup'
import Login from './pages/Login'
import SeatBooking from './pages/SeatBooking'
import Layout from '../src/pages/Layout'
import ShowBookings from './pages/ShowBookings'



const App = () => {
  return (
    <>


      <Routes>  
        <Route path='/' element={<Layout />}>
        

        <Route index element={<Home/>}></Route>
        <Route path='home' element={<Home />} />
        <Route path='signup' element={<Signup />} />
        <Route path='login' element={<Login />} />
        <Route path='seat' element={<SeatBooking/>}/>
        <Route path='showbook' element={<ShowBookings/>}/>
        
        
        </Route>

        


        
        
        

        
      </Routes>

    </>
  )
}

export default App
