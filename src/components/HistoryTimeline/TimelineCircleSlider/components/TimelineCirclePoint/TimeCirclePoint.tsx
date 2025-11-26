import React, { useMemo, useState } from "react";

import { calculateCirclePositionUtils } from "@utils/circlePositionUtils";

import { ITimePeriod } from "@data/timelineData";

import "./TimelineCirclePoint.scss";

interface IProps {
  period: ITimePeriod;
  periodsLength: number;
  onPeriodChange: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    period: ITimePeriod
  ) => void;
  activePeriod: ITimePeriod | null;
  index: number;
  targetRotation: number;
}

const TimelineCirclePoint = ({
  period,
  periodsLength,
  onPeriodChange,
  activePeriod,
  index,
  targetRotation,
}: IProps) => {
  const { id } = period;
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const position = useMemo(
    () => calculateCirclePositionUtils(index, periodsLength),
    [index, periodsLength]
  );

  const isActive = useMemo(() => id === activePeriod?.id, [id, activePeriod?.id]);

  const pointStyle = useMemo(
    () => ({
      left: `calc(50% + ${position.x}px)`,
      top: `calc(50% + ${position.y}px)`,
    }),
    [position]
  );

  const pointTextStyle = useMemo(
    () => ({
      transform: `rotate(${-targetRotation}deg)`,
      transition: "transform 1s ease-in-out",
    }),
    [targetRotation]
  );

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  const classForCirclePoint = ["circle-point", isActive && "active", isHovered && "hovered"]
    .filter(Boolean)
    .join(" ");

  const isShowText = isHovered || isActive;

  return (
    <button
      className={classForCirclePoint}
      style={pointStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={event => {
        ! isActive && onPeriodChange(event, period);
      }}
    >
      {isShowText && (
        <span className="circle-text-wrapper">
          <span className="circle-text" style={pointTextStyle}>
            {id}
          </span>
        </span>
      )}
    </button>
  );
};

export default TimelineCirclePoint;
