import { useMemo } from "react";

import { ITimePeriod } from "@data/timelineData";
import { calculateCirclePosition } from "@utils/calculateCirclePosition";

import "./TimelineCirclePoint.scss";

interface IProps {
  period: ITimePeriod;
  onPeriodChange: (period: ITimePeriod) => void;
  periodsLength: number;
  activePeriod: ITimePeriod | null;
}

const TimelineCirclePoint = ({ period, periodsLength, onPeriodChange, activePeriod }: IProps) => {
  const { id } = period;
  const position = calculateCirclePosition(id - 1, periodsLength);
  const isActive = useMemo(() => id === activePeriod?.id, [id, activePeriod?.id]);

  return (
    <button
      key={id}
      className={`circle-point ${isActive ? "active" : ""}`}
      style={{
        left: `calc(50% + ${position.x}px)`,
        top: `calc(50% + ${position.y}px)`,
      }}
      onClick={() => onPeriodChange(period)}
    >
      {isActive ? id : null}
    </button>
  );
};

export default TimelineCirclePoint;
