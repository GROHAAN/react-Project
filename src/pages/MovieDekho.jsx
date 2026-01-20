import { Link } from "react-router-dom";

const movies = [
  {
    title: "Jawan",
    genre: "Action • Thriller",
    rating: "⭐ 8.2",
    img: "https://i.imgur.com/1Q9Z1Zm.jpg",
  },
  {
    title: "Animal",
    genre: "Crime • Drama",
    rating: "⭐ 8.5",
    img: "https://i.imgur.com/vx1Zz9Y.jpg",
  },
  {
    title: "Leo",
    genre: "Action • Drama",
    rating: "⭐ 8.0",
    img: "https://i.imgur.com/W8X9ZJp.jpg",
  },
];

export default function MovieDekho() {
  return (
      
      <div className="min-h-screen bg-gradient-to-br from-black via-slate-900 to-black text-white">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-5 border-b border-slate-800">
        <h1 className="text-2xl font-extrabold text-red-500">🎥 MovieDekho</h1>
        <div className="space-x-5">
          <Link className="hover:text-red-400">Movies</Link>
          <Link className="hover:text-red-400">Offers</Link>
          <Link to="/login" className="px-4 py-1.5 bg-red-600 rounded-lg hover:bg-red-700">
            Login
          </Link>


          {/* Sign Up */}
          <Link
            to="/signup"
            className="px-4 py-1.5 bg-red-600 rounded-lg
                       hover:bg-red-700 transition font-semibold"
          >
            Sign Up
          </Link>
          
        </div>
      </nav>

      {/* Hero */}
      <section className="text-center py-16 px-4">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
          Book Movie Tickets Instantly 🎬
        </h2>
        <p className="text-gray-400 max-w-xl mx-auto">
          Watch latest movies in your nearest theatres. Easy booking, best offers & instant confirmation.
        </p>
        <button className="mt-6 px-8 py-3 bg-red-600 rounded-xl font-semibold hover:bg-red-700 transition">
          Explore Movies
        </button>
      </section>

      {/* Movies Section */}
      <section className="px-6 pb-16">
        <h3 className="text-2xl font-bold mb-6">🔥 Now Showing</h3>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {movies.map((movie, index) => (
            <div
              key={index}
              className="bg-slate-900 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition duration-300"
            >
              <img
                src={movie.img}
                alt={movie.title}
                className="h-56 w-full object-cover"
              />

              <div className="p-4">
                <h4 className="text-xl font-bold">{movie.title}</h4>
                <p className="text-gray-400 text-sm">{movie.genre}</p>

                <div className="flex justify-between items-center mt-3">
                  <span className="text-yellow-400">{movie.rating}</span>
                  <button className="px-4 py-1.5 bg-red-600 rounded-lg hover:bg-red-700 text-sm">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center text-gray-500 text-sm py-6 border-t border-slate-800">
        © 2026 MovieDekho. All Rights Reserved.
      </footer>
    </div>
  );
}
