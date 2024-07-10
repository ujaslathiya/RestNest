import { useState } from "react";

export default function PlaceGallery({ place }) {
  const [showAllPhotos, setShowAllPhotos] = useState(false);
  if (showAllPhotos) {
    return (
        <div className="absolute inset-0 bg-white text-black">
        <div className="bg-white grid gap-4 p-8 items-center justify-center">
          <div>
            <h2 className="text-3xl w-full text-center">Photos of {place.title}</h2>
            <button
              onClick={() => setShowAllPhotos(false)}
              className="fixed right-12 bottom-9 flex gap-1 py-2 px-4 mx-4 rounded-2xl shadow-md bg-black text-white font-medium"
            >
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
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
              Close Photos
            </button>
          </div>
          <div className="flex flex-col items-center">
            {place?.photos?.length > 0 &&
              place.photos.map((photo, index) => (
                <div key={index} className="m-6 w-full flex justify-center">
                  <img
                    className="w-3/4 h-auto object-cover shadow-md shadow-gray-600"
                    src={"http://localhost:4000/uploads/" + photo}
                    alt=""
                  />
                </div>
              ))}
          </div>
        </div>
      </div>
      
    );
  }

  return (
    <div className="relative">
      <div className="rounded-3xl overflow-hidden mt-6 grid gap-2 grid-cols-[2fr_1fr]">
        <div>
          {place.photos?.[0] && (
            <div>
              <img
                onClick={() => setShowAllPhotos(true)}
                className="aspect-square object-cover"
                src={"http://localhost:4000/uploads/" + place.photos?.[0]}
                alt=""
              />
            </div>
          )}
        </div>
        <div className="grid">
          {place.photos?.[1] && (
            <img
              onClick={() => setShowAllPhotos(true)}
              className="aspect-square object-cover"
              src={"http://localhost:4000/uploads/" + place.photos?.[1]}
              alt=""
            />
          )}
          <div className="overflow-hidden">
            {place.photos?.[2] && (
              <img
                onClick={() => setShowAllPhotos(true)}
                className="aspect-square object-cover relative top-2"
                src={"http://localhost:4000/uploads/" + place.photos?.[2]}
                alt=""
              />
            )}
          </div>
        </div>
      </div>
      <button
        onClick={() => setShowAllPhotos(true)}
        className=" flex absolute bottom-2 right-2 gap-1 py-2 px-4 bg-white shadow shadow-gray-500 rounded-2xl"
      >
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
            d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
          />
        </svg>
        Show more photos
      </button>
    </div>
  );
}
