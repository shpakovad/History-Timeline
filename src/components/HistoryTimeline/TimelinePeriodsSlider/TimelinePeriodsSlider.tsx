import { ITimePeriod } from "@data/timelineData";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "./TimelinePeriodsSlider.scss";

interface IProps {
  activePeriod: ITimePeriod;
}

const TimelinePeriodsSlider = ({ activePeriod }: IProps) => {
  const events = activePeriod.events;

  return (
    <div className="wrapper-time-line-periods">
      <Swiper
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
    </div>
  );
};

export default TimelinePeriodsSlider;
