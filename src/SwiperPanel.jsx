import clsx from "clsx";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./index.css";
import Content from "./Content";

const SwiperPanel = ({ data }) => {
  return (
    <Swiper
      style={{
        "--swiper-pagination-color": "#5C3CAF",
        "--swiper-pagination-bullet-inactive-color": "#D8D8D8",
        "--swiper-pagination-bullet-inactive-opacity": "1",
        "--swiper-pagination-bullet-size": "10px",
        "--swiper-pagination-bullet-horizontal-gap": "12px",
      }}
      modules={[Pagination]}
      slidesPerView={1}
      navigation={true}
      pagination={{
        enabled: true,
        clickable: true,
      }}
    >
      {data.map((swipeData) => {
        return (
          <SwiperSlide key={swipeData.titleText}>
            <div
              className={clsx(
                "px-[20px] pb-[50px] pt-[60px]",
                swipeData.bgColor
              )}
            >
              <Content
                bgColor={swipeData.bgColor}
                number={swipeData.number}
                numberColor={swipeData.numberColor}
                titleText={swipeData.titleText}
                underlineColor={swipeData.underlineColor}
                description={swipeData.description}
                descriptionColor={swipeData.descriptionColor}
              />
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default SwiperPanel;
