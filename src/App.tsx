import HistoryTimeline from "./components/HistoryTimeline/HistoryTimeline";
import CrossLayout from "./components/layouts/CrossLayout/CrossLayout";
const App = () => {
  return (
    <div>
      <CrossLayout>
        <HistoryTimeline />
      </CrossLayout>
    </div>
  );
};

export default App;
