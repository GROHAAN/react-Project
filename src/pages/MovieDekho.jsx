import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function MovieDekho() {
  let [movies, setMovies] = useState([]);

  let FetchMovies = () => {
    let api = "http://localhost:3000/movies";

    axios
      .get(api)
      .then((res) => {
        console.log(res.data);
        setMovies(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    FetchMovies();
  }, []);

  // Static images for slider (replace with your own banners/posters)
  const sliderImages = [


    <img src="/1.jpg" alt="Logo" />,
    <img src="/2.jpg" alt="Logo" />,
    <img src="/3.jpg" alt="Logo" />
    
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-slate-900 to-black text-white">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-5 border-b border-slate-800">
        <h1 className="text-2xl font-extrabold text-red-500">🎥 MovieDekho</h1>
        <div className="space-x-5">
          <Link className="hover:text-red-400">Movies</Link>
          <Link className="hover:text-red-400">Offers</Link>
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
        </div>
      </nav>

      {/* Hero */}
      <section className="text-center py-16 px-4">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
          Book Movie Tickets Instantly 🎬
        </h2>
        <p className="text-gray-400 max-w-xl mx-auto">
          Watch latest movies in your nearest theatres. Easy booking, best
          offers & instant confirmation.
        </p>
        <button className="mt-6 px-8 py-3 bg-red-600 rounded-xl font-semibold hover:bg-red-700 transition">
          Explore Movies
        </button>
      </section>

      {/* Image Slider */}
      <section className="px-6 pb-16">
        <h3 className="text-2xl font-bold mb-6">🎞 Featured</h3>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={5}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          loop={true}
          className="rounded-xl overflow-hidden"
        >
          {sliderImages.map((img, index) => (
            <SwiperSlide key={index}>
              <img
                src={img}
                alt={`Slide ${index + 1}`}
                className="w-full h-[400px] object-cover rounded-xl"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* Movies Section */}
      <section className="px-6 pb-16">
        <h3 className="text-2xl font-bold mb-6">🔥 Now Showing</h3>

        <div className="grid grid-cols-5 gap-6">
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
    </div>
  );
}