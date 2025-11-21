import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "./TimelineDatesSlider.scss";

const TimelineDatesSlider = () => {
  return (
    <Swiper
      // @ts-ignore
      // onSwiper={setThumbsSwiper}
      spaceBetween={30}
      slidesPerView={3}
      freeMode={true}
      navigation={true}
      watchSlidesProgress={true}
      modules={[FreeMode, Navigation, Thumbs]}
      className="dates-swiper"
    >
      <SwiperSlide>10</SwiperSlide>
      <SwiperSlide>20</SwiperSlide>
      <SwiperSlide>30</SwiperSlide>
      <SwiperSlide>40</SwiperSlide>
      <SwiperSlide>50</SwiperSlide>
    </Swiper>
  );
};

export default TimelineDatesSlider;
