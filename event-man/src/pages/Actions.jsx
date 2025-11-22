
import React, { useState } from "react";
import Video from "../assets/images/Video.mp4";
import SampleImage from "../assets/images/Rectangle 77.png";

const Actions = () => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center p-6">
      {!showDetails ? (
        <>
          <h1 className="text-4xl font-bold text-center">
            Clients <span className="text-purple-600">in Action</span>
          </h1>
          <p className="text-center max-w-xl mt-4">
            See how the popular event planning business based around the pop-up picnic industry, The Table Service, uses SimplyBook.me for their business.
          </p>

          <div className="mt-8 relative w-full max-w-xl bg-gray-900 rounded-xl shadow-purple-700 flex flex-col items-center">
            <div className="absolute top-2 left-2 text-sm text-purple-400 font-semibold">
              Watch Video
            </div>
            <video width="100%" controls className="rounded-2xl">
              <source src={Video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            <button
              onClick={() => setShowDetails(true)}
              className="bg-purple-600/80 mt-4 text-white px-4 py-3 rounded-xl hover:shadow-2xl hover:shadow-purple-500/50 transition"
            >
              Read More
            </button>
          </div>
        </>
      ) : (
        <div className="flex flex-col items-center">
          <h2 className="text-3xl font-bold mt-6">Details Page</h2>
          <p className="text-gray-700 mt-2 mb-4 text-center">
            Here is some text for the details page. You can put any content here.
          </p>
          <img
            src={SampleImage}
            alt="Details"
            className="w-full max-w-md rounded-lg shadow-lg"
          />
          <button
            onClick={() => setShowDetails(false)}
            className="btn mt-6 bg-red-400 hover:shadow-md"
          >
            Back
          </button>
        </div>
      )}
    </div>
  );
};

export default Actions;
