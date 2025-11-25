import { ReactNode } from "react";

import "./CrossLayout.scss";

interface IProps {
  children: ReactNode;
}
const CrossLayout = ({ children }: IProps) => {
  return (
    <div className="layout-wrapper">
      <div className="layout">
        <div className="vertical-line" />
        <div className="horizontal-line" />

        {children}
      </div>
    </div>
  );
};

export default CrossLayout;
