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
  Autoplay, // Importando o módulo Autoplay
} from "swiper/modules";
import { CarouselPaginate } from "./CarouselPaginate";

interface Card {
  description: string;
  image: string;
  name: string;
  price: string;
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
    image:
      "https://cdn.dooca.store/149698/products/qwhbsbi78zi593h9zokmrgiyn1yvfk7k8a3q_600x900+crop_center.png?v=1724873882",
    name: "Top Moviment Azul Bic",
    price: "ESGOTADO",
  },
  {
    description: "This is the second card",
    image:
      "https://cdn.dooca.store/149698/products/pmclh38ps7xl5261a1bkfel2bw2lpf9wh0ta_600x900+crop_center.png?v=1724873823",
    name: "Short Move Love Bic",
    price: "R$ 179,00",
  },
  {
    description: "This is the third card",
    image:
      "https://cdn.dooca.store/149698/products/iohhlbhy1nyrfx6r5qgcuwjopf1xncbxrjip_600x900+crop_center.png?v=1724873809",
    name: "Top Classic Love Bic",
    price: "R$ 49,00",
  },
  {
    description: "This is the fourth card",
    image:
      "https://cdn.dooca.store/149698/products/1exp2kpapopryubvixq6glxigso5jczpfwqd_600x900+crop_center.png?v=1724873851",
    name: "Top Classic Azul Bic",
    price: "R$ 228,00",
  },
  {
    description: "This is the fifth card",
    image:
      "https://cdn.dooca.store/149698/products/cktq75ifdnplxkyupa3erdil4grpckq69jyf_600x900+crop_center.png?v=1724873897",
    name: "Calça Legging Move Azul Bic",
    price: "R$ 25,00",
  },
];
const data = {
  title: "new blue",
  cards,
};

export const CorouselAnimateHover = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [swiper, setSwiper] = useState<any>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [lastIndex, setLastIndex] = useState(0);
  const totalCards = cards.length;
  const [hideNext, setHideNext] = useState(false);

  const handleSlideTo = async (init: any, range: any, hasMore: any) => {
    const breakpoints = swiperBreakpoints;
    const currentBreakpoint = swiper.currentBreakpoint;
    const perPage = breakpoints[currentBreakpoint]?.slidesPerView;

    if (cards.length > range || !hasMore) {
      swiper.slideTo(init - 1);

      if (range >= perPage * cards.length) {
        setHideNext(true);
      } else {
        setHideNext(false);
      }
      return;
    }

    swiper.slideTo(init - 1);

    if (range >= perPage * 6) {
      setHideNext(true);
    } else {
      setHideNext(false);
    }
  };

  // Atualizar a paginação com base no slide ativo
  useEffect(() => {
    if (swiper) {
      // Se o índice ativo for maior que o número de cards, reseta para o primeiro
      if (swiper.realIndex >= totalCards) {
        setCurrentIndex(0); // Volta para o primeiro item na paginação
      } else {
        setCurrentIndex(swiper.realIndex); // Atualiza o índice atual
      }
    }
  }, [activeIndex, swiper]);
  return (
    <Container>
      <div className="flex items-center w-full justify-center mb-8">
        <h1 className="font-semibold text-3xl tracking-[0.5rem]">
          {data.title}
        </h1>
      </div>
      <div className="relative w-full px-8">
        <Swiper
          spaceBetween={20}
          slidesPerView={3}
          breakpoints={swiperBreakpoints}
          onResize={(e) => {
            setLastIndex(e.snapGrid.length - 1);
            setSwiper(e);
          }}
          onSlideChange={(e) => {
            setActiveIndex(e.realIndex); // Atualiza o índice ativo
            setLastIndex(e.snapGrid.length - 1);
            setSwiper(e);
            if (e.snapIndex === e.snapGrid.length - 1) {
              // fetchData();
            }
          }}
          onSwiper={(e) => {
            setActiveIndex(e.realIndex);
            setLastIndex(e.snapGrid.length - 1);
            setSwiper(e);
          }}
          modules={[
            Navigation,
            Pagination,
            Scrollbar,
            A11y,
            EffectCards,
            Autoplay,
          ]} // Inclui o Autoplay
          loop={true}
          autoplay={{
            delay: 3000, // Intervalo de tempo entre os slides
            disableOnInteraction: false, // Continua mesmo após interação
          }}
        >
          {cards.map((item) => (
            <SwiperSlide key={item.description}>
              <div className="flex flex-col justify-center transition-transform transform hover:-translate-y-2 cursor-pointer z-10">
                <img
                  className="w-full rounded-3xl"
                  src={item.image}
                  alt={item.description}
                />
                <div className="w-full pt-4">
                  <h6 className="font-bold text-lg">{item.name}</h6>
                  <p className="font-light text-base">{item.price}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Slider indicators */}
        {cards.length > 0 && (
          <CarouselPaginate
            isAnimate
            total={cards.length}
            swiper={swiper}
            breakpoints={swiperBreakpoints}
            active={activeIndex} // Passa o slide ativo atual
            currentId={currentIndex}
            setCurrentId={setCurrentIndex}
            onClick={handleSlideTo}
          />
        )}
        <button
          type="button"
          className="absolute top-0 left-0 z-30 flex items-center justify-center h-full ml-[-10px] cursor-pointer group focus:outline-none"
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              className="w-4 h-8 dark:text-white text-gray-800 rtl:rotate-180"
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
          className="absolute top-0 right-0 z-30 flex items-center justify-center mr-[-10px] h-full cursor-pointer group focus:outline-none"
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              className="w-4 h-8 dark:text-white text-gray-800 rtl:rotate-180"
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
    </Container>
  );
};
