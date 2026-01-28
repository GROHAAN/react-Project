import { useState } from "react";

function SeatBooking({ movie, goBack }) {
  const [seat, setSeat] = useState(null);

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <button onClick={goBack} className="text-red-400 mb-4">
        ← Back
      </button>

      <h2 className="text-xl font-bold">{movie.title}</h2>
      <p className="mb-4 text-gray-400">Select one seat</p>

      <div className="flex gap-3">
        {[1,2,3,4,5].map((num) => (
          <button
            key={num}
            onClick={() => setSeat(num)}
            className={`px-4 py-2 rounded 
              ${seat === num ? "bg-green-500" : "bg-slate-700"}`}
          >
            {num}
          </button>
        ))}
      </div>

      {seat && (
        <button className="mt-6 w-full bg-red-600 py-2 rounded">
          Book Seat {seat}
        </button>
      )}
    </div>
  );
}

export default SeatBooking;
