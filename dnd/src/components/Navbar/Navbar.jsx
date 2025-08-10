import React, { useState } from "react";
import { FaCaretDown } from "react-icons/fa";
import DarkMode from "./DarkMode";
import Popup from "../Popup/Popup";

import Logo from "../../assets/hero/logo.png";
import BannerImg from "../../assets/upcomeingEvent.png";

// Gallery Images
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

// Dropdown links
const DropdownLinks = [
  { id: 1, name: "DND 1", season: "season1" },
  { id: 2, name: "DND 2", season: "season2" },
  { id: 3, name: "DND 3", season: "season3" },
];

// Gallery data
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

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showGalleryPopup, setShowGalleryPopup] = useState(false);
  const [selectedSeason, setSelectedSeason] = useState(null);
  const [orderPopup, setOrderPopup] = useState(false);
  const [upcomingPopup, setUpcomingPopup] = useState(false);
  const [popupMode, setPopupMode] = useState("join"); // NEW

  const openGallery = (season) => {
    setSelectedSeason(season);
    setShowGalleryPopup(true);
  };

  const closeGallery = () => {
    setShowGalleryPopup(false);
    setSelectedSeason(null);
  };

  const getGalleryImages = () => {
    if (selectedSeason === "season1") return galleryImages1;
    if (selectedSeason === "season2") return galleryImages2;
    if (selectedSeason === "season3") return galleryImages3;
    return [];
  };

  const getGalleryTitle = () => {
    if (!selectedSeason) return "Gallery";
    return selectedSeason.replace("season", "Season ") + " Gallery";
  };

  return (
    <>
      <div className="shadow-md bg-white dark:bg-slate-800 dark:text-white relative z-40">
        <div className="bg-primary/40 py-2">
          <div className="container flex justify-between items-center">
            <a href="#" className="flex items-center gap-2">
              <img src={Logo} alt="DRA Logo" className="h-16 object-contain" />
            </a>
            <DarkMode />
          </div>
        </div>

        <div className="flex justify-center">
          <ul className="sm:flex hidden items-center gap-10 py-4 px-6 font-medium">
            <li>
              <a href="#" className="hover:text-primary duration-200 px-2">
                Home
              </a>
            </li>

            {/* Dropdown */}
            <li className="relative">
              <div
                className="flex items-center gap-1 cursor-pointer hover:text-primary duration-200"
                onClick={() => setShowDropdown((prev) => !prev)}
              >
                Previous Event
                <FaCaretDown
                  className={`transition duration-200 ${
                    showDropdown ? "rotate-180" : ""
                  }`}
                />
              </div>
              {showDropdown && (
                <div className="absolute bg-white dark:bg-slate-900 text-black dark:text-white shadow-md rounded-md mt-2 w-40 z-50">
                  <ul>
                    {DropdownLinks.map((item) => (
                      <li key={item.id}>
                        <button
                          onClick={() => {
                            openGallery(item.season);
                            setShowDropdown(false);
                          }}
                          className="w-full text-left px-4 py-2 hover:bg-primary/20 rounded-md"
                        >
                          {item.name}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>

            {/* Upcoming Event */}
            <li>
              <button
                onClick={() => setUpcomingPopup(true)}
                className="hover:text-primary duration-200 px-2"
              >
                Upcoming Event
              </button>
            </li>

            {/* Stay Tuned */}
            <li>
              <button
                onClick={() => {
                  setPopupMode("join"); // Stay Tuned mode
                  setOrderPopup(true);
                }}
                className="bg-gradient-to-r from-primary to-secondary text-white px-4 py-1 rounded-full hover:scale-105 transition duration-200"
              >
                Join Now
              </button>
            </li>
          </ul>
        </div>
      </div>

      {/* Gallery Popup */}
      {showGalleryPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 max-w-5xl w-full max-h-[90vh] overflow-y-auto relative">
            <button
              onClick={closeGallery}
              className="absolute top-2 right-2 text-2xl font-bold text-red-500 hover:text-red-700"
            >
              &times;
            </button>
            <h2 className="text-xl font-semibold mb-4 text-center">
              {getGalleryTitle()}
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {getGalleryImages().map((img) => (
                <img
                  key={img.id}
                  src={img.img}
                  alt={`Gallery ${img.id}`}
                  className="rounded-md w-full h-48 object-cover"
                />
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Upcoming Event Popup */}
      {upcomingPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 max-w-lg w-full relative">
            <button
              onClick={() => setUpcomingPopup(false)}
              className="absolute top-2 right-2 text-2xl font-bold text-red-500 hover:text-red-700"
            >
              &times;
            </button>
            <h2 className="text-xl font-semibold mb-4 text-center text-primary">
              Upcoming Event
            </h2>
            <img
              src={BannerImg}
              alt="Upcoming Event"
              className="rounded-lg w-full h-auto object-cover mb-4"
            />
            <div className="flex justify-center mt-4">
              <button
                onClick={() => {
                  setUpcomingPopup(false);
                  setPopupMode("garba"); // Garba mode
                  setOrderPopup(true);
                }}
                className="bg-gradient-to-r from-primary to-secondary text-white px-6 py-2 rounded-full hover:scale-105 transition duration-200"
              >
                Register Now
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Main Popup (for join or garba) */}
      <Popup
        orderPopup={orderPopup}
        setOrderPopup={setOrderPopup}
        mode={popupMode}
      />
    </>
  );
};

export default Navbar;
