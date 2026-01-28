import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Signup = () => {

  let navigate = useNavigate();


  let [form, setform] = useState({
    name: "",
    email: "",
    number: "",
    city: "",
    password: "",
    cpassword: ""

  })


  const handlechange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value })
    console.log(form);
    
  }



  
  let handlesubmit = (e) => {

    e.preventDefault()

    let valid = true

    if (form.name.trim() === "") {
      alert("name is required")
      valid = false
    }

    else if (form.number.trim().length !== 10) {
      alert("enter a valid number")
      valid = false
    }

    else if(isNaN(form.number)){
      alert("enter a valid number")
      valid = false
    }

    else if (!(form.password.trim().length > 8 && form.password.match(/[1234567890]/) &&
      form.password.match(/[!@#$^&*]/) &&
      form.password.match(/[a-z]/) &&
      form.password.match(/[A-Z]/))) {
      alert("password should be atleast 8 characters long and should contain atleast one number, one special character, one uppercase and one lowercase letter")
      valid=false

      }

        else if (form.password !== form.cpassword) {
      alert("password does not match")
      valid = false
        }

        else{

          let users = JSON.parse(localStorage.getItem("users") )|| []

          let exists = users.find((u)=>{
            return u.email === form.email
          })

          if(exists){
            alert("user already exists")
            valid = false
          }

          else{
            users.push(form)
            localStorage.setItem("users", JSON.stringify(users))
            alert("user created successfully")

            navigate("/login")


          }


        }

        


  }

 



  return (
    <>

      <div className="h-screen flex items-center justify-center bg-gradient-to-br from-black via-slate-900 to-black text-white overflow-hidden">

        <div className="w-full max-w-2xl bg-slate-900 rounded-2xl p-7 shadow-lg">

          <h1 className="text-3xl font-extrabold text-center text-primary mb-1">
            🎥 MovieDekho
          </h1>
          <p className="text-center text-gray-400 text-sm mb-5">
            Create your account
          </p>

          <form onSubmit={handlesubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">

            {/* Full Name */}
            <div className="relative">
              <span className="absolute left-3 top-9 text-gray-400">👤</span>
              <label className="text-sm">Full Name</label>
              <input type="text" placeholder="Abhi Gupta" name='name' value={form.name} onChange={handlechange}
                className="w-full pl-10 pr-4 py-2 bg-slate-800 border border-slate-700 rounded-lg
                        focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-60
                        focus:border-red-400" />
            </div>

            {/* Email */}
            <div className="relative">
              <span className="absolute left-3 top-9 text-gray-400">📧</span>
              <label className="text-sm">Email</label>
              <input type="email" placeholder="abhi@gmail.com" name='email' value={form.email} onChange={handlechange}
                className="w-full pl-10 pr-4 py-2 bg-slate-800 border border-slate-700 rounded-lg
                        focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-60
                        focus:border-blue-400" />
            </div>

            {/* Phone */}
            <div className="relative">
              <span className="absolute left-3 top-9 text-gray-400">📱</span>
              <label className="text-sm">Phone</label>
              <input type="tel" placeholder="9876543210" name='number' value={form.number} onChange={handlechange}
                className="w-full pl-10 pr-4 py-2 bg-slate-800 border border-slate-700 rounded-lg
                        focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50
                        focus:border-green-400" />
            </div>

            {/* City */}
            <div className="relative">
              <span className="absolute left-3 top-9 text-gray-400">🏙️</span>
              <label className="text-sm">City</label>
              <input type="text" placeholder="Your City" name='city' value={form.city} onChange={handlechange}
                className="w-full pl-10 pr-4 py-2 bg-slate-800 border border-slate-700 rounded-lg
                        focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50
                        focus:border-purple-400" />
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

            {/* Confirm Password */}
            <div className="relative">
              <span className="absolute left-3 top-9 text-gray-400">🔒</span>
              <label className="text-sm">Confirm Password</label>
              <input type="password" placeholder="••••••••" name='cpassword' value={form.cpassword} onChange={handlechange}
                className="w-full pl-10 pr-4 py-2 bg-slate-800 border border-slate-700 rounded-lg
                        focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-opacity-50
                        focus:border-pink-400" />
            </div>

            {/* Sign Up Button */}
            <div className="md:col-span-2 mt-2">
              <button
                type="submit"
                className="w-full py-2.5 bg-primary hover:bg-red-700 active:scale-95 transition-all duration-300 rounded-lg font-semibold shadow-lg">
                Sign Up
              </button>
            </div>
          </form>

          <p className="text-center text-sm text-gray-400 mt-4">
            Already have an account? &nbsp;
            <Link to="/login" className="text-primary hover:underline font-bold text-amber-100">Login</Link>
          </p>

        </div>

      </div>

    </>
  )
}

export default Signup;
