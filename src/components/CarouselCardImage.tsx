"use client";

import React, { useState, useEffect } from "react";
import { Container } from "./Container";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  A11y,
  EffectCards,
  Navigation,
  Pagination,
  Scrollbar,
} from "swiper/modules";
import { CarouselPaginate } from "./CarouselPaginate";

interface Card {
  description: string;
  image: string;
}

const swiperBreakpoints = {
  50: {
    slidesPerView: 1,
  },
  480: {
    slidesPerView: 1,
  },
  600: {
    slidesPerView: 1,
  },
  1024: {
    slidesPerView: 2,
  },
  1366: {
    slidesPerView: 3,
  },
  1600: {
    slidesPerView: 4,
  },
  1920: {
    slidesPerView: 5,
  },
} as any;

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
  const [swiper, setSwiper] = useState<any>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [lastIndex, setLastIndex] = useState(0);
  const totalCards = [...cards, ...cards, ...cards].length;
  const totalPages = Math.ceil(cards.length / cardsPerPage);
  const [hideNext, setHideNext] = useState(false);

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

  const handleSlideTo = async (init: any, range: any, hasMore: any) => {
    const breakpoints = swiperBreakpoints;
    const currentBreakpoint = swiper.currentBreakpoint;
    const perPage = breakpoints[currentBreakpoint]?.slidesPerView;

    if (cards.length > range || !hasMore) {
      swiper.slideTo(init - 1);

      if (true) {
        if (range >= perPage * cards.length) {
          setHideNext(true);
        } else {
          setHideNext(false);
        }
        return;
      } else {
        if (range >= perPage * 6) {
          setHideNext(true);
        } else {
          setHideNext(false);
        }
        return;
      }
    }

    //await getByIndex();
    swiper.slideTo(init - 1);

    if (range >= perPage * 6) {
      setHideNext(true);
    } else {
      setHideNext(false);
    }
  };

  return (
    <Container>
      <div className="relative w-full overflow-hidden">
        <Swiper
          spaceBetween={50}
          slidesPerView={3}
          breakpoints={swiperBreakpoints}
          onResize={(e) => {
            setLastIndex(e.snapGrid.length - 1);
            setSwiper(e);
          }}
          onSlideChange={(e) => {
            setActiveIndex(e.snapIndex);
            setLastIndex(e.snapGrid.length - 1);
            setSwiper(e);
            if (e.snapIndex === e.snapGrid.length - 1) {
              // fetchData();
            }
          }}
          onSwiper={(e) => {
            setActiveIndex(e.snapIndex);
            setLastIndex(e.snapGrid.length - 1);
            setSwiper(e);
          }}
          modules={[Navigation, Pagination, Scrollbar, A11y, EffectCards]}
          loop={true}
          autoplay={{
            delay: 500,
          }}
        >
          {cards.map((item) => (
            <SwiperSlide key={item.description}>
              <img src={item.image} alt={item.description} />
            </SwiperSlide>
          ))}
        </Swiper>
        {/* Slider indicators */}
        {cards.length > 0 && (
          <CarouselPaginate
            total={cards.length}
            swiper={swiper}
            breakpoints={swiperBreakpoints}
            active={activeIndex}
            onClick={handleSlideTo}
          />
        )}
      </div>
    </Container>
  );
};
