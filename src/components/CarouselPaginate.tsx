"use client";
import { useEffect, useState } from "react";

interface CarouselPaginateProps {
  swiper: any;
  total: number;
  breakpoints: any;
  active: any;
  onClick: (props1: any, props2: any, props3: any) => any;
  currentId: number;
  setCurrentId: (number: number) => void;
  isAnimate?: boolean;
}

export const CarouselPaginate = ({
  swiper,
  total,
  breakpoints,
  active,
  onClick,
  currentId = 1,
  setCurrentId,
  isAnimate,
}: CarouselPaginateProps) => {
  const [ids, setIds] = useState<
    { id: number; initRange: number; range: number }[]
  >([]);
  const [hasMore, setHasMore] = useState(true);
  const [resized, setResized] = useState(true);
  const handleClick = (init: any, range: any, notChangeHansMore?: any) => {
    onClick(init, range, hasMore);
    if (!notChangeHansMore) {
      setHasMore(false);
    }
  };

  const resize = () => {
    setResized((prev) => !prev);
  };

  useEffect(() => {
    if (!!swiper) {
      let pages = Math.ceil(
        total / breakpoints[swiper.currentBreakpoint].slidesPerView
      );

      if (pages > 1) {
        let temp = [];

        for (let i = 1; i <= pages; i++) {
          const range = i * breakpoints[swiper.currentBreakpoint].slidesPerView;

          const initRange =
            range - (breakpoints[swiper.currentBreakpoint].slidesPerView - 1);
          temp.push({ id: i, initRange, range });
        }
        setIds(temp);
        handleClick(temp[0].initRange, temp[0].range, true);
      } else {
        setIds([]);
      }
    }
  }, [swiper, total, resized]);
  useEffect(() => {
    if (!!swiper) {
      for (const id of ids) {
        const range = id.range + 1 - id.initRange;
        if (active + range >= id.initRange && active + range <= id.range) {
          setCurrentId(id.id);
          break;
        }
      }
    }
  }, [active]);
  return (
    <div
      className={`absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse ${
        isAnimate ? "bottom-[-28px]" : ""
      }`}
    >
      {ids.map((item, i) => {
        return (
          <button
            key={i}
            type="button"
            className={`w-3 h-3 rounded-full ${
              currentId === item.id ? "bg-blue-600" : "bg-gray-300"
            }`}
            onClick={() => handleClick(item?.initRange, item.range)}
          />
        );
      })}
    </div>
  );
};
