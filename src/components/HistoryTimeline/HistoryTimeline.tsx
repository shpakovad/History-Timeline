import React, {useCallback, useEffect, useMemo, useRef, useState} from "react";
import { gsap } from "gsap";

import TimeCircleControls from "@components/HistoryTimeline/TimelineCircleSlider/components/TimeCircleControls/TimeCircleControls";
import { getTimelineData, ITimePeriod } from "@data/timelineData";
import {CIRCLE_SIZE} from "@data/constants/constants";
import {useClickCircle} from "@/hooks/useClickCircle";
import {useDeviceDetection} from "@/hooks/useDeviceDetection";

import HistoricalDatesTitle from "./HistoricalDatesTitle/HistoricalDatesTitle";
import SelectedPeriods from "./SelectedPeriods/SelectedPeriods";
import TimelineCircleSlider from "./TimelineCircleSlider/TimelineCircleSlider";
import TimelineDatesSlider from "./TimelinePeriodsSlider/TimelinePeriodsSlider";

import "./HistoryTimeline.scss";



const HistoryTimeline = () => {
  const [periods, setPeriods] = useState<ITimePeriod[]>([]);
  const [activePeriod, setActivePeriod] = useState<ITimePeriod | null>(null);
  const [categoryTitle, setCategoryTitle] = useState<string | null>(null);

  const targetRotation = useRef(0);
  const circleRef = useRef<HTMLDivElement | null>(null);

  const data = getTimelineData();

  const { showClickCircle, ClickCircleComponent } = useClickCircle();
  useEffect(() => {
    setPeriods(data.periods);
    setActivePeriod(data.periods[0]);
    setCategoryTitle(data.periods[0].category);
  }, []);
    const {isMobile} = useDeviceDetection();

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
    (event: React.MouseEvent<HTMLButtonElement, MouseEvent>,period: ITimePeriod) => {
      const clickX = event.clientX;
      const clickY = event.clientY;

      const defaultSize = isMobile ? 45 : 60;

          showClickCircle({
        position: {x:clickX, y:clickY},
        size:{width: defaultSize, height:defaultSize}
      })
      setActivePeriod(period);
      rotateCircle(period, periods);
    },
    [periods, isMobile]
  );

  return (
    <>
      <HistoricalDatesTitle />
      <ClickCircleComponent/>
        {
            ! isMobile &&
            <div className="wrapper-category-name">
                <span className="category">{categoryTitle}</span>
            </div>
        }
      <div className="wrapper-swiper">
          {
              ! isMobile &&
              <div
                  className="circle"
                  style={{
                      ...CIRCLE_SIZE
                  }}
                  ref={circleRef}>
                  <TimelineCircleSlider
                      data={periods}
                      onPeriodChange={onPeriodChange}
                      activePeriod={activePeriod}
                      targetRotation={targetRotation.current}
                  />
              </div>
          }
        {activePeriod && (
          <>
            <SelectedPeriods activePeriodTitle={activePeriod.period} />
              {
                  isMobile && <div className="wrapper-category-name">
                      <span className="category">{categoryTitle}</span>
                  </div>
              }
              {
              ! isMobile &&
              <TimeCircleControls
                  activePoint={activePeriod.id}
                  data={periods}
                  onPeriodChange={onPeriodChange}
              />
          }

            <TimelineDatesSlider
                activePeriod={activePeriod}
                isMobile={isMobile}
                data={periods}
                onPeriodChange={onPeriodChange}
            />
          </>
        )}
      </div>
    </>
  );
};

export default HistoryTimeline;
