import { useCallback, useEffect, useRef, useState } from "react";

import TimeCircleControls from "@components/HistoryTimeline/TimelineCircleSlider/components/TimeCircleControls/TimeCircleControls";
import { getTimelineData, ITimePeriod } from "@data/timelineData";
import { gsap } from "gsap";

import HistoricalDatesTitle from "./HistoricalDatesTitle/HistoricalDatesTitle";
import "./HistoryTimeline.scss";
import SelectedPeriods from "./SelectedPeriods/SelectedPeriods";
import TimelineCircleSlider from "./TimelineCircleSlider/TimelineCircleSlider";
import TimelineDatesSlider from "./TimelinePeriodsSlider/TimelinePeriodsSlider";

const HistoryTimeline = ({ circleRef }: any) => {
  const [periods, setPeriods] = useState<ITimePeriod[]>([]);
  const [activePeriod, setActivePeriod] = useState<ITimePeriod | null>(null);
  const [categoryTitle, setCategoryTitle] = useState<string | null>(null);

  const targetRotation = useRef(0);

  const data = getTimelineData();

  useEffect(() => {
    setPeriods(data.periods);
    setActivePeriod(data.periods[0]);
    setCategoryTitle(data.periods[0].category);
  }, []);

  const rotateCircle = (activePeriod: ITimePeriod, periods: ITimePeriod[]) => {
    if (!circleRef.current) return;

    const activeIndex = periods.findIndex(p => p.id === activePeriod.id);
    const anglePerItem = 360 / periods.length;
    const rotation = -activeIndex * anglePerItem;

    gsap.to(circleRef.current, {
      duration: 1,
      rotation: rotation,
      transformOrigin: "center center",
      ease: "power2.inOut",
      onComplete: () => {
        setCategoryTitle(activePeriod?.category);
      },
      onStart: () => {
        setCategoryTitle(null);
        targetRotation.current = rotation;
      },
    });
  };

  const onPeriodChange = useCallback(
    (period: ITimePeriod) => {
      setActivePeriod(period);
      rotateCircle(period, periods);
    },
    [periods]
  );

  return (
    <>
      <HistoricalDatesTitle />
      <div className="wrapper-category-name">
        <span className="category">{categoryTitle}</span>
      </div>
      <div className="wrapper-swiper">
        <div className="circle" ref={circleRef}>
          <TimelineCircleSlider
            data={periods}
            onPeriodChange={onPeriodChange}
            activePeriod={activePeriod}
            targetRotation={targetRotation.current}
          />
        </div>

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
    </>
  );
};

export default HistoryTimeline;
