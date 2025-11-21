import { calculateCirclePosition } from "../../../utils/calculateCirclePosition";

interface IProps {
  index: number;
  periodsLength: number;
  id: number;
}

const TimelineCirclePoint = ({ index, periodsLength, id }: IProps) => {
  const position = calculateCirclePosition(index, periodsLength);

  return (
    <button
      key={id}
      //className={`circle-point ${index === activePeriod ? 'active' : ''}`}
      style={{
        position: "absolute",
        left: `calc(50% + ${position.x}px)`,
        top: `calc(50% + ${position.y}px)`,
        transform: "translate(-50%, -50%)",
      }}
      //onClick={() => onPeriodChange(index)}
    >
      {index + 1}
    </button>
  );
};

export default TimelineCirclePoint;
