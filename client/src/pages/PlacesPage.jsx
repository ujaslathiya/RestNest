import { Link } from "react-router-dom";
import AccountNav from "../AccountNav";
import { useEffect, useState } from "react";
import axios from "axios";
import PlaceImg from "../PlaceImg";

export default function PlacesPage() {
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    axios.get("/user-places").then(({ data }) => {
      setPlaces(data);
    });
  }, [setPlaces]);

  return (
    <div>
      <AccountNav />

      

      <div className="mt-6 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {places.length > 0 &&
          places.map((place) => (
            <Link
              to={"/account/places/" + place._id}
              key={place.owner}
              className="flex cursor-pointer shadow-md shadow-gray-200 bg-gray-100 gap-4 p-3 rounded-2xl m-3"
            >
              <div className="flex-col">
                <div className="flex shrink-0 aspect-square object-cover">
                  <PlaceImg place={place} className={'rounded-2xl object-cover aspect-square'}/>
                </div>
                <div className="">
                  <h2 className="text-xl mt-3">{place.title}</h2>
                  <p className="text-md mt-2"> {place.address}</p>
                </div>
              </div>
            </Link>
          ))}
      </div>

      <div className="text-center mt-10">
        <Link
          className="inline-flex gap-1 bg-primary text-white py-2 px-6 rounded-full"
          to={"/account/places/new"}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path
              fillRule="evenodd"
              d="M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z"
              clipRule="evenodd"
            />
          </svg>
          Add new place
        </Link>
      </div>
    </div>
  );
}
