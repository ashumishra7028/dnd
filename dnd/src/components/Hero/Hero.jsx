import React, { useState } from "react";
import Slider from "react-slick";

import Image1 from "../../assets/hero/women.png";
import Image2 from "../../assets/hero/shopping.png";
import Image3 from "../../assets/hero/sale.png";

import Image4 from "../../assets/Season1/dnd1/1.png";
import Image5 from "../../assets/Season1/dnd1/2.png";
import Image6 from "../../assets/Season1/dnd1/3.png";
import Image7 from "../../assets/Season1/dnd1/4.png";
import Image8 from "../../assets/Season1/dnd1/5.png";
import Image9 from "../../assets/Season1/dnd1/6.png";
import Image10 from "../../assets/Season1/dnd1/7.png";
import Image11 from "../../assets/Season1/dnd1/8.png";
import Image12 from "../../assets/Season1/dnd1/9.png";
import Image13 from "../../assets/Season1/dnd1/10.png";
import Image14 from "../../assets/Season1/dnd1/11.png";
import Image15 from "../../assets/Season1/dnd1/12.png";
import Image16 from "../../assets/Season1/dnd1/13.png";
import Image17 from "../../assets/Season1/dnd1/14.png";

import Image18 from "../../assets/Season1/dnd2/new1.png";
import Image19 from "../../assets/Season1/dnd2/new2.png";
import Image20 from "../../assets/Season1/dnd2/new3.png";
import Image21 from "../../assets/Season1/dnd2/new4.png";
import Image22 from "../../assets/Season1/dnd2/new5.png";
import Image23 from "../../assets/Season1/dnd2/new6.png";
import Image24 from "../../assets/Season1/dnd2/new7.png";
import Image25 from "../../assets/Season1/dnd2/new8.png";
import Image26 from "../../assets/Season1/dnd2/new9.png";
import Image27 from "../../assets/Season1/dnd2/new10.png";

import Image28 from "../../assets/Season1/dnd3/1.png";
import Image29 from "../../assets/Season1/dnd3/2.png";
import Image30 from "../../assets/Season1/dnd3/3.png";
import Image31 from "../../assets/Season1/dnd3/4.png";
import Image32 from "../../assets/Season1/dnd3/5.png";
import Image33 from "../../assets/Season1/dnd3/6.png";
import Image34 from "../../assets/Season1/dnd3/7.png";
import Image35 from "../../assets/Season1/dnd3/8.png";
import Image36 from "../../assets/Season1/dnd3/9.png";
import Image37 from "../../assets/Season1/dnd3/10.png";

const sliderImages = [
  {
    id: "season2",
    img: Image1,
    title: "✨ Season 2",
    description:
      "A dazzling fusion of dance styles from around the world. Season 2 united passion, rhythm, and movement on one stage.",
  },
  {
    id: "season3",
    img: Image2,
    title: "🌟 Season 3",
    description:
      "A graceful tribute to Indian heritage. Season 3 celebrated the soul of culture through classical and folk dance forms.",
  },
  {
    id: "season1",
    img: Image3,
    title: "🔥 Season 1",
    description:
      "The beginning of our dance journey! Season 1 lit the stage with raw energy, diverse styles, and unforgettable moments.",
  },
];

// === Gallery image groups ===
const galleryImages1 = [
  { id: 1, img: Image4 },
  { id: 2, img: Image5 },
  { id: 3, img: Image6 },
  { id: 4, img: Image7 },
  { id: 5, img: Image8 },
  { id: 6, img: Image9 },
  { id: 7, img: Image10 },
  { id: 8, img: Image11 },
  { id: 9, img: Image12 },
  { id: 10, img: Image13 },
  { id: 11, img: Image14 },
  { id: 12, img: Image15 },
  { id: 13, img: Image16 },
  { id: 14, img: Image17 },
];

const galleryImages2 = [
  { id: 1, img: Image18 },
  { id: 2, img: Image19 },
  { id: 3, img: Image20 },
  { id: 4, img: Image21 },
  { id: 5, img: Image22 },
  { id: 6, img: Image23 },
  { id: 7, img: Image24 },
  { id: 8, img: Image25 },
  { id: 9, img: Image26 },
  { id: 10, img: Image27 },
];

const galleryImages3 = [
  { id: 1, img: Image28 },
  { id: 2, img: Image29 },
  { id: 3, img: Image30 },
  { id: 4, img: Image31 },
  { id: 5, img: Image32 },
  { id: 6, img: Image33 },
  { id: 7, img: Image34 },
  { id: 8, img: Image35 },
  { id: 9, img: Image36 },
  { id: 10, img: Image37 },
];

const Hero = () => {
  const [showGalleryPopup, setShowGalleryPopup] = useState(false);
  const [selectedSeason, setSelectedSeason] = useState(null);

  const openGallery = (seasonId) => {
    setSelectedSeason(seasonId);
    setShowGalleryPopup(true);
  };

  const closeGallery = () => {
    setShowGalleryPopup(false);
    setSelectedSeason(null);
  };

  const getGalleryImages = () => {
    switch (selectedSeason) {
      case "season1":
        return galleryImages1;
      case "season2":
        return galleryImages2;
      case "season3":
        return galleryImages3;
      default:
        return [];
    }
  };

  const heroSliderSettings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };

  return (
    <div className="relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center dark:bg-slate-950 dark:text-white duration-200">
      {/* Background shape */}
      <div className="h-[700px] w-[700px] bg-primary/40 absolute -top-1/2 right-0 rounded-3xl rotate-45 -z-[8]"></div>

      {/* Hero section */}
      <div className="container pb-8 sm:pb-0">
        <Slider {...heroSliderSettings}>
          {sliderImages.map((data) => (
            <div key={data.id}>
              <div className="grid grid-cols-1 sm:grid-cols-2">
                {/* Text section */}
                <div className="flex flex-col justify-center gap-4 pt-12 text-center sm:text-left order-2 sm:order-1 z-10">
                  <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold">
                    {data.title}
                  </h1>
                  <p className="text-sm max-w-[450px]">{data.description}</p>

                  <button
                    onClick={() => openGallery(data.id)}
                    className="bg-gradient-to-r from-primary to-secondary text-white px-4 py-2 text-sm rounded hover:scale-105 duration-200 w-[160px]"
                  >
                    ✨ Explore Your Journey
                  </button>
                </div>

                {/* Image */}
                <div className="order-1 sm:order-2">
                  <img
                    src={data.img}
                    alt={data.title}
                    className="w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] object-contain mx-auto"
                  />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* Gallery Popup */}
      {showGalleryPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 px-4 py-8">
          <div className="bg-white dark:bg-slate-900 p-6 rounded-lg w-full max-w-6xl relative max-h-[90vh] overflow-y-auto">
            {/* Close Button */}
            <button
              onClick={closeGallery}
              className="absolute top-3 right-3 bg-red-500 text-white px-3 py-1 rounded-full"
            >
              Close
            </button>

            <h2 className="text-center text-2xl font-bold mb-6 text-black dark:text-white">
              {selectedSeason?.toUpperCase()} Gallery
            </h2>

            {/* Image Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
              {getGalleryImages().map((item) => (
                <div key={item.id} className="text-center">
                  <img
                    src={item.img}
                    alt={`Gallery ${item.id}`}
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

export default Hero;
