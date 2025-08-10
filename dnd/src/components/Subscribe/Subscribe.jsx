import React from "react";

const Subscribe = ({ handleOrderPopup }) => {
  return (
    <div
      data-aos="zoom-in"
      className="mb-20 bg-slate-700 dark:bg-gray-800 text-white"
    >
      <div className="container backdrop-blur-sm py-10">
        <div className="space-y-6 max-w-xl mx-auto text-center">
          <h1 className="text-2xl sm:text-4xl font-semibold">
            Join Today To Grow Together
          </h1>

          {/* Join Now button with volcano color and larger size */}
          <button
            data-aos="zoom-in"
            onClick={handleOrderPopup}
            className="bg-[#fa541c] text-white py-4 px-6 rounded-full mt-4 
              w-[384px] text-lg font-semibold
              transition-transform duration-300 ease-in-out 
              hover:scale-105 hover:bg-white hover:text-[#fa541c] shadow-lg"
          >
            Join Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
