import { useEffect, useState } from "react";

import { getTimelineData, ITimePeriod } from "@data/timelineData";

import HistoricalDatesTitle from "./HistoricalDatesTitle/HistoricalDatesTitle";
import "./HistoryTimeline.scss";
import TimelineCircleSlider from "./TimelineCircleSlider/TimelineCircleSlider";
import TimelineDatesSlider from "./TimelineDatesSlider/TimelineDatesSlider";

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
