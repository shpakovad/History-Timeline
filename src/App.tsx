import { RefObject, useRef } from "react";

import HistoryTimeline from "./components/HistoryTimeline/HistoryTimeline";
import CrossLayout from "./components/layouts/CrossLayout/CrossLayout";
import {useDeviceDetection} from "@/hooks/useDeviceDetection";

const App = () => {
  const {isMobile} = useDeviceDetection();
  return (
    <div>
      <CrossLayout>
        <HistoryTimeline/>
      </CrossLayout>
    </div>
  );
};

export default App;
