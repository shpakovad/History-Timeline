import React from "react";

import { getDoubleNumberFormat } from "@utils/formatsUtils";

import {ICircleControlsProps} from "@components/HistoryTimeline/types";

import "./TimeCircleControls.scss";

const TimeCircleControls = ({ activePeriod, onPeriodChange, data }: ICircleControlsProps) => {
  const common = data.length;
  const activePoint = activePeriod.id;

  return (
    <div className="wrapper-controls">
      <span>
        {getDoubleNumberFormat(activePoint)} / {getDoubleNumberFormat(common)}
      </span>
      <div className="buttons">
        <button
          onClick={event => onPeriodChange(event, data[activePoint - 2])}
          disabled={activePoint === 1}
        >
          &lt;
        </button>
        <button
          onClick={event => onPeriodChange(event, data[activePoint])}
          disabled={activePoint === data.length}
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default TimeCircleControls;
