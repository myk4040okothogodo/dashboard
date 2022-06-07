import React from 'react';
import { AccumulationChartComponent, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective, AccumulationLegend, PieSeries, AccumulationDataLabel, Inject, AccumulationTooltip } from '@syncfusion/ej2-react-charts';

import { useStateContext } from '../../contexts/ContextProvider';


const Doughnut = ({id, data, legendVisibility, height}) => {
    const { currentMode } = useStateContext();

    return (
      <AccumulationChartComponent
          id = {id}
          legendSettings = {{ visible: legendVisibility, background: 'white' }}
          height = {height}
          background = {currentMode === 'Dark' ? '#3337E' : '#fff'}
          tooltip = {{ enable: true }}
      >
      <Inject services = {[AccumulationLegend, PieSeries, AccumulationDataLabel, AccumulationTooltip ]} />
      <AccumulationSeriesCollectionDirective>
         <AccumulationSeriesDirective 
            name = "Sale"
            dataSource = {data}
            XName = "x"
            YName = "y"
            innerRadius = "40%"
            startAngle = {0}
            endAngle   = {360}
            radius     = "70%"
            expode
            explodeOffset = "10%"
            explodeIndex  = {2}
            dataLabel = {{
                visible: true,
                name :   'text',
                position: 'Inside',
                font: {
                  fontweight: '600',
                  color: '#fff',
                },
            }}
         />
      </AccumulationSeriesCollectionDirective>
      </AccumulationChartComponent>
    );
};

export default Doughnut;
