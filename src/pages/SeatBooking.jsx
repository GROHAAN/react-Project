import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const SeatBooking = () => {
  const navigate = useNavigate();

  const [movie, setMovie] = useState(null);
  const [selectedSeats, setSelectedSeats] = useState([]);

  const SEAT_PRICE = 350;
  const seats = Array.from({ length: 24 }, (_, i) => i + 1);

  // ✅ SAFE MOVIE LOAD
  useEffect(() => {
    try {
      const storedMovie = localStorage.getItem("selectedMovie");

      if (!storedMovie) {
        navigate("/");
        return;
      }

      const parsedMovie = JSON.parse(storedMovie);

      // 🔥 MAIN FIX: id validation
      if (!parsedMovie.id) {
        console.error("Movie ID missing:", parsedMovie);
        alert("Movie data corrupted. Please select movie again.");
        localStorage.removeItem("selectedMovie");
        navigate("/");
        return;
      }

      setMovie(parsedMovie);
    } catch (err) {
      console.error("Invalid movie data", err);
      navigate("/");
    }
  }, [navigate]);

  const toggleSeat = (seat) => {
    setSelectedSeats((prev) =>
      prev.includes(seat)
        ? prev.filter((s) => s !== seat)
        : [...prev, seat]
    );
  };

  const totalPrice = selectedSeats.length * SEAT_PRICE;

  const handleConfirmBooking = () => {
    const userEmail = localStorage.getItem("useremail");

    if (!userEmail) {
      alert("Please login to book seats");
      navigate("/login");
      return;
    }

    if (selectedSeats.length === 0) {
      alert("Please select at least one seat");
      return;
    }

    const bookingPayload = {
      movieId: movie.id, // ✅ NOW GUARANTEED
      movieTitle: movie.title,
      seats: selectedSeats,
      seatCount: selectedSeats.length,
      totalPrice,
      bookingDate: new Date().toISOString(),
      userEmail,
    };

    axios
      .post("http://localhost:3000/BookingData", bookingPayload)
      .then(() => {
        alert("🎉 Booking Confirmed!");
        localStorage.removeItem("selectedMovie");
        navigate("/showbook");
      })
      .catch(() => {
        alert("❌ Booking failed");
      });
  };

  if (!movie) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        Loading movie...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white p-6">

      {/* Movie Info */}
      <div className="flex justify-center gap-4 mb-8 items-center">
        <img
          src={movie.img}
          alt={movie.title}
          className="w-28 h-40 object-cover rounded"
        />
        <div>
          <h2 className="text-2xl font-bold">{movie.title}</h2>
          <p className="text-gray-400">{movie.genre}</p>
          <p className="text-yellow-400">⭐ {movie.rating}</p>
        </div>
      </div>

      {/* Screen */}
      <div className="max-w-md mx-auto">
        <div className="bg-gray-700 text-center py-2 mb-5 rounded">
          SCREEN
        </div>

        <div className="grid grid-cols-8 gap-3">
          {seats.map((seat) => (
            <button
              key={seat}
              onClick={() => toggleSeat(seat)}
              className={`w-10 h-10 rounded text-sm
                ${
                  selectedSeats.includes(seat)
                    ? "bg-red-600"
                    : "bg-gray-600 hover:bg-gray-500"
                }`}
            >
              {seat}
            </button>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="mt-8 max-w-md mx-auto space-y-4">
        <p className="text-gray-300 text-center">
          Selected Seats:{" "}
          <span className="text-yellow-400">
            {selectedSeats.length
              ? selectedSeats.join(", ")
              : "None"}
          </span>
        </p>

        <p className="text-center text-lg">
          Total Price:{" "}
          <span className="text-green-400 font-bold">
            ₹{totalPrice}
          </span>
        </p>

        <button
          disabled={!selectedSeats.length}
          onClick={handleConfirmBooking}
          className="w-full bg-red-600 py-2 rounded disabled:opacity-50"
        >
          Confirm Booking
        </button>
      </div>

      <button
        onClick={() => navigate(-1)}
        className="block mx-auto mt-6 text-gray-400 hover:text-white"
      >
        ← Back
      </button>
    </div>
  );
};

export default SeatBooking;
