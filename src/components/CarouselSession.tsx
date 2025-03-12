"use client";

import React, { useState, useEffect } from "react";

export const CarouselSession = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const data = [
    {
      imageBackground:
        "https://cdn.dooca.store/149698/files/desktop-03.jpg?v=1724077504&webp=0",
      imageBackgroundMobile:
        "https://cdn.dooca.store/149698/files/mobile-03.jpg?v=1724077517&webp=0",
    },
    {
      imageBackground:
        "https://cdn.dooca.store/149698/files/banner-desktop.jpg?v=1724781287&webp=0",
      imageBackgroundMobile:
        "https://cdn.dooca.store/149698/files/banner-mobile.png?v=1724781289&webp=0",
    },
    {
      imageBackground:
        "https://cdn.dooca.store/149698/files/1908-banner-sports-club-2.jpg?v=1724336385&webp=0",
      imageBackgroundMobile:
        "https://cdn.dooca.store/149698/files/mobile-22.png?v=1724336383&webp=0",
    },
  ];

  const goToSlide = (index: number): void => {
    setCurrentIndex(index);
  };

  const goToNextSlide = (): void => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
  };

  const goToPrevSlide = (): void => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + data.length) % data.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      goToNextSlide();
    }, 3000); // Muda de slide a cada 3 segundos

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="">
      <div id="default-carousel" className="relative w-full pt-24">
        {/* Carousel wrapper */}
        <div className=" md:h-[472px] lg:h-[70vh] sm:h-[80vh] h-[60vh] overflow-hidden">
          {data.map((slide, index) => (
            <div
              key={index}
              className={`absolute duration-700 ease-in-out w-full h-full top-0 left-0 ${
                index === currentIndex ? "block" : "hidden"
              }`}
              data-carousel-item={index === currentIndex}
            >
              <img
                src={slide.imageBackground}
                className="hidden sm:block   w-full h-full object-cover"
                alt={`Slide ${index + 1}`}
              />
              <img
                src={slide.imageBackgroundMobile}
                className="sm:hidden block w-full h-full object-cover"
                alt={`Slide ${index + 1}`}
              />
            </div>
          ))}
        </div>

        {/* Slider indicators */}
        <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3">
          {data.map((_, index) => (
            <button
              key={index}
              type="button"
              className={`w-3 h-3 rounded-full ${
                index === currentIndex ? "bg-white" : "bg-gray-400"
              }`}
              aria-current={index === currentIndex}
              aria-label={`Slide ${index + 1}`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>

        {/* Slider controls */}
        <button
          type="button"
          className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          onClick={goToPrevSlide}
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 1 1 5l4 4"
              />
            </svg>
            <span className="sr-only">Previous</span>
          </span>
        </button>
        <button
          type="button"
          className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          onClick={goToNextSlide}
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
            <span className="sr-only">Next</span>
          </span>
        </button>
      </div>
    </div>
  );
};
