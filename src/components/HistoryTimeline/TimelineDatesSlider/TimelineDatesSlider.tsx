import { ITimePeriod } from "@data/timelineData";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "./TimelineDatesSlider.scss";

interface IProps {
  activePeriod: ITimePeriod;
}

const TimelineDatesSlider = ({ activePeriod }: IProps) => {
  console.log(activePeriod);
  const events = activePeriod.events;
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
      {events.map(event => (
        <SwiperSlide key={event.year}>
          <div className="year">{event.year}</div>
          <div className="description">{event.description}</div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default TimelineDatesSlider;
