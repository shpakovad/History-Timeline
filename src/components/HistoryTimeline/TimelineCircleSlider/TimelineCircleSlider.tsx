import React from "react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import TimeCirclePoint from "@components/HistoryTimeline/TimelineCircleSlider/components/TimelineCirclePoint/TimeCirclePoint";
import {ISliderProps} from "@components/HistoryTimeline/types";

import { ITimePeriod } from "@data/timelineData";

import "./TimelineCircleSlider.scss";


const TimelineCircleSlider = ({ data, onPeriodChange, activePeriod, targetRotation }: ISliderProps) => {
  return (
    <>
      {data.map((item: ITimePeriod, index: number) => (
        <TimeCirclePoint
          key={item.id}
          period={item}
          periodsLength={data.length}
          onPeriodChange={onPeriodChange}
          activePeriod={activePeriod}
          index={index}
          targetRotation={targetRotation}
        />
      ))}
    </>
  );
};

export default TimelineCircleSlider;
