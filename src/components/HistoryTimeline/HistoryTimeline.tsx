import { useCallback, useEffect, useState } from "react";

import TimeCircleControls from "@components/HistoryTimeline/TimelineCircleSlider/components/TimeCircleControls/TimeCircleControls";
import { getTimelineData, ITimePeriod } from "@data/timelineData";

import HistoricalDatesTitle from "./HistoricalDatesTitle/HistoricalDatesTitle";
import "./HistoryTimeline.scss";
import SelectedPeriods from "./SelectedPeriods/SelectedPeriods";
import TimelineCircleSlider from "./TimelineCircleSlider/TimelineCircleSlider";
import TimelineDatesSlider from "./TimelinePeriodsSlider/TimelinePeriodsSlider";

const HistoryTimeline = () => {
  const [periods, setPeriods] = useState<ITimePeriod[]>([]);
  const [activePeriod, setActivePeriod] = useState<ITimePeriod | null>(null);

  const data = getTimelineData();

  useEffect(() => {
    setPeriods(data.periods);
    setActivePeriod(data.periods[0]);
  }, []);

  const onPeriodChange = useCallback((period: ITimePeriod) => {
    setActivePeriod(period);
  }, []);

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

            <TimeCircleControls
              activePoint={activePeriod.id}
              data={periods}
              onPeriodChange={onPeriodChange}
            />
            <TimelineDatesSlider activePeriod={activePeriod} />
          </>
        )}
      </div>
    </section>
  );
};

export default HistoryTimeline;
