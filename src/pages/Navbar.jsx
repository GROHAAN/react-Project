import React from 'react'
import { Link, useNavigate } from 'react-router-dom'


const Navbar = () => {

    let navigate = useNavigate()


    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    const user = JSON.parse(localStorage.getItem('currentUser'));


    const handleLogout = () => {
        localStorage.removeItem('isLoggedIn');
        localStorage.removeItem('currentUser');
        navigate('/login')
        
    }



  return (
    <>
    <nav className="flex justify-between bg-gradient-to-br from-black via-slate-900 to-black text-white items-center px-8 py-5 border-b border-slate-800">
        <h1 className="text-2xl font-extrabold text-red-500"><Link to="/home" className='cursor-pointer'>🎥 MovieDekho</Link></h1>
        <div className="space-x-5">
          <Link to="/movies" className="hover:text-red-400">Movies</Link>
          <Link to="/offers" className="hover:text-red-400">Offers</Link>
          

          {!isLoggedIn && (
            <>
            
            <Link
            to="/login"
            className="px-4 py-1.5 bg-red-600 rounded-lg hover:bg-red-700"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="px-4 py-1.5 bg-red-600 rounded-lg hover:bg-red-700 transition font-semibold"
          >
            Sign Up
          </Link>
            </>
          )}
          {isLoggedIn && (
            <>
            <button onClick={handleLogout}><Link className='px-4 py-1.5 bg-red-600 rounded-lg hover:bg-red-700 transition font-semibold'>Logout</Link></button>
            </>
          )}
        </div>
      </nav>
      
    </>
  )
}

export default Navbar
