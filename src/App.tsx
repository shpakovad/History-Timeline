import React from 'react';
import HistoryTimeline from "./components/HistoryTimeline/HistoryTimeline";
import CrossLayout from "./components/layouts/CrossLayout/CrossLayout";

const App: React.FC = () => {
    return (
        <div>
            <CrossLayout>
                <HistoryTimeline/>
            </CrossLayout>

        </div>
    );
};

export default App;