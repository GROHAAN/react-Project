import React from 'react'
import { Link,Outlet } from "react-router-dom"
import MovieDekho from './MovieDekho'
import Navbar from './Navbar'
import MoviesCard from './MoviesCard'
import Footer from './Footer'


const Home = () => {
  return (
    <div>


      <MovieDekho/>
      <MoviesCard/>


    
    </div>

    
  )
}

export default Home
