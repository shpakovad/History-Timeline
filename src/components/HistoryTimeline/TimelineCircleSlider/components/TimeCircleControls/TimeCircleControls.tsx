import { ITimePeriod } from "@data/timelineData";
import React from "react";

import "./TimeCircleControls.scss";

interface IProps {
  activePoint: number;
  onPeriodChange: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>,period: ITimePeriod) => void;
  data: ITimePeriod[];
}

const TimeCircleControls = ({ activePoint, onPeriodChange, data }: IProps) => {
  const common = data.length;

  return (
    <div className="wrapper-controls">
      <span>
        0{activePoint} / 0{common}
      </span>
      <div className="buttons">
        <button onClick={
            (event) =>
                onPeriodChange(event,data[activePoint - 2])
        }
                disabled={activePoint === 1}>
          &lt;
        </button>
        <button
          onClick={
            (event) =>
                onPeriodChange(event,data[activePoint])
        }
          disabled={activePoint === data.length}
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default TimeCircleControls;
