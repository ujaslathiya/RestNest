import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AddressLink from "../AddressLink";
import PlaceGallery from "../PlaceGallery";
import BookingDates from "../BookingDates";

export default function BookingPage() {
  const { id } = useParams();
  const [booking, setBooking] = useState(null);
  useEffect(() => {
    if (id) {
      axios.get("/bookings").then((response) => {
        const foundBooking = response.data.find(({ _id }) => _id === id);
        if (foundBooking) {
          setBooking(foundBooking);
        }
      });
    }
  }, [id]);

  if (!booking) {
    return "";
  }

  return (
    <div className="my-8">
        <h2 className="text-3xl">{booking.place.title}</h2>
        <AddressLink className='my-2 block'>{booking.place.address}</AddressLink>
        <div className="bg-gray-200 p-6 my-6 text-xl rounded-2xl flex items-center justify-between">
           <div>
           <h2 className="text-2xl  font-semibold mb-3">Your Booking Information</h2>
           <BookingDates booking={booking}/>
           </div>
           <div className="bg-primary p-6 rounded-2xl flex gap-2 items-center text-white">
           <h2 className="text-2xl  font-semibold ">Booking Price : </h2>
                <div className="text-3xl">${booking.price}</div>
           </div>
        </div>
        <PlaceGallery place={booking.place}/>

    </div>
  );
}
