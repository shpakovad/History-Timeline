import { ITimePeriod } from "@data/timelineData";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import TimeCirclePoint from "./components/TimelineCirclePoint/TimeCirclePoint";
import "./TimelineCircleSlider.scss";

interface IProps {
  data: ITimePeriod[];
  onPeriodChange: (period: ITimePeriod) => void;
  activePeriod: ITimePeriod | null;
}

const TimelineCircleSlider = ({ data, onPeriodChange, activePeriod }: IProps) => {

  return (
    <div>
      {data.map((item: ITimePeriod) => (
        <TimeCirclePoint
          key={item.id}
          period={item}
          periodsLength={data.length}
          onPeriodChange={onPeriodChange}
          activePeriod={activePeriod}
        />
      ))}
    </div>
  );
};

export default TimelineCircleSlider;
