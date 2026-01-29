import { Link } from "react-router-dom";

const MovieDetails = ({ movie, close }) => {
  if (!movie) return null;

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
      <div className="bg-slate-900 text-white rounded-xl w-[90%] max-w-lg p-6 relative">

        <button
          onClick={close}
          className="absolute top-3 right-3 text-gray-400 hover:text-white"
        >
          ✕
        </button>

        <img
          src={movie.img}
          alt={movie.title}
          className="w-full h-70 object-contain rounded-lg"
        />

        <h2 className="text-2xl font-bold mt-4">{movie.title}</h2>
        <p className="text-gray-400">{movie.genre}</p>
        <p className="text-yellow-400 mt-1">⭐ {movie.rating}</p>

        <p className="text-sm text-gray-300 mt-4">
          {movie.description}
        </p>

        <Link
          to="/seat"
          state={{ movie }}
          className="block mt-5 w-full bg-red-600 py-2 rounded text-center"
        >
          Proceed to Booking
        </Link>

      </div>
    </div>
  );
};

export default MovieDetails;
