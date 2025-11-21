import HistoricalDatesTitle from "./HistoricalDatesTitle/HistoricalDatesTitle";
import TimelineDatesSlider from "./TimelineDatesSlider/TimelineDatesSlider";
import "./HistoryTimeline.scss";
import TimelineCircleSlider from "./TimelineCircleSlider/TimelineCircleSlider";
import { getTimelineData, ITimePeriod } from "../../data/timelineData";
import { useEffect, useState } from "react";
const HistoryTimeline = () => {
  const [periods, setPeriods] = useState<ITimePeriod[]>([]);
  const [activePeriod, setActivePeriod] = useState<ITimePeriod | null>(null);

  useEffect(() => {
    const data = getTimelineData();
    setPeriods(data.periods);
    setActivePeriod(data.periods[0]);
  }, []);

  return (
    <section className="layout">
      <HistoricalDatesTitle />
      <div className="wrapper-swiper">
        <TimelineCircleSlider data={periods} />
        <TimelineDatesSlider />
      </div>
    </section>
  );
};

export default HistoryTimeline;
