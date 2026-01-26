import React from 'react'
import { Link } from 'react-router-dom'
const Login = () => {


  
  
  return (
    <>
      


<div className="h-screen flex items-center justify-center bg-gradient-to-br from-black via-slate-900 to-black text-white overflow-hidden">

  <div className="w-full max-w-2xl bg-slate-900 rounded-2xl p-7 shadow-lg">

        <h1 className="text-3xl font-extrabold text-center text-primary mb-1">
          🎥 MovieDekho
        </h1>
        <p className="text-center text-gray-400 text-sm mb-5">
          Login to your account
        </p>

        <form className="grid grid-cols-1 md:grid-cols-1 gap-4">

          {/* Email */}
          <div className="relative">
            <span className="absolute left-3 top-9 text-gray-400">📧</span>
            <label className="text-sm">Email</label>
            <input type="email" placeholder="abhi@gmail.com"
              className="w-full pl-10 pr-4 py-2 bg-slate-800 border border-slate-700 rounded-lg
                        focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-60
                        focus:border-blue-400" />
          </div>

          {/* Password */}
          <div className="relative">
            <span className="absolute left-3 top-9 text-gray-400">🔒</span>
            <label className="text-sm">Password</label>
            <input type="password" placeholder="••••••••"
              className="w-full pl-10 pr-4 py-2 bg-slate-800 border border-slate-700 rounded-lg
                        focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50
                        focus:border-yellow-400" />
          </div>

          {/* Login Button */}
          <div className="mt-2">
            <button
              type="submit"
              className="w-full py-2.5 bg-primary hover:bg-red-700 active:scale-95 transition-all duration-300 rounded-lg font-semibold shadow-lg">
              Login
            </button>
          </div>

        </form>

        <p className="text-center text-sm text-gray-400 mt-4">
          Don't have an account? &nbsp;
          <Link to="/signup" className="text-primary hover:underline font-bold text-amber-100">Sign Up</Link>
        </p>

  </div>  

    </div>
    





    </>
  )
}

export default Login
