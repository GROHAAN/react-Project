import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ShowBookings = () => {
  const [bookings, setBookings] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const loggedIn = localStorage.getItem("isLoggedIn") === "true";
    setIsLoggedIn(loggedIn);

    if (loggedIn) {
      fetchBookings();
    }
  }, []);

  const fetchBookings = () => {
    axios
      .get("http://localhost:3000/BookingData")
      .then((res) => {
        const userEmail = localStorage.getItem("useremail");

        if (!userEmail) {
          setBookings([]);
          return;
        }

        const userBookings = res.data.filter(
          (booking) => booking.userEmail === userEmail
        );

        setBookings(userBookings);
      })
      .catch(() => {
        alert("Failed to load bookings");
      });
  };

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:3000/BookingData/${id}`)
      .then(() => {
        setBookings((prev) =>
          prev.filter((booking) => booking.id !== id)
        );
        alert("Booking cancelled successfully");
      })
      .catch(() => {
        alert("Failed to cancel booking. Try again.");
      });
  };

  // 🔒 NOT LOGGED IN VIEW
  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center gap-4">
        <h2 className="text-2xl font-bold">🔒 Login Required</h2>
        <p className="text-gray-400">
          Please login to view your bookings
        </p>
        <button
          onClick={() => navigate("/login")}
          className="bg-red-600 hover:bg-red-700 px-6 py-2 rounded-lg font-semibold"
        >
          Go to Login
        </button>
      </div>
    );
  }

  // ✅ LOGGED IN VIEW
  return (
    <div className="min-h-screen bg-black text-white p-4">
      <h1 className="text-3xl font-bold text-center mb-8">
        🎟️ My Bookings
      </h1>

      {bookings.length === 0 ? (
        <p className="text-center text-gray-400">
          You have no bookings yet 😢
        </p>
      ) : (
        <div className="overflow-x-auto max-w-6xl mx-auto">
          <table className="w-full border border-gray-700">
            <thead className="bg-gray-800 text-yellow-400">
              <tr>
                <th className="p-3 border">Movie</th>
                <th className="p-3 border">Seats</th>
                <th className="p-3 border">Total Seats</th>
                <th className="p-3 border">Price (₹)</th>
                <th className="p-3 border">Booked On</th>
                <th className="p-3 border">Action</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((booking) => (
                <tr key={booking.id} className="bg-gray-900 text-center">
                  <td className="p-3 border">{booking.movieTitle}</td>
                  <td className="p-3 border">
                    {booking.seats.join(", ")}
                  </td>
                  <td className="p-3 border">{booking.seatCount}</td>
                  <td className="p-3 border text-green-400">
                    ₹{booking.totalPrice}
                  </td>
                  <td className="p-3 border text-gray-400">
                    {new Date(booking.bookingDate).toLocaleString()}
                  </td>
                  <td className="p-3 border">
                    <button
                      onClick={() => handleDelete(booking.id)}
                      className="bg-red-600 hover:bg-red-700 px-3 py-1 rounded"
                    >
                      Cancel
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ShowBookings;
