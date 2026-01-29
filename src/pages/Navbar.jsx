import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  const user = JSON.parse(localStorage.getItem("currentUser"));

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("currentUser");
    navigate("/login");
  };

  return (
    <nav className="flex justify-between items-center px-8 py-5 bg-gradient-to-r from-black via-slate-900 to-black text-white shadow-md relative">
      {/* Logo */}
      <h1 className="text-3xl font-extrabold text-red-500 hover:text-red-600 transition duration-300">
        <Link to="/home">🎥 MovieDekho</Link>
      </h1>

      {/* Links */}
      <div className="flex items-center space-x-5">
        <Link
          to="/home"
          className="px-3 py-1 rounded hover:bg-red-600 transition"
        >
          Home
        </Link>
        <Link
          to="/showbook"
          className="px-3 py-1 rounded hover:bg-red-600 transition"
        >
          Show Bookings
        </Link>

        {!isLoggedIn ? (
          <>
            <Link
              to="/login"
              className="px-4 py-2 bg-red-600 rounded-full hover:bg-red-700 transition font-semibold"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="px-4 py-2 bg-red-600 rounded-full hover:bg-red-700 transition font-semibold"
            >
              Sign Up
            </Link>
          </>
        ) : (
          <div className="relative">
            {/* Profile Circle with First Letter */}
            <button
              onClick={() => setDropdownOpen((prev) => !prev)}
              className="flex items-center gap-2 px-4 py-2 bg-red-600/20 rounded-full hover:bg-red-700/10 transition font-semibold shadow-md"
            >
              <div className="w-8 h-8 rounded-full bg-white text-red-600 flex items-center justify-center font-bold">
                {user?.name?.charAt(0).toUpperCase() || "G"}
              </div>
              <span>{user?.name || "User"}</span>
              <span
                className={`transition-transform duration-200 ${
                  dropdownOpen ? "rotate-180" : ""
                }`}
              >
                ▼
              </span>
            </button>

            {/* Dropdown */}
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-52 bg-gray-800 border border-gray-700 rounded-lg shadow-lg overflow-hidden animate-fadeIn z-50">
                <div className="px-4 py-3 border-b border-gray-700">
                  <p className="font-semibold text-white">{user?.name}</p>
                  {user?.email && (
                    <p className="text-sm text-gray-300">{user.email}</p>
                  )}
                  {user?.phone && (
                    <p className="text-sm text-gray-300">{user.phone}</p>
                  )}
                </div>
                <button
                  onClick={handleLogout}
                  className="w-full text-left px-4 py-2 text-red-500 hover:bg-gray-700 hover:text-white transition"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
