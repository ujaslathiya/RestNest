import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BookingWidget from "../BookingWidget";
import PlaceGallery from "../PlaceGallery";
import AddressLink from "../AddressLink";

export default function PlacePage() {
  const { id } = useParams();
  const [place, setPlace] = useState(null);


  useEffect(() => {
    if (!id) {
      return;
    }

    axios.get(`/places/${id}`).then((response) => {
      setPlace(response.data);
    });
  }, [id]);

  if (!place) return "";

  

  return (
    <>
      <div className="mt-4 pt-5 -mx-8 px-8 border-t bg-gray-100">
        <h1 className="text-3xl">{place.title}</h1>
        <AddressLink>{place.address}</AddressLink>

        <PlaceGallery place={place}/>

        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-8 text-xl mt-8">
          <div>
            <div className="my-4 mb-5 mt-3 text-lg">
              <h2 className="font-semibold text-3xl mb-2">Description</h2>
              {place.description}
            </div>
            <b className="font-semibold">Check-in (time) : </b>
            {place.checkIn}
            <br />
            <b className="font-semibold">Check-out (time) : </b>
            {place.checkOut}
            <br />
            <b className="font-semibold">Max Guests : </b>
            {place.maxGuests}
          </div>
          <div>
            <BookingWidget place={place} />
          </div>
        </div>
        <div className="bg-white p-8 mt-10 -mx-8">
          <div>
            <h2 className="font-semibold text-3xl mt-8 mb-1">Extra Info</h2>
          </div>
          <div className="text-gray-700 mt-2 text-lg leading-7 ">
            {place.extraInfo}
          </div>
        </div>
      </div>
    </>
  );
}
