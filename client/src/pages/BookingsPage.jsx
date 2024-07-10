import { useEffect, useState } from "react";
import AccountNav from "../AccountNav";
import axios from "axios";
import PlaceImg from "../PlaceImg";
import { Link } from "react-router-dom";
import BookingDates from "../BookingDates";

export default function BookingsPage() {
  const [bookings, setBookings] = useState([]);
  useEffect(() => {
    axios.get("/bookings").then((res) => {
      setBookings(res.data);
    });
  }, []);

  return (
    <div>
      <AccountNav />
      <div className="">
        {bookings?.length > 0 &&
          bookings.map((booking) => (
            <Link to={`/account/bookings/${booking._id}`}
              key={booking._id}
              className="flex bg-gray-100 rounded-2xl gap-4 my-6 shadow shadow-gray-100 overflow-hidden"
            >
              <div className="w-60 h-40 text-gray-950">
                <PlaceImg place={booking.place} />
              </div>
              <div className="py-3 grow">
                <h2 className="text-2xl border-b border-gray-200 pb-3">{booking.place.title}</h2>

    

                <div className="text-xl mb-2 mt-6 text-gray-900">
                  <BookingDates booking={booking} className="mb-2 mt-4" />
                </div>
                <div className="flex gap-1 items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z"
                    />
                  </svg>
                  <span className="text-xl text-gray-900">Booking Price : ${booking.price}</span>
                </div>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
}
