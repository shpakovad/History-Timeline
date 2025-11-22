import {use, useMemo, useRef, useState} from "react";

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
  const { id, category } = period;
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [isHovered,setIsHovered] = useState<Boolean>(false)
  const handleMouseEnter = () => {
    if (buttonRef.current) {
      setIsHovered(true)
    }
  };

  const handleMouseLeave = () => {
    if (buttonRef.current) {
      setIsHovered(false)
    }
  };


  const position = calculateCirclePosition(id - 1, periodsLength);
  const isActive = useMemo(() => id === activePeriod?.id, [id, activePeriod?.id]);

  const circleLeftPosition = useMemo(() => `calc(50% + ${position.x}px)`, [position.x]);
  const circleTopPosition = useMemo(() => `calc(50% + ${position.y}px)`, [position.y]);


  return (
    <button
        ref={buttonRef}
      key={id}
      className={`circle-point ${isActive ? "active" : ""}`}
      style={{
        left: circleLeftPosition,
        top: circleTopPosition,
      }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      onClick={() => onPeriodChange(period)}
    >
      {
        isHovered && ! isActive && <span>{id}</span>
      }
      {isActive && (
        <>
          <span>{id}</span>
          <div className="category">{category}</div>
        </>
      )}
    </button>
  );
};

export default TimelineCirclePoint;
