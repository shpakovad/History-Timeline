import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { useState } from "react";

import "./TimelineCircleSlider.scss";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { ITimePeriod } from "../../../data/timelineData";
import TimeCirclePoint from "./TimeCirclePoint";

interface IProps {
  data: ITimePeriod[];
}

const TimelineCircleSlider = ({ data }: IProps) => {
  //const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div>
      {data.map((item: ITimePeriod, index) => (
        <TimeCirclePoint key={item.id} index={index} periodsLength={data.length} id={item.id} />
      ))}
    </div>
  );
};

export default TimelineCircleSlider;
