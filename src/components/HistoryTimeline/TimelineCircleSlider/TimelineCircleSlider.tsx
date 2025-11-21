import { ITimePeriod } from "@data/timelineData";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import TimeCirclePoint from "./TimeCirclePoint";
import "./TimelineCircleSlider.scss";

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
