const MovieDetails = ({ movie, Close, goToSeat  }) => {
  if (!movie) return null;

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
      <div className="bg-slate-900 text-white rounded-xl w-[90%] max-w-lg p-6 relative">
        
        {/* Close Button */}
        <button
          onClick={Close}
          className="absolute top-3 right-3 text-gray-400 hover:text-white"
        >
          ✕
        </button>

        {/* Image */}
        <img
          src={movie.img}
          alt={movie.title}
          className="w-full h-70 object-contain rounded-lg"
        />

        {/* Details */}
        <h2 className="text-2xl font-bold mt-4">{movie.title}</h2>
        <p className="text-gray-400">{movie.genre}</p>
        <p className="text-yellow-400 mt-1">⭐ {movie.rating}</p>

        <p className="text-sm text-gray-300 mt-4">
          {movie.description || "No description available for this movie."}
        </p>

        <button onClick={goToSeat} className="mt-5 w-full bg-red-600 py-2 rounded">
          Proceed to Booking
        </button>
      </div>
    </div>
  );
};

export default MovieDetails;
