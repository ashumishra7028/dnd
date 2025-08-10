import React from "react";
import Slider from "react-slick";

const TestimonialData = [
  {
    id: 1,
    name: "Hip-hop",
    text: "A dynamic street dance style that emerged from hip-hop culture in the 1970s. Known for freestyle, popping, locking, and breaking.",
    img: "https://picsum.photos/201/201",
  },
  {
    id: 2,
    name: "Kathak",
    text: "A classical Indian dance form known for storytelling through intricate footwork, spins, and expressive gestures.",
    img: "https://picsum.photos/202/202",
  },
  {
    id: 3,
    name: "Bharatanatyam",
    text: "One of the oldest classical dance forms of India, characterized by fixed upper torso, bent legs, and expressive hand gestures.",
    img: "https://picsum.photos/203/203",
  },
  {
    id: 4,
    name: "Breakdance",
    text: "Also known as breaking, this acrobatic dance style is part of hip-hop and involves toprock, downrock, power moves, and freezes.",
    img: "https://picsum.photos/204/204",
  },
  {
    id: 5,
    name: "Contemporary",
    text: "A fusion of modern, jazz, lyrical, and classical ballet styles, known for emotion, fluidity, and floor work.",
    img: "https://picsum.photos/205/205",
  },
];

const Testimonials = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="py-10 mb-10">
      <div className="container">
        {/* header section */}
        <div className="text-center  mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-sm text-primary">
            What Our Students Are Saying
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Testimonials
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
            Dance is more than movement — it's expression, connection, and freedom.
          </p>
        </div>

        {/* Testimonial cards */}
        <div data-aos="zoom-in">
          <Slider {...settings}>
            {TestimonialData.map((data) => (
              <div className="my-6">
                <div
                  key={data.id}
                  className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl dark:bg-slate-600  bg-primary/10 relative"
                >
                  <div className="mb-4">
                    <img
                      src={data.img}
                      alt=""
                      className="rounded-full w-20 h-20"
                    />
                  </div>
                  <div className="flex flex-col items-center gap-4">
                    <div className="space-y-3">
                      <p className="text-xs dark:text-slate-300 text-gray-500">
                        {data.text}
                      </p>
                      <h1 className="text-xl font-bold dark:text-slate-300 text-black/80 dark:text-light">
                        {data.name}
                      </h1>
                    </div>
                  </div>
                  <p className="text-black/20  text-9xl font-serif absolute top-0 right-0"></p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
