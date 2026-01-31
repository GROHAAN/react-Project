import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
const Login = () => {

  let navigate = useNavigate()

  let [form, setform] = useState({
    email: "",
    password: ""
  })

  const handlesubmit = (e) => {
    e.preventDefault()
    console.log(form)

    let users = JSON.parse(localStorage.getItem("users")) || []

    let authenticatedUser = users.find((user)=>{
      return user.email === form.email && user.password === form.password
    })

    if(authenticatedUser){
      localStorage.setItem("isLoggedIn", "true")
      localStorage.setItem("currentUser", JSON.stringify(authenticatedUser))
      localStorage.setItem("useremail",authenticatedUser.email)

      navigate("/Home")

    }

    else{
      alert("Invalid Credentials")
    }
  }

  const handlechange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value })
    console.log(form);
    
  }




  
  
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

        <form className="grid grid-cols-1 md:grid-cols-1 gap-4" onSubmit={handlesubmit}>

          {/* Email */}
          <div className="relative">
            <span className="absolute left-3 top-9 text-gray-400">📧</span>
            <label className="text-sm">Email</label>
            <input type="email" placeholder="abhi@gmail.com" name='email' value={form.email} onChange={handlechange}
              className="w-full pl-10 pr-4 py-2 bg-slate-800 border border-slate-700 rounded-lg
                        focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-60
                        focus:border-blue-400" />
          </div>

          {/* Password */}
          <div className="relative">
            <span className="absolute left-3 top-9 text-gray-400">🔒</span>
            <label className="text-sm">Password</label>
            <input type="password" placeholder="••••••••" name='password' value={form.password} onChange={handlechange}
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
 