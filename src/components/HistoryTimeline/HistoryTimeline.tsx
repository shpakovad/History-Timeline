import { useCallback, useEffect, useState } from "react";

import { getTimelineData, ITimePeriod } from "@data/timelineData";

import HistoricalDatesTitle from "./HistoricalDatesTitle/HistoricalDatesTitle";
import "./HistoryTimeline.scss";
import SelectedPeriods from "./SelectedPeriods/SelectedPeriods";
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

  const onPeriodChange = useCallback((period: ITimePeriod) => setActivePeriod(period), []);

  return (
    <section className="layout">
      <HistoricalDatesTitle />
      <div className="wrapper-swiper">
        <TimelineCircleSlider
          data={periods}
          onPeriodChange={onPeriodChange}
          activePeriod={activePeriod}
        />
        {activePeriod && (
          <>
            <SelectedPeriods activePeriodTitle={activePeriod.period} />
            <TimelineDatesSlider activePeriod={activePeriod} />
          </>
        )}
      </div>
    </section>
  );
};

export default HistoryTimeline;
