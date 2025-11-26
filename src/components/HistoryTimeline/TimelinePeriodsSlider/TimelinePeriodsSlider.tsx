import { useMemo } from "react";

import SwiperEvent from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Pagination, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import TimeCircleControls from "@components/HistoryTimeline/TimelineCircleSlider/components/TimeCircleControls/TimeCircleControls";

import { ITimePeriod } from "@data/timelineData";

import { useClickCircle } from "@/hooks/useClickCircle";

import "./TimelinePeriodsSlider.scss";

interface IProps {
  activePeriod: ITimePeriod;
  isMobile: boolean;
  onPeriodChange: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    period: ITimePeriod
  ) => void;
  data: ITimePeriod[];
}

const TimelinePeriodsSlider = ({ activePeriod, isMobile, data, onPeriodChange }: IProps) => {
  const events = activePeriod.events;

  const { showClickCircle, ClickCircleComponent } = useClickCircle();

  const modules = useMemo(
    () => (isMobile ? [Pagination] : [FreeMode, Navigation, Thumbs]),
    [isMobile]
  );

  const handleTouchStart = (swiper: SwiperEvent) => {
    const {
      touches: { startX, startY },
    } = swiper;
    const { x, y } = isMobile ? { x: startX, y: startY } : { x: startX - 10, y: startY - 20 };
    showClickCircle({
      position: { x, y },
    });
  };

  const handleButtonPosition = (swiper: SwiperEvent, isNext = true) => {
    if (isMobile) return;
    const element = isNext ? swiper.navigation.nextEl : swiper.navigation.prevEl;
    const sizes = element.getBoundingClientRect();
    const { x, y } = sizes;

    showClickCircle({
      position: { x: x + 20, y: y + 20 },
      size: { width: 50, height: 50 },
    });
  };

  const onMobilePagination = (paginationEl: HTMLElement) => {
    if (!isMobile) return;

    const element = paginationEl.querySelector(".swiper-pagination-bullet-active");
    if (element) {
      const sizes = element.getBoundingClientRect();
      const { x, y } = sizes;

      showClickCircle({
        position: { x: x + 3, y: y + 3 },
        size: { width: 20, height: 20 },
      });
    }
  };

  return (
    <div className="wrapper-time-line-periods">
      <ClickCircleComponent />

      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        freeMode={true}
        watchSlidesProgress={true}
        navigation={true}
        modules={modules}
        className="dates-swiper"
        onNavigationNext={swiper => handleButtonPosition(swiper)}
        onNavigationPrev={swiper => handleButtonPosition(swiper, false)}
        onTouchStart={handleTouchStart}
        {...(isMobile && {
          pagination: {
            clickable: true,
            renderBullet: function (index, className) {
              return `<span class="${className}"></span>`;
            },
          },
        })}
        onPaginationRender={(swiper, paginationEl) => onMobilePagination(paginationEl)}
      >
        {isMobile && (
          <TimeCircleControls
            activePoint={activePeriod.id}
            data={data}
            onPeriodChange={onPeriodChange}
          />
        )}

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
