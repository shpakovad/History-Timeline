import React from "react";
import {ITimePeriod} from "@data/timelineData";

interface IBaseTimelineProps {
  data: ITimePeriod[];
  activePeriod: ITimePeriod | null;
  onPeriodChange: (
      event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
      period: ITimePeriod
  ) => void;
};

export interface ISliderProps extends IBaseTimelineProps {
  targetRotation: number;
};

export interface IPeriodsSliderProps extends Omit<IBaseTimelineProps, 'activePeriod'> {
  isMobile: boolean;
  activePeriod: ITimePeriod;
};

export interface ICirclePointProps extends Omit<IBaseTimelineProps, 'data'> {
  period: ITimePeriod;
  periodsLength: number;
  index: number;
  targetRotation: number;
}

export interface ICircleControlsProps extends IBaseTimelineProps {
  activePeriod: ITimePeriod;
}

