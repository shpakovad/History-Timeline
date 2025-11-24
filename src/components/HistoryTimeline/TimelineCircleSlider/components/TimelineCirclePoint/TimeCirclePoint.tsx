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
      {isHovered && !isActive && (
        <span style={{ transform: `rotate(${-targetRotation}deg)` }}>{id}</span>
      )}
      {isActive && <span style={{ transform: `rotate(${-targetRotation}deg)` }}>{id}</span>}
    </button>
  );
};

export default TimelineCirclePoint;
