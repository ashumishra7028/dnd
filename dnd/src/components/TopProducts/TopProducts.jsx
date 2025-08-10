import React from "react";
import Img1 from "../../assets/Choreography/Choreography1.png";
import Img2 from "../../assets/Choreography/Choreography2.png";
import Img3 from "../../assets/Choreography/Choreography.png";
import { FaStar } from "react-icons/fa";

const ProductsData = [
  {
    id: 1,
    img: Img1,
    description: "Every step tells a story — your movement brings it to life.",
  },
  {
    id: 2,
    img: Img2,
    description:
      "In every beat, in every move — the soul of the dancer is revealed.",
  },
  {
    id: 3,
    img: Img3,
    description:
      "In every beat, in every move — the soul of the dancer is revealed.",
  },
];

const TopProducts = ({ handleOrderPopup }) => {
  return (
    <div>
      <div className="container">
        {/* Header section */}
        <div className="text-center mb-24">
          <p data-aos="fade-up" className="text-sm text-primary">
            Together, We Bring Every Step to Life
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Choreographer
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
            Your energy, your passion — the heartbeat of every performance.
          </p>
        </div>

        {/* Body section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 place-items-center">
          {ProductsData.map((data) => (
            <div
              key={data.id}
              data-aos="zoom-in"
              className="rounded-2xl bg-white dark:bg-gray-800 hover:bg-black/80 dark:hover:bg-primary hover:text-white relative shadow-xl duration-300 group max-w-[300px]"
            >
              {/* image section */}
              <div className="h-[100px]">
                <img
                  src={data.img}
                  alt={data.title}
                  className="max-w-[140px] block mx-auto transform -translate-y-20 group-hover:scale-105 duration-300 drop-shadow-md"
                />
              </div>

              {/* details section */}
              <div className="p-4 text-center">
                {/* star rating */}
                <div className="w-full flex items-center justify-center gap-1">
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                </div>
                <h1 className="text-xl font-bold">{data.title}</h1>
                <p className="text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2">
                  {data.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopProducts;
