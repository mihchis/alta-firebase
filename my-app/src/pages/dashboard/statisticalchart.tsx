import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import DropDown from '../../components/dropbox';
import { data, lineOptions } from './linechart';

const StatisticalChart = () => {
  const timer = new Date();
  const month = timer.getMonth() + 1;
  const year = timer.getFullYear();

  const [selected, setSelected] = useState('Ngày');

  let yValues = [1100, 3000, 3900, 4200, 5200, 6000, 5400, 900, 1600, 3420];
  let xValues = [];
  if (selected === 'Ngày') {
    let A = [1, 13, 19, 31];
    for (let i = 1; i <= 35; i++) {
      if (A.includes(i)) {
        xValues.push(i + '');
      } else {
        xValues.push('');
      }
    }
  } else if (selected === 'Tuần') {
    for (let i = 1; i <= 4; i++) {
      xValues.push('Tuần ' + i);
    }
  } else {
    for (let i = 1; i <= 12; i++) {
      xValues.push(i + '');
    }
  }

  return (
    <div className="dashboard-center-chart">
      <div className="dashboard-center-chart_heading">
        <h1> Bảng thống kê theo {selected}</h1>
        <div className="dashboard-center-chart_warp">
          <span className="dashboard-center-chart_span">Xem theo</span>
          <DropDown
            selected={selected}
            setSelected={setSelected}
            options={['Ngày', 'Tuần', 'Tháng']}
          />
        </div>
      </div>
      <div className="dashboard-center-chart_timer">
        Tháng {month}/{year}
      </div>
      <div className="dashboard-center-chart_warp">
        <Line data={data(xValues, yValues)} options={lineOptions} />
        <div className="dashboard-center-chart_quantily">sl</div>
        <div className="dashboard-center-chart_cross">/</div>
        <div className="dashboard-center-chart_day">ngày</div>
      </div>
    </div>
  );
};

export default StatisticalChart;