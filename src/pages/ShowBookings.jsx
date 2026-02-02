import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ShowBookings = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = () => {
    setLoading(true);
    axios
      .get("http://localhost:3000/BookingData")
      .then((response) => {
        setBookings(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching bookings:", error);
        setLoading(false);
      });
  };

  const handleDelete = (id) => {
 
    axios
      .delete(`http://localhost:3000/BookingData/${id}`)
      .then(() => {
        alert("Booking cancelled successfully")
        setBookings((prev) => prev.filter((booking) => booking.id !== id));
      })
      .catch((error) => {
        console.error("Error deleting booking:", error);
        alert("Failed to cancel booking. Try again.");
      });
  };


  

  if (loading) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        Loading bookings... ⏳
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white p-4">
      <h1 className="text-3xl font-bold text-center mb-8">
        🎟️ My Bookings
      </h1>

      {bookings.length === 0 ? (
        <p className="text-center text-gray-400">No bookings found 😢</p>
      ) : (
        <div className="overflow-x-auto max-w-6xl mx-auto">
          <table className="w-full border border-gray-700 rounded-lg overflow-hidden">
            <thead className="bg-gray-800 text-yellow-400">
              <tr>
                <th className="p-3 border border-gray-700">Movie</th>
                <th className="p-3 border border-gray-700">Seats</th>
                <th className="p-3 border border-gray-700">Total Seats</th>
                <th className="p-3 border border-gray-700">Price (₹)</th>
                <th className="p-3 border border-gray-700">Booked On</th>
                <th className="p-3 border border-gray-700">Action</th>
              </tr>
            </thead>

            <tbody>
              {bookings.map((booking) => (
                <tr
                  key={booking.id}
                  className="bg-gray-900 hover:bg-gray-800 text-center"
                >
                  <td className="p-3 border border-gray-700 font-semibold">
                    {booking.movieTitle}
                  </td>
                  
                  <td className="p-3 border border-gray-700">
                    {booking.seats.join(", ")}
                  </td>
                  <td className="p-3 border border-gray-700">{booking.seatCount}</td>
                  <td className="p-3 border border-gray-700 text-green-400 font-bold">
                    ₹{booking.totalPrice}
                  </td>
                  <td className="p-3 border border-gray-700 text-sm text-gray-400">
                    {new Date(booking.bookingDate).toLocaleString()}
                  </td>
                  <td className="p-3 border border-gray-700">
                    <button
                      onClick={() => handleDelete(booking.id)}
                      className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded"
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

      <button
        onClick={() => navigate("/")}
        className="block mx-auto mt-8 text-gray-400 hover:text-white"
      >
        ← Back to Home
      </button>
    </div>
  );
};

export default ShowBookings;
