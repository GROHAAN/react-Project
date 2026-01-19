import React from 'react'
import { Link,Outlet } from "react-router-dom"


const Home = () => {
  return (
    <div>
      <h1 className='text-8xl text-orange-600'>I love you</h1>

    <Outlet />


      <button className='border-2 text-amber-800'><Link to="/login">LOGIN</Link></button><br /><br />
      <button className='border-2 text-amber-800'><Link to="/signup">SIGN UP</Link></button>
    </div>

    
  )
}

export default Home
