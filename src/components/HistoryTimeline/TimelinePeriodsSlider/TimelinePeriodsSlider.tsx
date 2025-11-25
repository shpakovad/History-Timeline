
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { ITimePeriod } from "@data/timelineData";
import {useClickCircle} from "@/hooks/useClickCircle";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import "./TimelinePeriodsSlider.scss";



interface IProps {
  activePeriod: ITimePeriod;
}

const TimelinePeriodsSlider = ({ activePeriod }: IProps) => {
  const events = activePeriod.events;

    const { showClickCircle, ClickCircleComponent } = useClickCircle();
    const handleTouchStart = (swiper: any) => {
        const { touches:{ startX, startY } } = swiper;
        showClickCircle({
            position:{x:startX, y:startY}
        });
    };



  return (
    <div className="wrapper-time-line-periods">

        <ClickCircleComponent/>
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        freeMode={true}
        navigation={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="dates-swiper"

        onTouchStart={handleTouchStart}

      >
        {events.map((event, index) => (
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
