import React, { useState } from 'react';
import { Chart } from "react-google-charts"; 

const EntriesChartTracker = (props) => {
    return ( 
        <Chart
    chartType="ScatterChart"
    data={[["Age", "Weight"], [4, 5.5], [8, 12]]}
    width="100%"
    height="400px"
    legendToggle
    />
     );
}
 
export default EntriesChartTracker;