import React, { useState } from "react";
import Img1 from "../../assets/women/women.png";
import Img2 from "../../assets/women/women2.png";
import Img3 from "../../assets/women/women3.png";
import Img4 from "../../assets/women/women4.png";
import Img5 from "../../assets/women/women5.png";
import Img6 from "../../assets/women/women7.png";
import Img7 from "../../assets/women/women8.png";
import Img8 from "../../assets/women/women9.png";
import Img9 from "../../assets/women/women9.png";
import Img10 from "../../assets/women/women10.png";

const ProductsData = [
  { id: 1, img: Img1 },
  { id: 2, img: Img2 },
  { id: 3, img: Img3 },
  { id: 4, img: Img4 },
  { id: 5, img: Img5 },
  { id: 6, img: Img6 },
  { id: 7, img: Img7 },
  { id: 8, img: Img8 },
  { id: 9, img: Img9 },
  { id: 10, img: Img10 },
];

const Products = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleSeeAllClick = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="mt-14 mb-12">
      <div className="container">
        {/* Header section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p className="text-sm text-primary">
            Together, we make your dreams come true.
          </p>
          <h1 className="text-3xl font-bold">Achievers</h1>
          <p className="text-xs text-gray-400">
            Top Contributors to Your Events
          </p>
        </div>

        {/* Grid Section - Show Only First 5 Images */}
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
          {ProductsData.slice(0, 5).map((data) => (
            <div key={data.id}>
              <img
                src={data.img}
                alt={`participant-${data.id}`}
                className="h-[220px] w-[150px] object-cover rounded-md"
              />
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="flex justify-center">
          <button
            onClick={handleSeeAllClick}
            className="text-center mt-10 cursor-pointer bg-primary text-white py-1 px-5 rounded-md"
          >
            See All Achievers
          </button>
        </div>
      </div>

      {/* Popup Modal with All 10 Images */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 px-4 py-8">
          <div className="bg-white p-6 rounded-lg max-w-6xl w-full relative overflow-y-auto max-h-[90vh]">
            {/* Close Button */}
            <button
              onClick={closePopup}
              className="absolute top-4 right-4 text-white bg-red-500 rounded-full px-3 py-1 text-sm hover:bg-red-600"
            >
              ✕
            </button>

            <h2 className="text-center text-2xl font-bold mb-6">
              All Achievers
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
              {ProductsData.map((data) => (
                <div key={data.id}>
                  <img
                    src={data.img}
                    alt={`participant-${data.id}`}
                    className="h-[200px] w-full object-cover rounded-md"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Products;
