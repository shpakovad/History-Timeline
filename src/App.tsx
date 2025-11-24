import { RefObject, useRef } from "react";

import HistoryTimeline from "./components/HistoryTimeline/HistoryTimeline";
import CrossLayout from "./components/layouts/CrossLayout/CrossLayout";

const App = () => {
  const circleRef = useRef<RefObject<null>>(null);
  return (
    <div>
      <CrossLayout>
        <HistoryTimeline circleRef={circleRef} />
      </CrossLayout>
    </div>
  );
};

export default App;
