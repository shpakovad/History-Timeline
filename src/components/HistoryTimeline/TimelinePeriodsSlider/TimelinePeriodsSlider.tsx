
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { ITimePeriod } from "@data/timelineData";
import {useClickCircle} from "@/hooks/useClickCircle";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import "./TimelinePeriodsSlider.scss";
import SwiperEvent from "swiper";



interface IProps {
  activePeriod: ITimePeriod;
}

const TimelinePeriodsSlider = ({ activePeriod }: IProps) => {
  const events = activePeriod.events;

    const { showClickCircle, ClickCircleComponent } = useClickCircle();
    const handleTouchStart = (swiper: SwiperEvent) => {
        const { touches:{ startX, startY } } = swiper;
        showClickCircle({
            position:{x:startX, y:startY}
        });
    };

    const handleButtonPosition = (swiper: any, isNext = true) =>
    {
        const element = isNext ? swiper.navigation.nextEl : swiper.navigation.prevEl;
        const  sizes = element.getBoundingClientRect();
        const { x, y } = sizes;

        showClickCircle({
            position:{x: x+20, y: y+20},
            size:{width:50,height:50}
        });
    }



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
        onNavigationNext={(swiper)=>handleButtonPosition(swiper)}
        onNavigationPrev={(swiper)=>handleButtonPosition(swiper, false)}
        onTouchStart={handleTouchStart}
      >
        {events.map((event) => (
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
