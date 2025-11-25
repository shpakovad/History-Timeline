import React from "react";

import { ITimePeriod } from "@data/timelineData";

import TimeCirclePoint from "./components/TimelineCirclePoint/TimeCirclePoint";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import "./TimelineCircleSlider.scss";


interface IProps {
  data: ITimePeriod[];
  onPeriodChange: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, period: ITimePeriod) => void;
  activePeriod: ITimePeriod | null;
  targetRotation: number;
}


const TimelineCircleSlider = ({ data, onPeriodChange, activePeriod, targetRotation }: IProps) => {
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
