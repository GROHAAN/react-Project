import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
    {/* Footer */}
<footer className="bg-slate-900 border-t border-slate-800 py-10 px-6">
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-400">
    
    {/* Brand */}
    <div>
      <h2 className="text-2xl font-extrabold text-red-500 mb-3">🎥 MovieDekho</h2>
      <p className="text-sm">
        Your one-stop destination for booking movie tickets instantly. 
        Enjoy the latest releases with ease and style.
      </p>
    </div>

    {/* Quick Links */}
    <div>
      <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
      <ul className="space-y-2">
        <li><Link className="hover:text-red-400">Movies</Link></li>
        <li><Link className="hover:text-red-400">Offers</Link></li>
        <li><Link className="hover:text-red-400">Login</Link></li>
        <li><Link className="hover:text-red-400">Sign Up</Link></li>
      </ul>
    </div>

    {/* Social Media */}
    <div>
      <h3 className="text-lg font-semibold text-white mb-3">Follow Us</h3>
      <div className="flex space-x-4">
        <a href="#" className="hover:text-red-400">🌐 Facebook</a>
        <a href="#" className="hover:text-red-400">📸 Instagram</a>
        <a href="#" className="hover:text-red-400">🐦 Twitter</a>
        <a href="#" className="hover:text-red-400">▶️ YouTube</a>
      </div>
    </div>
  </div>

  {/* Bottom Bar */}
  <div className="mt-10 border-t border-slate-700 pt-6 text-center text-sm text-gray-500">
    © 2026 MovieDekho. All Rights Reserved. | Made with ❤️ in India
  </div>
</footer>

      
    </>
  )
}

export default Footer
