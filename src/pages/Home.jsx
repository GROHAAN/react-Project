import React from 'react'
import { Link,Outlet } from "react-router-dom"
import MovieDekho from './MovieDekho'


const Home = () => {
  return (
    <div>
      <MovieDekho/>

    <Outlet />


      {/* <button className='border-2 text-amber-800'><Link to="/login">LOGIN</Link></button><br /><br />
      <button className='border-2 text-amber-800'><Link to="/signup">SIGN UP</Link></button> */}
    </div>

    
  )
}

export default Home
