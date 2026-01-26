import React from 'react'
import { Link,Outlet } from "react-router-dom"
import MovieDekho from './MovieDekho'


const Home = () => {
  return (
    <div>

      

      <MovieDekho/>

    <Outlet />


    
    </div>

    
  )
}

export default Home
