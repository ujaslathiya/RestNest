import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function IndexPage() {
  const [hplaces, setHplaces] = useState([]);

  useEffect(() => {
    axios.get("/places").then((res) => {
      setHplaces(res.data);
    });
  }, []);

  return (
    <div className=" mt-4 gap-6 gap-y-8 border-t border-gray-300 pt-5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {hplaces.length > 0 &&
        hplaces.map((hplace) => (
          <Link to={'/place/'+hplace._id} key={hplace._id}>
            <div className="rounded-2xl mb-2 bg-gray-500 flex">
              {hplace.photos?.[0] && (
                <img
                  className="rounded-2xl object-cover aspect-square"
                  src={"http://localhost:4000/uploads/" + hplace.photos?.[0]}
                  alt=""
                />
              )}
            </div>
            <h2 className="font-bold">{hplace.address}</h2>
            <h3 className="text-lg truncate text-gray-500 ">{hplace.title}</h3>
            <div className="mt-2 font-medium">
              <span className="font-bold"> ${hplace.price} </span> per night
            </div>
          </Link>
        ))}
    </div>
  );
}
