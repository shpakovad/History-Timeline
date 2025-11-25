import { useMemo, useState } from "react";

import { ITimePeriod } from "@data/timelineData";
import { calculateCirclePosition } from "@utils/calculateCirclePosition";

import "./TimelineCirclePoint.scss";

interface IProps {
  period: ITimePeriod;
  periodsLength: number;
  onPeriodChange: (period: ITimePeriod) => void;
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
  const [isHovered, setIsHovered] = useState<Boolean>(false);

  const position = useMemo(
    () => calculateCirclePosition(index, periodsLength),
    [index, periodsLength]
  );

  const isActive = useMemo(() => id === activePeriod?.id, [id, activePeriod?.id]);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  const classForCirclePoint = ["circle-point", isActive && "active", isHovered && "hovered"]
    .filter(Boolean)
    .join(" ");

  const isShowText = isHovered || isActive;

  return (
    <button
      key={id}
      className={classForCirclePoint}
      style={{
        left: `calc(50% + ${position.x}px)`,
        top: `calc(50% + ${position.y}px)`,
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={() => onPeriodChange(period)}
    >
      {isShowText && (
          <span className="circle-text-wrapper">
          <span
              className="circle-text"
              style={{
                transform: `rotate(${-targetRotation}deg)`,
                transition: 'transform 1s ease-in-out'
              }}
          >
            {id}
          </span>
        </span>
      )}
    </button>
  );
};

export default TimelineCirclePoint;
