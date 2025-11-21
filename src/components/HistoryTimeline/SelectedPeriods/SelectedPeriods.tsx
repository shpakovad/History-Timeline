import { useMemo } from "react";

import "./SelectedPeriods.scss";

interface IProps {
  activePeriodTitle: string;
}

const SelectedPeriods = ({ activePeriodTitle }: IProps) => {
  const { firstData, secondData } = useMemo(() => {
    const arrayData = activePeriodTitle.split("-");
    return {
      firstData: arrayData[0],
      secondData: arrayData[1],
    };
  }, [activePeriodTitle]);
  return (
    <div className="wrapper-period-title">
      <span>{firstData}</span>
      <span>{secondData}</span>
    </div>
  );
};

export default SelectedPeriods;
