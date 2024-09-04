"use client";

import React, { useState, useEffect } from "react";
import { Container } from "./Container";

interface Card {
  description: string;
  image: string;
}

const cards: Card[] = [
  {
    description: "This is the first card",
    image: "https://cdn.dooca.store/149698/files/03-5.png?v=1719859127&webp=0",
  },
  {
    description: "This is the second card",
    image: "https://cdn.dooca.store/149698/files/04-3.png?v=1719859083&webp=0",
  },
  {
    description: "This is the third card",
    image: "https://cdn.dooca.store/149698/files/01-4.png?v=1719859039&webp=0",
  },
  {
    description: "This is the fourth card",
    image: "https://cdn.dooca.store/149698/files/05-3.png?v=1719859046&webp=0",
  },
  {
    description: "This is the fifth card",
    image: "https://cdn.dooca.store/149698/files/02-9.png?v=1719859069&webp=0",
  },
  // Adicione mais cards conforme necessário
];
export const CarouselCardImage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardsPerPage = 4;

  const totalCards = [...cards, ...cards, ...cards].length;
  const totalPages = Math.ceil(cards.length / cardsPerPage);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalCards);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalCards) % totalCards);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const startIndex = currentIndex;

  return (
    <Container>
      <div className="relative w-full overflow-hidden">
        {/* Carousel wrapper */}
        <div
          className="carousel-wrapper flex transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${
              (100 / cardsPerPage) * (currentIndex % totalCards)
            }%)`,
          }}
        >
          {[...cards, ...cards, ...cards].map((card, index) => (
            <div
              key={index}
              className="carousel-slide flex-shrink-0 h-[420px] rounded-lg w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5"
            >
              <img
                src={card.image}
                alt={card.description}
                className="w-full h-full object-cover rounded-t-lg"
              />
            </div>
          ))}
        </div>
        {/* Slider indicators */}
        <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              type="button"
              className={`w-3 h-3 rounded-full ${
                Math.floor(currentIndex / cardsPerPage) === i
                  ? "bg-blue-600"
                  : "bg-gray-300"
              }`}
              onClick={() => setCurrentIndex(i * cardsPerPage)}
            />
          ))}
        </div>
      </div>
    </Container>
  );
};
